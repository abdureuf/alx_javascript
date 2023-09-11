const request = require('request');

const apiUrl = process.argv[2];
const characterId = '18';
let count = 0;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Received status code ${response.statusCode}`);
  } else {
    const filmsData = JSON.parse(body);
    const fetchCharacterData = (characterUrl) => {
      request.get(characterUrl, (error, response, body) => {
        if (error) {
          console.error(`Error: ${error.message}`);
        } else if (response.statusCode !== 200) {
          console.error(`Error: Received status code ${response.statusCode}`);
        } else {
          const characterData = JSON.parse(body);
          if (characterData && characterData.name === 'Wedge Antilles') {
            count++;
          }
        }
        if (filmsData.next) {
          fetchCharacterData(filmsData.next);
        } else {
          console.log(count);
        }
      });
    };

    fetchCharacterData(filmsData.results[0].characters[0]);
  }
});