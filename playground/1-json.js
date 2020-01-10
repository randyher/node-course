const fs = require(`fs`);
const book = {
  title: "Hound of Baskerville",
  author: "Conan Doyle"
};

const bookJSON = JSON.stringify(book);
fs.writeFileSync("1-json.json", bookJSON);
