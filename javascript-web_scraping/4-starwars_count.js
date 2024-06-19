#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const wedgeAntillesId = '3';

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }

  const data = JSON.parse(body);
  const films = data.results;
  let wedgeCount = 0;

  films.forEach(film => {
    if (film.characters.includes(`https://swapi-api.hbtn.io/api/people/${wedgeAntillesId}/`)) {
      wedgeCount++;
    }
  });

  console.log(wedgeCount);
});
