const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request.get(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Received status code ${response.statusCode}`);
  } else {
    fs.writeFile(filePath, body, { encoding: 'utf-8' }, (err) => {
      if (err) {
        console.error(`Error writing file: ${err}`);
      } 
      // else {
      //   console.log(`File "${filePath}" created successfully.`);
      // }
    });
  }
});