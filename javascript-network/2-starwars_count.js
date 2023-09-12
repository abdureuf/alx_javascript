const request = require('request');

const urlProcess = process.argv[2];

request.get(urlProcess, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Received status code ${response.statusCode}`);
  } else {
    const filmsData = JSON.parse(body);
    const wedgeAntillesFilms = filmsData.results.filter((film) => {
      return film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/');
    });

    // Fetch additional pages if available
    if (filmsData.next) {
      fetchAdditionalPages(filmsData.next, wedgeAntillesFilms);
    } else {
      console.log(wedgeAntillesFilms.length);
    }
  }
});

// Function to fetch additional pages of film data
function fetchAdditionalPages(url, films) {
  request.get(url, (error, response, body) => {
    if (error) {
      console.error(`Error: ${error.message}`);
    } else if (response.statusCode !== 200) {
      console.error(`Error: Received status code ${response.statusCode}`);
    } else {
      const filmsData = JSON.parse(body);
      const wedgeAntillesFilms = filmsData.results.filter((film) => {
        return film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/');
      });
      films.push(...wedgeAntillesFilms);

      // Fetch additional pages if available
      if (filmsData.next) {
        fetchAdditionalPages(filmsData.next, films);
      } else {
        console.log(films.length);
      }
    }
  });
}