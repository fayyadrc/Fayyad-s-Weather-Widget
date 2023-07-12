window.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.searchbar');
    const searchButton = document.querySelector('.search button');
  
    // Function to fetch weather data for a given city
    const fetchWeatherData = (city) => {
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=f3dd2941c5274000b9a62210231207&q=${city}&aqi=no`;
  
        // Fetch data from the API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // getting data from api
                const cityName = data.location.name;
                const temperature = data.current.temp_c;
                const description = data.current.condition.text;
                const humidity = data.current.humidity;
                const windSpeed = data.current.wind_kph;
  
                document.querySelector('.city').textContent = `Weather in ${cityName}`;
                document.querySelector('.temp').textContent = `${temperature}°`;
                document.querySelector('.description').textContent = description;
                document.querySelector('.humidity').textContent = `Humidity: ${humidity}%`;
                document.querySelector('.wind').textContent = `Wind Speed: ${windSpeed} km/h`;
            })
            .catch(error => {
                console.log('Error:', error);
            });
    };
  
    // Event listener for search button click
    searchButton.addEventListener('click', () => {
        const city = searchInput.value.trim();
        if (city !== '') {
            fetchWeatherData(city);
        }
    });
  
    // Event listener for Enter key press in search input
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const city = searchInput.value.trim();
            if (city !== '') {
                fetchWeatherData(city);
            }
        }
    });
  });