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

export const addDashboardItem = payload => {
  return {
    type: 'LOAD_ITEM',
    payload: payload,
  };
};

export const showActivityIndicator = payload => {
  return {
    type: 'SHOW_ACTIVITY_INDICATOR',
  };
};

export const hideActivityIndicator = payload => {
  return {
    type: 'HIDE_ACTIVITY_INDICATOR',
  };
};

export const updateDashboardItem = payload => {
  return {
    type: 'UPDATE_DASHBOARD-ITEM',
    payload: payload,
  };
};
