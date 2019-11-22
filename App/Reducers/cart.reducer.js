import helathyItems from './mockData/listofItems';

const initialState = {
  list: helathyItems,
  cartItemsList: [],
  total: 0,
};

const itemReducer = (state = initialState, action) => {
  console.log('props  . . . . . .', state.cartItemsList);
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        cartItemsList: state.cartItemsList.concat(action.payload),
      };
    default:
      return state;
  }
};

export default itemReducer;
