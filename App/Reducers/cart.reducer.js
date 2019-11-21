const initialState = {
  cartItemsList: [],
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
