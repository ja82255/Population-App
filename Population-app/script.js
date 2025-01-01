document.getElementById('countryForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from reloading the page

  const country = document.getElementById('country').value;

  // Fetch data using Fetch API
  fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
          // Display population information
          const population = data[0].population;
          const countryName = data[0].name.common;
          document.getElementById('result').innerHTML = 
              `<strong>Country:</strong> ${countryName} <br> <strong>Population:</strong> ${population.toLocaleString()}`;
      })
      .catch(error => {
          // Handle errors
          document.getElementById('result').innerHTML = 'Country not found or API error';
          console.error('Error fetching population data:', error);
      });
});


