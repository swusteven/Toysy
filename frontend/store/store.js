import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState={}) => {
  if (process.env.NODE_ENV === 'development') {
    return createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
  } else {
    return createStore(RootReducer, preloadedState, applyMiddleware(thunk))
  }
}

export default configureStore