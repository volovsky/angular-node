const fs = require('fs');
const book = {
    title: "Ego is the enemy",
    author: "nobody"
}

const bookJSON = JSON.stringify(book);
console.log(book);
console.log(bookJSON);

console.log(JSON.parse(bookJSON).title);

fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
console.log(data.title);

