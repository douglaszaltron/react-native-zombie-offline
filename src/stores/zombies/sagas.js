import {all, call, put, takeLatest} from 'redux-saga/effects';
import database from '../../database';
import NavigationService from '../../services/navigation';
import * as Types from './types';

const armors = database.collections.get('armors');

/**
 * Display a listing of the resource.
 */
export function* index() {
  try {
    const response = yield call(() => armors.query().fetch());
    const items = response.map(item => item._raw);

    yield put({type: Types.INDEX_SUCCESS, payload: {items}});
  } catch (failed) {
    yield put({type: Types.INDEX_FAILURE, payload: {failed}});
  }
}

/**
 * Update the specified resource in storage.
 */
export function* update({payload}) {
  try {
    const {id, data} = payload;

    const response = yield call(
      async () =>
        await database.action(async () => {
          const armor = await armors.find(id);
          return await armor.update(item => {
            item.name = data.name;
            item.defense_points = data.defense_points;
            item.durability = data.durability;
            item.price = data.price;
          });
        }),
    );

    const items = response._raw;

    yield put({type: Types.STORE_SUCCESS, payload: {items}});
    NavigationService.goBack();
  } catch (failed) {
    yield put({type: Types.STORE_FAILURE, payload: {failed}});
  }
}

/**
 * Store a newly created resource in storage.
 */
export function* store({payload}) {
  try {
    const {data} = payload;

    const response = yield call(
      async () =>
        await database.action(async () => {
          return await armors.create(item => {
            item.name = data.name;
            item.defense_points = data.defense_points;
            item.durability = data.durability;
            item.price = data.price;
          });
        }),
    );

    const items = response._raw;

    yield put({type: Types.STORE_SUCCESS, payload: {items}});
    NavigationService.goBack();
  } catch (failed) {
    yield put({type: Types.STORE_FAILURE, payload: {failed}});
  }
}

/**
 * Remove the specified resource from storage.
 */
export function* destroy({payload}) {
  try {
    const {id} = payload;

    yield call(
      async () =>
        await database.action(async () => {
          const armor = await armors.find(id);
          await armor.markAsDeleted();
        }),
    );

    yield put({type: Types.DESTROY_SUCCESS, payload: {id}});
    NavigationService.goBack();
  } catch (failed) {
    yield put({type: Types.DESTROY_FAILURE, payload: {failed}});
  }
}

export default all([
  takeLatest(Types.INDEX_REQUEST, index),
  takeLatest(Types.UPDATE_REQUEST, update),
  takeLatest(Types.STORE_REQUEST, store),
  takeLatest(Types.DESTROY_REQUEST, destroy),
]);
