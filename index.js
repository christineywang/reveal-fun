const args = require('yargs').argv;
const fetch = require('node-fetch');

const { exec } = require('child_process');

const ip = args.ip
const key = args.key;

const clearbit = require('clearbit')(key);

clearbit.Reveal.find({
    ip: ip
  })
  .then(result => result.geoIP.city)
  .then(city => {
   const cityEncode = encodeURIComponent(city);
   const url = `https://api.unsplash.com/search/photos?page=1&query=${cityEncode}&client_id=030f9ceb0bc88ec70ed8c07ce5593460f2c494a5e02c059e479c73939ef8c816`;
   return fetch(url)
      .then(response => {
        return response.json();
      })
  })
  .then(myJson => {
    const photoId = myJson.results[0].id;
    return `https://unsplash.com/photos/${photoId}`
  })
  .then(photoUrl => exec(`open ${photoUrl}`))
  .catch(err => {
    console.error(err);
  });


