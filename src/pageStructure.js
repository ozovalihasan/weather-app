const PageStructure = () => {
  const showResults = (weatherCondition) => {
    const results = document.getElementById("results");
    while (results.lastChild) {
      results.removeChild(results.lastChild);
    }
    const container = document.createElement("div");
    container.innerHTML = `
  <div id="city">${weatherCondition.name}</div>
  <div id="main">${weatherCondition.weather[0].main}</div>
  <div id="description">${weatherCondition.weather[0].description}</div>
  <div id="temp">${weatherCondition.main.temp}</div>
  <div id="temp-max">${weatherCondition.main.temp_max}</div>
  <div id="temp-min">${weatherCondition.main.temp_min}</div>
  <div id="pressure">${weatherCondition.main.pressure}</div>
  <div id="humidity">${weatherCondition.main.humidity}</div>
  <div id="speed">${weatherCondition.wind.speed}</div>
  <div id="deg">${weatherCondition.wind.deg}</div>
  `;

    results.appendChild(container);
  };

  return { showResults };
};

export default PageStructure();
