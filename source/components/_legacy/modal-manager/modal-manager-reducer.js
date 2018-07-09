import { Map } from 'immutable';

const initialState = Map({
  modals: [],
});

let modals = undefined;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MODAL_SHOW':
      return state.set(
        'modals',
        state.get('modals').concat({
          name: action.payload.name,
          id: action.payload.id,
          header: action.payload.header,
          body: action.payload.body,
          footer: action.payload.footer,
          actionButton: action.payload.actionButton,
          maxWidth: 600,
        })
      );

    case 'MODAL_HIDE':
      modals = state.get('modals').filter(item => item.id !== action.payload.id);
      return state.set('modals', modals);

    default:
      return state;
  }
};
