import {createStore, combineReducers} from 'redux';
import mainReducer from './cart.reducer';

const rootReducer = combineReducers({
 mainReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;