import Types from './types';

export default function reducer(state = Types.INITIAL_STATE, action) {
  switch (action.type) {
    case Types.INDEX_REQUEST:
    case Types.STORE_REQUEST:
    case Types.UPDATE_REQUEST:
    case Types.DESTROY_REQUEST: {
      const {refreshing} = action.payload;

      return {
        ...state,
        isFailure: undefined,
        isLoading: !refreshing,
        refreshing: refreshing ? refreshing : false,
      };
    }

    case Types.INDEX_SUCCESS: {
      const {items} = action.payload.data;

      return {
        ...state,
        isLoading: false,
        items: [...state.items, items],
      };
    }

    case Types.STORE_SUCCESS: {
      const {items} = action.payload.data;

      return {
        ...state,
        isLoading: false,
        items: [items].concat(state.items),
      };
    }

    case Types.UPDATE_SUCCESS: {
      const {id, ...rest} = action.payload;

      return {
        ...state,
        isLoading: false,
        items: state.items.map(item =>
          item.id === id ? {...item, ...rest.items} : item,
        ),
      };
    }

    case Types.DESTROY_SUCCESS: {
      const {id} = action.payload;

      return {
        ...state,
        isLoading: false,
        items: state.items.filter(item => item.id !== id),
      };
    }

    case Types.INDEX_FAILURE:
    case Types.STORE_FAILURE:
    case Types.UPDATE_FAILURE:
    case Types.DESTROY_FAILURE: {
      const {failed} = action.payload.data;
      return {
        ...state,
        isFailure: failed,
        isLoading: false,
      };
    }

    default:
      return state;
  }
}
