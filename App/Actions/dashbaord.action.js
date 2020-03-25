export const addMedicine = medicine => {
  return {
    type: 'addMedicineToCart',
    payload: medicine,
  };
};
export const removeFromCart = medicine => {
  return {
    type: 'deleteFromMedicineBasket',
    payload: medicine,
  };
};
export const modifyMedicineQuantity = medicine => {
  return {
    type: 'updateMedicineQuantity',
    payload: {quantity: medicine.quantity, id: medicine.id},
  };
};
