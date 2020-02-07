const path = require("path");

const express = require("express");
const app = express();
const publicDirPath = path.join(__dirname, "../public/");

app.set("view engine", "hbs");
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Randy"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Randy"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help!",
    name: "Randy"
  });
});

app.get("/weather", (req, res) => {
  res.send({ forecast: "HOT", location: "Brooklyn" });
});

app.listen(3000, () => {
  console.log("It's working");
});
