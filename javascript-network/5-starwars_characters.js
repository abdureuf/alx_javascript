const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Received status code ${response.statusCode}`);
  } else {
    const movie = JSON.parse(body);
    const charactersUrls = movie.characters;

    charactersUrls.forEach((characterUrl) => {
      request.get(characterUrl, (error, response, body) => {
        if (error) {
          console.error(`Error: ${error.message}`);
        } else if (response.statusCode !== 200) {
          console.error(`Error: Received status code ${response.statusCode}`);
        } else {
          const character = JSON.parse(body);
          console.log(character.name);
        }
      });
    });
  }
});