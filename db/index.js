var { Client } = require("pg");

var conString = "postgres://admin:1234@localhost:5432/cake";
const client = new Client(conString);
client.connect();

module.exports = {
  query: (text, params, callback) => {
    return client.query(text, params, (err, res) => {
      callback(err, res);
    });
  }
};
