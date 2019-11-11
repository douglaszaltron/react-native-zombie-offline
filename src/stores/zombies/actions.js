import Types from './types';

/**
 * Display a refresh listing of the resource.
 */
export function refresh() {
  return {
    type: Types.INDEX_REQUEST,
    payload: {refreshing: true},
  };
}

/**
 * Display a listing of the resource.
 */
export function index() {
  return {
    type: Types.INDEX_REQUEST,
    payload: {refreshing: false},
  };
}

/**
 * Update the specified resource in storage.
 */
export function update(id, data) {
  return {
    type: Types.UPDATE_REQUEST,
    payload: {id, data},
  };
}

/**
 * Store a newly created resource in storage.
 */
export function store(data) {
  return {
    type: Types.STORE_REQUEST,
    payload: {data},
  };
}

/**
 * Remove the specified resource from storage.
 */
export function destroy(id) {
  return {
    type: Types.DESTROY_REQUEST,
    payload: {id},
  };
}
