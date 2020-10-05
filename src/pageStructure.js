import storage from './localStorageOperations';

const PageStructure = () => {
  const showLoader = () => {
    const results = document.getElementById('results');
    while (results.lastChild) {
      results.removeChild(results.lastChild);
    }

    const loader = document.getElementsByClassName('loader-container')[0];
    loader.classList.add('loader');
    loader.classList.remove('d-none');
  };

  const showResults = (weatherCondition) => {
    const backgroundImages = {
      '01d':
        'https://images.unsplash.com/photo-1521378585384-e6a621860c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      '01n':
        'https://images.unsplash.com/photo-1560278997-3c7d3dfbddc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=60',
      '02d':
        'https://images.unsplash.com/photo-1582485565167-75055e5e6b5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      '02n':
        'https://images.unsplash.com/photo-1522054177185-dafea78a5c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1393&q=80',
      '03d':
        'https://images.unsplash.com/photo-1598378028718-37a61e030860?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      '03n':
        'https://images.unsplash.com/photo-1510650499-08d11de6119e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      '04d':
        'https://images.unsplash.com/photo-1590664950986-c592693310a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      '04n':
        'https://images.unsplash.com/photo-1479156661942-92cd989cdb56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      '09d':
        'https://images.unsplash.com/photo-1556485689-33e55ab56127?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      '09n':
        'https://images.unsplash.com/photo-1499184949561-704bad5f6cd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      '10d':
        'https://images.unsplash.com/photo-1532928448850-d740ccdd9f9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      '10n':
        'https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
      '11d':
        'https://images.unsplash.com/photo-1442213391790-7656f6e368b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80',
      '11n':
        'https://images.unsplash.com/photo-1531204823259-03b92a613013?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1076&q=80',
      '13d':
        'https://images.unsplash.com/photo-1516431883659-655d41c09bf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80',
      '13n':
        'https://images.unsplash.com/photo-1544274411-a7afe6230711?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      '50d':
        'https://images.unsplash.com/photo-1517278401293-161e3fffd176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      '50n':
        'https://images.unsplash.com/photo-1508793009226-00bf4c6c9746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1398&q=80',
      default:
        'https://images.unsplash.com/photo-1510908072721-6fbd31199630?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    };

    if (backgroundImages[weatherCondition.weather[0].icon]) {
      document.body.style.backgroundImage = `url(
      ${backgroundImages[weatherCondition.weather[0].icon]}
      )`;

      const content = document.getElementById('content');
      content.classList = '';

      if (weatherCondition.weather[0].icon.includes('d')) {
        content.classList.add('bg-day');
      } else {
        content.classList.add('bg-nigth');
      }
    } else {
      document.body.style.backgroundImage = `url(
        ${backgroundImages.default}
      )`;
    }

    const results = document.getElementById('results');
    while (results.lastChild) {
      results.removeChild(results.lastChild);
    }

    const resultsContainer = document.createElement('div');
    const units = {
      metric: {
        degree: '°C',
        speed: 'm/s',
        humidity: '%',
        direction: '°',
      },
      imperial: {
        degree: 'K',
        speed: 'mph',
        humidity: '%',
        direction: '°',
      },
    };
    const currentUnit = units[storage.getUnit()];
    resultsContainer.classList.add('results-container');
    resultsContainer.innerHTML = `
    <div id="city">
       ${weatherCondition.name.toUpperCase()}
    </div>
    <div id="description">
      ${weatherCondition.weather[0].description.toUpperCase()}
    </div>
    <div id="temp">
      ${weatherCondition.main.temp}
      <span> ${currentUnit.degree} </span>
    </div>
    <div class="temp-max-container">
      <div class="max-inside-container">
        <div>Max</div>
        <div id="temp-max">
          ${weatherCondition.main.temp_max}${currentUnit.degree}
        </div>
      </div>
    </div>
    <div class="temp-min-container">
      <div class="min-inside-container">
        <div>Min</div>
        <div id="temp-min">
          ${weatherCondition.main.temp_min}${currentUnit.degree}
        </div>
      </div>
    </div>
    <div class="humidity-container">
      <div>Humidity</div>
      <div id="humidity">
        ${weatherCondition.main.humidity}${currentUnit.humidity}
      </div>
    </div>
    <div class="wind-container">
      <div class="wind-title">Wind</div>
      <div class="wind-information">
        <div class="speed-container">
          <div>Speed</div>
          <div id="speed">
            ${weatherCondition.wind.speed} ${currentUnit.speed}
          </div>
        </div>
        <div class="direction-container">
          <div>Direction</div>
          <div id="deg">${weatherCondition.wind.deg}${
  currentUnit.direction
}</div>
        </div>
      </div>
    </div>`;

    results.appendChild(resultsContainer);
  };

  const removeLoader = () => {
    const loader = document.getElementsByClassName('loader-container')[0];
    loader.classList.remove('loader');
  };

  return { showResults, showLoader, removeLoader };
};

export default PageStructure();
