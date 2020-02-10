const path = require("path");

const express = require("express");
const app = express();
// Define Paths for Express Config
const publicDirPath = path.join(__dirname, "../public/");
const viewsPath = path.join(__dirname, "../templates");

// Set Up Handle Bars & Views Location
app.set("view engine", "hbs");
app.set("views", viewsPath);

// Set Up Static Directory to Serve
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
