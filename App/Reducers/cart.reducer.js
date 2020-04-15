import helathyItems from './mockData/listofItems';
// nee to remove this item.
const initialState = {
  list: [],
  cartItemsList: [],
  total: 0,
  spinner: false,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_ITEM':
      return {
        ...state,
        list: action.payload,
      };
    case 'ADD_ITEM_TO_CART':
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
    case 'SHOW_ACTIVITY_INDICATOR':
      return {...state, spinner: true};

    case 'HIDE_ACTIVITY_INDICATOR':
      return {...state, spinner: false};
    default:
      return state;
  }
};

export default itemReducer;
