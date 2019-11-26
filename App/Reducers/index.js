import {createStore, combineReducers} from 'redux';

import itemReducer from './cart.reducer';

// this is where the state of enitre app is stored at
// also can be called database
// all cart items are stored here
//  also itemsDetals are also stored here
// also goolgle : what is reducer in redux ?  this will give you an explainntion of it
const rootReducer = combineReducers({
  itemReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
