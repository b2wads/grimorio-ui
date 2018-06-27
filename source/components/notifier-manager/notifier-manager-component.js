import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import ReactTransitionGroup from 'react-transition-group/TransitionGroup';

import Alert from '../alert';
// styles
import styles from './notifier-manager.styl';

class Notifier extends PureComponent {
  constructor(props) {
    super(props);

    this.dismissAlert = this.dismissAlert.bind(this);
  }

  static defaultProps = {
    position: 'top-right',
    alerts: [],
  };

  static propTypes = {
    position: PropTypes.oneOf(['top-right', 'top-left', 'bottom-right', 'bottom-left']),
    alerts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.any.isRequired,
        type: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
        headline: PropTypes.string,
        message: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.object]).isRequired,
      })
    ).isRequired,
    onDismiss: PropTypes.func,
    timeout: PropTypes.number,
    dismissTitle: PropTypes.string,
    showIcon: PropTypes.bool,
  };

  dismissAlert(onDismiss) {
    onDismiss();
  }

  render() {
    const { position, alerts, onDismiss, timeout, ...elementProps } = this.props;

    const fullClassName = classNames(styles.container, {
      [styles[position]]: position,
    });

    return (
      <div className={fullClassName}>
        <ReactTransitionGroup transitionName={styles} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {alerts &&
            alerts.map(item => {
              const dismiss = onDismiss ? () => onDismiss(item) : null;
              const { message, ...alertProps } = item;

              // TODO: improvement for the timeout controller
              if (timeout && onDismiss) {
                setTimeout(() => {
                  onDismiss(item);
                }, timeout + 500 + 300);
              }

              return (
                <Alert
                  key={item.id}
                  {...elementProps}
                  {...alertProps}
                  onDismiss={this.dismissAlert.bind(this, dismiss)}
                  dark
                  showIcon
                >
                  {message}
                </Alert>
              );
            })}
        </ReactTransitionGroup>
      </div>
    );
  }
}

export default CSSModules(Notifier, styles);
