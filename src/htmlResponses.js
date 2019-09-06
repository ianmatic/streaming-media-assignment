const fs = require('fs');

let index = fs.readFileSync(`${__dirname}/../client/client.html`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const setIndex = (value) => {
  index = value;
};
module.exports.getIndex = getIndex;
module.exports.setIndex = setIndex;
