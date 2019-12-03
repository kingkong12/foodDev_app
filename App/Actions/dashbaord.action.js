export const addtoCartAction = item => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: item,
  };
};

export const deletefromCart = item => {
  return {
    type: 'DELETE_ITEM_FROM_CART',
    payload: item,
  };
};
export const udpateCartQuantity = item => {
  return {
    type: 'UPDATE_QUANTITY_FROM_CART',
    payload: {id: item.id, quantity: item.quantity},
  };
};
