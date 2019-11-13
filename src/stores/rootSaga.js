import {all} from 'redux-saga/effects';
import zombies from './zombies/sagas';

export default function* rootSaga() {
  return yield all([zombies]);
}
