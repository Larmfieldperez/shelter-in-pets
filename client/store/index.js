import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import dogs from './allDogs';
import pickedImage from './imagePicker';
import dog from './likedDog';
const reducer = combineReducers({ user, dogs, pickedImage, dog });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);
export default store;

export * from './user';
export * from './allDogs';
export * from './imagePicker';
export * from './likedDog';
