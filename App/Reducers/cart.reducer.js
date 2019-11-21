const initialState = {
  cartItemsList: [
    {
      id: 1,
      itemName: 'Granular Bars',
      url:
        'https://i2.wp.com/www.foodfaithfitness.com/wp-content/uploads/2018/08/sugar-free-keto-low-carb-granola-bars-photograph.jpg',
      price: '4.00',
      information:
        'A simple, soft and chewy granola bars recipe that’s delicious as-is or can be adapted based on your favorite dried fruits, nuts or chocolate',
      calories: '560',
    },
  ],
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
