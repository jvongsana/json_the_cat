const request = require('request');
const breed = process.argv[2];
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;


request(url, (error, response, body) => {
  if (!error) {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Breed not found.');
    } else {
      console.log(`Weight: Imperial - ${data[0]['weight']['imperial']}, Metric -  ${data[0]['weight']['metric']}`);
      console.log(`Description: ${data[0]['description']}`);
    }
  } else {
    console.log('error:', error);
  }
  
});