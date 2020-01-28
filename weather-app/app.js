const request = require("request");
const geocode = require("./utils/geocode");
const url =
  "https://api.darksky.net/forecast/ddfc0938764a93974f8b2cb846cf2b54/37.8267,-122.4233";

const mapBoxUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmFuZHloZXIiLCJhIjoiY2s1cGZjamR0MHducTNtcGN4NXJvOHJ4cCJ9.mR7svf2e3Qm_owtLmQZAOw&limit=1";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather services!");
//   } else if (response.body.error) {
//     console.log("Unable to find location!");
//   } else {
//     const { temperature, precipProbability } = response.body.currently;
//     console.log(
//       `It is currently ${temperature} degrees outside. There is a ${precipProbability}% chance of rain`
//     );
//   }
// });

// request({ url: mapBoxUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to location services!");
//   } else if (response.body.features.length === 0) {
//     console.log("Unable to find location!");
//   } else {
//     const { features } = response.body;
//     console.log(features[0].center);
//   }
// });

geocode("Boston", (error, data) => {
  console.log("Data", data);
  console.log("Error", error);
});
