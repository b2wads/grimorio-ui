import { connect } from 'react-redux';
import ModalManager from './modal-manager-component';
import * as actions from './modal-manager-actions';

const mapStateToProps = state => {
  const { modalManager } = state.toJS().reducers;

  return {
    modals: modalManager.modal,
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...actions,
  };
};

export default connect(mapStateToProps, null, mergeProps)(ModalManager);
