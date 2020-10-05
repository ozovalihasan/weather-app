const storage = () => {
  const setUnit = (unit) => {
    localStorage.unit = JSON.stringify(unit);
    return localStorage.unit;
  };

  const getUnit = () => JSON.parse(localStorage.unit || setUnit('metric'));

  return {
    getUnit,
    setUnit,
  };
};

export default storage();
