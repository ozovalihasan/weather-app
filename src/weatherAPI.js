const getInformation = async (city, unit = 'metric') => {
  const API_KEY = '735520cef897be860b5939b8127bf2ab';
  const resultComplex = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${
      city
    }&units=${
      unit
    }&appid=${
      API_KEY}`,
    { mode: 'cors' },
  );
  const result = await resultComplex.json();
  return result;
};

export default getInformation;
