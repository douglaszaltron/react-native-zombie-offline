export const INDEX_REQUEST = '@zombies/index_request';
export const INDEX_SUCCESS = '@zombies/index_success';
export const INDEX_FAILURE = '@zombies/index_failure';

export const STORE_REQUEST = '@zombies/store_request';
export const STORE_SUCCESS = '@zombies/store_success';
export const STORE_FAILURE = '@zombies/store_failure';

export const UPDATE_REQUEST = '@zombies/update_request';
export const UPDATE_SUCCESS = '@zombies/update_success';
export const UPDATE_FAILURE = '@zombies/update_failure';

export const DESTROY_REQUEST = '@zombies/destroy_request';
export const DESTROY_SUCCESS = '@zombies/destroy_success';
export const DESTROY_FAILURE = '@zombies/destroy_failure';

export const INITIAL_STATE = {
  isFailure: null,
  isLoading: null,
  refreshing: false,
  items: [],
};
