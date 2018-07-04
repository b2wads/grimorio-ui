import { Map } from 'immutable';

const initialState = Map({
  notifiers: [],
});

let notifiers = undefined;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NOTIFIER_SHOW':
      return state.set(
        'notifiers',
        state.get('notifiers').concat({
          name: action.payload.name,
          id: `${new Date().getTime()}`,
          type: action.payload.type,
          headline: action.payload.headline,
          message: action.payload.message,
        })
      );

    case 'NOTIFIER_HIDE':
      notifiers = state.get('notifiers').filter(item => item.id !== action.payload.id);
      return state.set('notifiers', notifiers);
    default:
      return state;
  }
};
