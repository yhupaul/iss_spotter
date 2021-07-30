const { fetchBreedDescription } = require('../json_the_cat/breedFetcher');
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP('173.180.85.211', (error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coords:' , coords);


});
const coords = { latitude: 49.2663, longitude: -122.8739 };
fetchISSFlyOverTimes(coords, (error, passTime) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned ISS flyove time:' , passTime);


});

