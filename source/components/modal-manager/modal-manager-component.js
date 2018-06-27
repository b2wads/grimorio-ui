import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Modal from '../modal';
// styles
import styles from './modal-manager.styl';

class ModalManager extends PureComponent {
  static defaultProps = {
    modals: undefined,
  };

  static propTypes = {
    modals: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.any.isRequired,
        header: PropTypes.string,
        body: PropTypes.any,
        footer: PropTypes.bool,
        actionButton: PropTypes.any,
        maxWidth: PropTypes.number,
      })
    ),
    className: PropTypes.string,
    effect: PropTypes.string,
    onDismiss: PropTypes.func,
  };

  render() {
    const { modals, className, effect, onDismiss } = this.props;

    return (
      <div className={className}>
        {modals &&
          modals.map((item, index) => {
            return <Modal key={item.header} data={item} effect={effect} onDismiss={onDismiss} />;
          })}
      </div>
    );
  }
}

export default CSSModules(ModalManager, styles);
