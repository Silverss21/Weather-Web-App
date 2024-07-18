const getCities = () => {
  return JSON.parse(localStorage.getItem('cities') || '[]');
};

export { getCities };
