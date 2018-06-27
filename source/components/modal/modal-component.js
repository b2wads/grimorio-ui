import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
// components
import Button from '../button';
import Icon from '../icon';
// styles
import styles from './modal.styl';

class Modal extends PureComponent {
  constructor(props) {
    super(props);

    this.overlay = 'overlay';
    this.content = 'content';
  }

  static defaultProps = {
    effect: 'scaleUp',
    onDismiss: () => {},
    data: {},
    key: undefined,
  };

  static propTypes = {
    effect: PropTypes.oneOf([
      'scaleUp',
      'slideFromRight',
      'slideFromBottom',
      'newspaper',
      'fall',
      'sideFall',
      'flipHorizontalThreeD',
      'flipVerticalThreeD',
      'signThreeD',
      'superScaled',
      'rotateFromBottomThreeD',
      'rotateFromLeftThreeD',
    ]),
    onDismiss: PropTypes.func,
    data: PropTypes.object,
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  render() {
    const { effect, onDismiss, data, key } = this.props;

    if (!data) {
      return null;
    }

    const maxWidth = data ? `${data.maxWidth}px` : 'auto';

    return (
      <div
        ref={c => {
          this.overlay = c;
        }}
        className={styles.overlay}
        key={key}
      >
        <div
          ref={c => {
            this.content = c;
          }}
          className={classNames(styles.content, styles[effect])}
          style={{ maxWidth: maxWidth }}
        >
          <div>
            {data.header &&
              <header className={styles.header}>
                <h3 className={styles['header-title']}>{data.header}</h3>
                <Button onClick={() => onDismiss(data)}>
                  <Icon name="close" />
                </Button>
              </header>}
            <div className={styles.body}>
              {data.body}
            </div>
            {data.footer &&
              <footer className={styles.footer}>
                <Button onClick={() => onDismiss(data)}>Fechar</Button>
                {data.actionButton}
              </footer>}
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(Modal, styles);
