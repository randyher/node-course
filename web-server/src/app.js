const path = require("path");

const express = require("express");
const app = express();
const publicDirPath = path.join(__dirname, "../public/");

app.set("view engine", "hbs");
app.use(express.static(publicDirPath));

app.get("/weather", (req, res) => {
  res.send({ forecast: "HOT", location: "Brooklyn" });
});

app.listen(3000, () => {
  console.log("It's working");
});
