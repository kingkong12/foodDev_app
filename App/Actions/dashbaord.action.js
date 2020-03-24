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

export const addMedicine = item => {
  return {
    type: 'addMedicineToCart',
    payload: item,
  };
};
