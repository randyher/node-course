const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Brooklyn", (error, data) => {
  console.log("Data", data);
  console.log("Error", error);
  forecast(data["latitude"], data["longitude"], (error, data) => {
    console.log("Data", data);
    console.log("Error", error);
  });
});
