const isAuthenticated = () => {
  const token = sessionStorage.getItem('token');
  if (token) {
    return true;
  }
  return false;
};

export default isAuthenticated;
