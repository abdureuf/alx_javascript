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
      return film.characters.includes(`https://swapi-api.alx-tools.com/api/people/18/`);
    });
    console.log(wedgeAntillesFilms.length);
  }
});