import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSagas";
import reducers from "./reducers/index";

const sagaMiddleware = createSagaMiddleware();
const middleware = [ sagaMiddleware ];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducers,
  window.preloadedState || {},
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export default store;
