const storage = () => {
  const setUnit = (unit) => {
    localStorage.unit = JSON.stringify(unit);
  };

  const getUnit = () => {
    localStorage.unit || setUnit("metric");
    return JSON.parse(localStorage.unit);
  };

  return {
    getUnit,
    setUnit,
  };
};

export default storage();
