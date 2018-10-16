import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

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
    dots: PropTypes.bool,
    arrows: PropTypes.bool,
    autoplay: PropTypes.bool,
    delay: PropTypes.number,
  };

  static defaultProps = {
    delay: 5000,
  };

  componentDidMount() {
    this.setLoop();
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

  renderChildren(val) {
    const { command } = this.state;
    return React.Children.map(this.props.children, (child, i) => {
      if (val === i) {
        return React.cloneElement(child, {
          className: classNames(styles.slide, styles.current, styles[command]),
        });
      }
    });
  }

  renderArrows() {
    return (
      <div className={styles.btn}>
        <button onClick={() => this.prevSlide()}>
          --
        </button>

        <button onClick={() => this.nextSlide(true)}>
          &gt;
        </button>
      </div>
    );
  }

  renderDots(children) {
    const { current } = this.state;
    return (
      <ul className={styles.dots}>
        {children.map((_, i) => (
          <li className={classNames(styles.dot, { [styles.active]: current === i })} onClick={this.goTo(i)}>
            {i + 1}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { current } = this.state;
    const { children, dots, arrows, className } = this.props;

    return (
      <div className={`slider__content ${!className ? '' : className}`}>

        <div className={styles.wrapper}>
          {this.renderChildren(current)}
        </div>

        {dots && this.renderDots(children)}

        {arrows && this.renderArrows()}

      </div>
    );
  }
}

export default CSSModules(Slider, styles);
