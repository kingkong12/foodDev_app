import helathyItems from './mockData/listofItems';

const initialState = {
  list: helathyItems,
  cartItemsList: [],
  total: 0,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART': // when a "add to basket button is pressedthis block of code gets executed"
      //  below codewill destructure state and append item into cartItem list
      return {
        ...state,
        cartItemsList: state.cartItemsList.concat(action.payload),
      };
    default:
      return state;
  }
};

export default itemReducer;
