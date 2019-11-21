import helathyItems from './mockData/listofItems';

const initialState = {
  Items: helathyItems,
};

const menuItems = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default menuItems;
