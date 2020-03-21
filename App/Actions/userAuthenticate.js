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
