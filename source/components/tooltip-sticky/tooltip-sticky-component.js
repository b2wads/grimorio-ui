import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ReactDOM from 'react-dom';
import classNames from 'classnames';

import styles from './tooltip-sticky.styl';

class TooltipSticky extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.element,
    children: PropTypes.element,
    showOnSide: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    showOnSide: false,
    disabled: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      position: {},
      posX: undefined,
      posY: undefined,
      classPosition: '',
    };

    this.holdTooltip = React.createRef();
    this.elemShowTooltip = React.createRef();
    this.onMouseOver = this.onMouseOver.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
    this.showTooltip = this.showTooltip.bind(this);

    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }
  componentWillUnmount() {
    this.clearTimeout();
  }
  onMouseOver() {
    this.clearTimeout();

    this.setState(
      {
        show: true,
      },
      () => {
        this.getTooltipPosition();
      }
    );
  }
  getTooltipPosition() {
    const MINIMUM_HORIZONTAL_POSITION_VALUE = 10;
    const MINIMUM_RESOLUTION_TO_SHOW_ON_SIDE = 480;

    const { x, y, width, height } = this.elemShowTooltip.current.getBoundingClientRect();
    const arrowWidth = 15;
    const arrowHeight = 15;
    const pageScroll = window.scrollY;
    let posX = this.windowWidth / 2 > x ? 'left' : 'right';
    let posY = this.windowHeight / 2 > y ? 'bottom' : 'top';
    const tooltipWidth = this.holdTooltip.current && this.holdTooltip.current.offsetWidth;
    const tooltipHeight = this.holdTooltip.current && this.holdTooltip.current.offsetHeight;

    function fitHorizontalPosition(horizontalPosition, windowWidth) {
      if (horizontalPosition <= MINIMUM_HORIZONTAL_POSITION_VALUE) {
        return MINIMUM_HORIZONTAL_POSITION_VALUE;
      }

      if (horizontalPosition + tooltipWidth + MINIMUM_HORIZONTAL_POSITION_VALUE > windowWidth) {
        return windowWidth - tooltipWidth - MINIMUM_HORIZONTAL_POSITION_VALUE;
      }

      return horizontalPosition;
    }

    function retrieveHorizontalPosition(context) {
      if (context.props.showOnSide && context.windowWidth > MINIMUM_RESOLUTION_TO_SHOW_ON_SIDE) {
        const horizontalPosition = posX === 'left' ? x + width : x - tooltipWidth - arrowWidth;

        return `${horizontalPosition}px`;
      } else {
        const horizontalPosition = posX === 'right' ? x - tooltipWidth + width + arrowWidth : x - arrowWidth;

        return `${fitHorizontalPosition(horizontalPosition, context.windowWidth)}px`;
      }
    }

    function retrieveVerticalPosition(context) {
      if (context.props.showOnSide && context.windowWidth > MINIMUM_RESOLUTION_TO_SHOW_ON_SIDE) {
        posY = 'top';
        return `${pageScroll + y - arrowHeight}px`;
      } else {
        return posY === 'top'
          ? `${pageScroll + y - tooltipHeight - arrowHeight}px`
          : `${pageScroll + y + height + arrowHeight}px`;
      }
    }

    const style = {
      left: retrieveHorizontalPosition(this),
      top: retrieveVerticalPosition(this),
    };

    this.setState({
      position: style,
      posX: posX,
      posY: posY,
    });
  }
  showTooltip() {
    this.clearTimeout();
    this.setState({
      show: true,
    });
  }
  hideTooltip() {
    this.timeoutTooltip = setTimeout(() => {
      this.setState({
        show: false,
        posY: undefined,
        posX: undefined,
        position: {},
      });
    }, 300);
  }
  clearTimeout() {
    clearTimeout(this.timeoutTooltip);
  }
  renderTooltip() {
    const { position, show, posX, posY } = this.state;
    const { className, showOnSide } = this.props;
    const finalClassName = classNames(styles.tooltip, {
      className: className,
      [styles.show]: show,
      [styles[posX]]: posX,
      [styles[posY]]: posY,
      [styles.side]: showOnSide,
      [styles.topBottom]: !showOnSide,
    });

    return ReactDOM.createPortal(
      <div
        ref={this.holdTooltip}
        style={position}
        className={finalClassName}
        onMouseOver={this.showTooltip}
        onMouseOut={this.hideTooltip}
      >
        {this.props.title &&
          <h5 className={styles.title}>
            {this.props.title}
          </h5>}
        <div className={styles.body}>
          {this.props.body}
        </div>
      </div>,
      document.body
    );
  }
  render() {
    const { disabled } = this.props;
    const { show } = this.state;
    return (
      <span>
        <span
          onMouseOver={this.onMouseOver}
          onMouseOut={this.hideTooltip}
          className={styles.wrapper}
          ref={this.elemShowTooltip}
        >
          {this.props.children}
        </span>
        {show && !disabled && this.renderTooltip()}
      </span>
    );
  }
}

export default TooltipSticky;
