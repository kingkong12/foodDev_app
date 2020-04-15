export const loggedIn = () => {
  return {
    type: 'authenticateUser',
  };
};

export const logOut = () => {
  return {
    type: 'logOut',
  };
};

export const setAdminCredentails = payload => {
  return {
    type: 'SET_ADMIN_CREDENTIALS',
    payload: payload,
  };
};
