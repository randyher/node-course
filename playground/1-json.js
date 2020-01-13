const fs = require(`fs`);
const book = {
  title: "Hound of Baskerville",
  author: "Conan Doyle"
};

const bookJSON = JSON.stringify(book);
fs.writeFileSync("1-json.json", bookJSON);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

console.log("Here:", data);

data.title = "A Study in Scarlet";
data.author = "Arthur Conan Doyle";

const jsonData = JSON.stringify(data);
fs.writeFileSync("1-json.json", jsonData);
