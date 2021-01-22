import React, { PureComponent } from 'react';

import ReactDOM from 'react-dom';
import classNames from 'classnames';

import styles from './tooltip-sticky.styl';

class TooltipSticky extends PureComponent {
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
    const { x, y, width, height } = this.elemShowTooltip.current.getBoundingClientRect();
    const arrowWidth = 15;
    const arrowHeight = 15;
    const pageScroll = window.scrollY;
    let posX = this.windowWidth / 2 > x ? 'left' : 'right';
    let posY = this.windowHeight / 2 > y ? 'bottom' : 'top';
    const tooltipWidth = this.holdTooltip.current && this.holdTooltip.current.offsetWidth;
    const tooltipHeight = this.holdTooltip.current && this.holdTooltip.current.offsetHeight;

    let style = {
      left: posX === 'right' ? `${x - tooltipWidth + width + arrowWidth}px` : `${x - arrowWidth}px`,
      top: posY === 'top'
        ? `${pageScroll + y - tooltipHeight - arrowHeight}px`
        : `${pageScroll + y + height + arrowHeight}px`,
    };

    if (this.props.showOnSide) {
      style = {
        left: posX === 'left' ? `${x + width}px` : `${x - tooltipWidth - arrowWidth}px`,
        top: `${pageScroll + y - arrowHeight}px`,
      };
      posY = 'top';
    }

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
        {show && this.renderTooltip()}
      </span>
    );
  }
}

export default TooltipSticky;
