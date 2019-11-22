import {createStore, combineReducers} from 'redux';

import itemReducer from './cart.reducer';

const rootReducer = combineReducers({
  itemReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
