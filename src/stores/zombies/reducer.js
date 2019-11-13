import produce from 'immer';
import * as Types from './types';

export default function reducer(state = Types.INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.INDEX_REQUEST:
      case Types.STORE_REQUEST:
      case Types.UPDATE_REQUEST:
      case Types.DESTROY_REQUEST: {
        const {refreshing} = action.payload;
        draft.isFailure = null;
        draft.isLoading = !refreshing;
        draft.refreshing = refreshing ? refreshing : false;
        return draft;
      }

      case Types.INDEX_SUCCESS: {
        const {items} = action.payload;
        draft.refreshing = false;
        draft.isLoading = false;
        draft.items = items;
        return draft;
      }

      case Types.STORE_SUCCESS: {
        const {items} = action.payload;
        draft.isLoading = false;
        draft.items = [items].concat(state.items);
        return draft;
      }

      case Types.UPDATE_SUCCESS: {
        const {id, ...rest} = action.payload;
        draft.isLoading = false;
        draft.items = state.items.map(item =>
          item.id === id ? {...item, ...rest.items} : item,
        );
        return draft;
      }

      case Types.DESTROY_SUCCESS: {
        const {id} = action.payload;
        draft.isLoading = false;
        draft.items = state.items.filter(item => item.id !== id);
        return draft;
      }

      case Types.INDEX_FAILURE:
      case Types.STORE_FAILURE:
      case Types.UPDATE_FAILURE:
      case Types.DESTROY_FAILURE: {
        const {failed} = action.payload;
        draft.isFailure = failed;
        draft.isLoading = false;
        return draft;
      }

      default:
        return draft;
    }
  });
}
