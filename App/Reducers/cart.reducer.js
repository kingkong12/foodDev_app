import helathyItems from './mockData/listofItems';

const initialState = {
  list: helathyItems,
  cartItemsList: [],
  total: 0,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addMedicineToCart':
      return {
        ...state,
        cartItemsList: state.cartItemsList.concat(action.payload),
      };

    case 'DELETE_ITEM_FROM_CART':
      let newItem = state.cartItemsList.filter(
        item => action.payload.id !== item.id,
      );
      return {...state, cartItemsList: newItem};

    case 'UPDATE_QUANTITY_FROM_CART':
      let cartItemIndex = state.cartItemsList.findIndex(
        item => item.id === action.payload.id,
      );
      let updatedObject = {
        ...state.cartItemsList[cartItemIndex],
        quantity: action.payload.quantity,
      };
      let updatedCartItemsList = [
        ...state.cartItemsList.slice(0, cartItemIndex),
        updatedObject,
        ...state.cartItemsList.slice(cartItemIndex + 1),
      ];

      return {...state, cartItemsList: updatedCartItemsList};
    default:
      return state;
  }
};

export default itemReducer;
