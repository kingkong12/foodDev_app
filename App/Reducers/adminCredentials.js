import adminCredentials from './mockData/adminCredentials';

const initialState = {
  loginDetails: adminCredentials,
  isLoggedIn: false,
};
const adimAccess = (state = initialState, action) => {
  switch (action.type) {
    case 'authenticateUser':
      return {...state, isLoggedIn: true};
    case 'logOut':
      return {...state, isLoggedIn: false};
    default:
      return state;
  }
};
export default adimAccess;
