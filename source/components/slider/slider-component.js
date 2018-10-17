import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import { uniqueId } from '../../helpers';

import Icon from '../icon';

import styles from './slider.styl';

class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      command: 'next',
      loop: null,
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  static propTypes = {
    children: PropTypes.array,
    className: PropTypes.string,
    dotsClassName: PropTypes.string,
    arrowClassName: PropTypes.string,
    dots: PropTypes.bool,
    dotsBackground: PropTypes.bool,
    arrows: PropTypes.bool,
    autoplay: PropTypes.bool,
    delay: PropTypes.number,
  };

  static defaultProps = {
    delay: 5000,
    autoplay: false,
  };

  componentDidMount() {
    this.setLoop();
  }

  componentWillUnmount() {
    const { loop } = this.state;
    clearInterval(loop);
  }

  setLoop() {
    const { autoplay, delay } = this.props;
    autoplay &&
      this.setState({
        loop: setInterval(() => {
          this.nextSlide();
        }, delay),
      });
  }

  goTo(val) {
    const { loop } = this.state;
    return () => {
      clearInterval(loop);
      this.setLoop();
      this.setState({ current: val });
    };
  }

  nextSlide(clear) {
    const { current, loop } = this.state;
    const { children } = this.props;

    if (current + 1 < children.length) {
      this.setState({ current: current + 1, command: 'next' });
    } else {
      this.setState({ current: 0, command: 'next' });
    }

    if (clear) {
      clearInterval(loop);
      this.setLoop();
    }
  }

  prevSlide() {
    const { current, loop } = this.state;
    const { children } = this.props;
    clearInterval(loop);

    if (current !== 0) {
      this.setState({ current: current - 1, command: 'prev' });
    } else {
      this.setState({ current: children.length - 1, command: 'prev' });
    }

    this.setLoop();
  }

  renderChildren(current) {
    const { command } = this.state;

    return React.Children.map(this.props.children, (child, index) => {
      if (current === index) {
        return React.cloneElement(child, {
          className: classNames(styles.currentSlide, styles[command], child.props.className),
        });
      }
    });
  }

  renderArrows(arrowClassName) {
    return (
      <div className={classNames(styles.arrow, arrowClassName)}>
        <button className={styles.arrowLeft} onClick={() => this.prevSlide()}>
          <Icon size="32px" name="navigate_before" />
        </button>

        <button className={styles.arrowRight} onClick={() => this.nextSlide(true)}>
          <Icon size="32px" name="navigate_next" />
        </button>
      </div>
    );
  }

  renderDots(children, dotsClassName, dotsBackground) {
    const { current } = this.state;
    return (
      <ul className={classNames(styles.dots, dotsClassName, { [styles.hasDotsBackground]: dotsBackground })}>
        {children.map((_, index) => (
          <li
            className={classNames(styles.dotsBtn, { [styles.isActive]: current === index })}
            onClick={this.goTo(index)}
            key={uniqueId()}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    );
  }

  cleanRest(rest) {
    delete rest.autoplay;
    delete rest.delay;

    return rest;
  }

  render() {
    const { current } = this.state;
    const { children, dots, arrows, className, dotsClassName, arrowClassName, dotsBackground, ...rest } = this.props;
    const sliderClass = classNames(styles.content, className, {
      [styles.withArrow]: arrows,
    });

    return (
      <div className={sliderClass} {...this.cleanRest(rest)}>
        <div className={styles.wrapper}>
          {this.renderChildren(current)}
        </div>

        {dots && this.renderDots(children, dotsClassName, dotsBackground)}
        {arrows && this.renderArrows(arrowClassName)}
      </div>
    );
  }
}

export default CSSModules(Slider, styles);
