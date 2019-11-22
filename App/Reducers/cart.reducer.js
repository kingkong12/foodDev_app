import helathyItems from './mockData/listofItems';

const initialState = {
  list: helathyItems,
  cartItemsList: [],
  total: 0,
};

const cartItems = (state = initialState, action) => {
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

export default cartItems;
