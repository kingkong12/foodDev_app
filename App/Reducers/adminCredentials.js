import adminCredentials from './mockData/adminCredentials';

const initialState = {
  loginDetails: {},
  isLoggedIn: false,
};
const adimAccess = (state = initialState, action) => {
  switch (action.type) {
    case 'authenticateUser':
      return {...state, isLoggedIn: true};
    case 'logOut':
      return {...state, isLoggedIn: false};
    case 'SET_ADMIN_CREDENTIALS':
      return {...state, loginDetails: action.payload[0]};
    default:
      return state;
  }
};
export default adimAccess;
