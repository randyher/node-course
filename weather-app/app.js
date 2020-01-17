const request = require("request");
const url =
  "https://api.darksky.net/forecast/ddfc0938764a93974f8b2cb846cf2b54/37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
  const currently = response.body.currently;
  const { temperature, precipProbability } = currently;
  console.log(
    `It is currently ${temperature} degrees outside. There is a ${precipProbability}% chance of rain`
  );
});
