const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("<h1>Weather</h1>");
});

app.get("/help", (req, res) => {
  res.send({ name: "Randy", age: 27 });
});

app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});

app.get("/weather", (req, res) => {
  res.send({ forecast: "HOT", location: "Brooklyn" });
});

app.listen(3000, () => {
  console.log("It's working");
});
