import {createStore, combineReducers} from 'redux';
import menuItems from './menuItems';

const rootReducer = combineReducers({
  menuItems,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
