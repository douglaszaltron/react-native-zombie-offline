import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const storeReducers = (reducers, middleware) => {
  const enhancer = applyMiddleware(...middleware);
  return createStore(reducers, enhancer);
};

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = storeReducers(rootReducer, middleware);

sagaMiddleware.run(rootSaga);

export {store};
