import { connect } from 'react-redux';
import NotifierManager from './notifier-manager-component';
import * as actions from './notifier-manager-actions';

const mapStateToProps = state => {
  const { notifierManager } = state.toJS().reducers;

  return {
    notifiers: notifierManager.notifiers,
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...actions,
  };
};

export default connect(mapStateToProps, null, mergeProps)(NotifierManager);
