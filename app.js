var { Client } = require("pg");

var conString = "postgres://admin:1234@localhost:5432/cake";
const client = new Client(conString);
client.connect();
const query = {
  name: "insert-data",
  text: "insert into test (id, test) values ($1,$2)",
  values: [1, "test-1"]
};
client
  .query(query)
  .then(res => {
    console.log(res);
    res.rows.forEach(row => {
      console.log(row);
    });
    client.end();
  })
  .catch(e => console.log(e));
