import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import redux from "./reducer";
import saga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  redux,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);
