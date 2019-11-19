export const addtoCartAction = item => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: item,
  };
};
