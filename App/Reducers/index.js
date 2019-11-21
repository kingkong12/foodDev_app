import {createStore, combineReducers} from 'redux';
import menuItems from './menuItems';
import cartItems from './cart.reducer';

const rootReducer = combineReducers({
  menuItems,
  cartItems,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
