import {createStore, combineReducers} from 'redux';

import cartItems from './cart.reducer';

const rootReducer = combineReducers({
  cartItems,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
