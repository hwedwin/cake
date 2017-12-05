# postgreSQL

## [Install]( http://fengliner.github.io/2016/01/05/Mac%E4%B8%8BPostgreSql%E7%9A%84%E5%AE%89%E8%A3%85%E4%B8%8E%E4%BD%BF%E7%94%A8/)
```sql
➜  ~ createuser admin -P
Enter password for new role:
Enter it again:
➜  ~ createdb cake -O admin -E UTF8 -e
CREATE DATABASE cake OWNER admin ENCODING 'UTF8';
➜  ~ psql -U admin -d cake -h 127.0.0.1
cake-> \c cake
You are now connected to database "cake" as user "admin".
cake=> CREATE TABLE test (id int, text VARCHAR(50));
CREATE TABLE
cake=> INSERT INTO test(id, text) VALUES(1, 'test');
INSERT 0 1
cake=> select * from test where id =1;
 id | text
----+------
  1 | test
(1 row)

cake=> update test set text='aaaaaa' where id =1 ;
UPDATE 1
cake=> select * from test where id = 1;
 id |  text
----+--------
  1 | aaaaaa
(1 row)

cake=> delete from test where id = 1;
DELETE 1
cake=> select * from test;
 id | text
----+------
(0 rows)

cake=> pg_dump admin > /usr/local/psql/backup/pg.sql;
```

## 数据库可视化工具DataGrip
![image](https://user-images.githubusercontent.com/18532655/33586860-71592cb8-d9a6-11e7-9ea9-ee3fe3356150.png)

## node.js连接postgresql 
`npm install -g pg`
+ example
```js
var { Client } = require("pg");

//创建连接
//var conString = "postgres://y-user:y-ps@localhost:5432/y-db";
var conString = "postgres://admin:1234@localhost:5432/cake"; 
var client = new Client(conString);
await client.connect();

var res = await client.query("select * from test"); //await 报错，使用内部
query.rows.foreach(row => {
  console.log(row);
});

await client.end();
```

+ callback方式
```js
var { Client } = require("pg");

const client = new Client({
  user: "admin",
  password: "1234",
  database: "cake",
  host: "localhost",
  port: 5432
});
client.connect();
client.query("select * from test", (err, res) => {
  if (err) {
    console.log(err);
  }
  console.log(res);
  res.rows.forEach(row => {
    console.log(row);
  });
  client.end();
});
```
+ promise方式
```js
var { Client } = require("pg");

var conString = "postgres://admin:1234@localhost:5432/cake";
const client = new Client(conString);
client.connect();
client
  .query("select * from test")
  .then(res => {
    res.rows.forEach(row => {
      console.log(row);
    });
    client.end();
  })
  .catch(e => console.log(e));
```
+ 参数写法
```js
var { Client } = require("pg");

var conString = "postgres://admin:1234@localhost:5432/cake";
const client = new Client(conString);
client.connect();

const query = {
  name: "fetch-data",
  text: "select * from test where id = $1",
  values: [1]
};
client
  .query(query)
  .then(res => {
    res.rows.forEach(row => {
      console.log(row);
      client.end();
    });
  })
  .catch(e => console.log(e));
```

+ sql语句
```js
插入
const query = {
  name: "insert-data",
  text: "insert into test (id, test) values ($1,$2)",
  values: [1, "test-1"]
};
删除
const query = {
  name: "delete-data",
  text: "delete from test where id=$1",
  values: [1]
};
```
+ res
```json
Result {
  command: 'SELECT',
  rowCount: 1,
  oid: null,
  rows: [ anonymous { id: 1, test: 'test' } ],
  fields:
   [ Field {
       name: 'id',
       tableID: 16389,
       columnID: 1,
       dataTypeID: 23,
       dataTypeSize: 4,
       dataTypeModifier: -1,
       format: 'text' },
     Field {
       name: 'test',
       tableID: 16389,
       columnID: 2,
       dataTypeID: 1043,
       dataTypeSize: -1,
       dataTypeModifier: 54,
       format: 'text' } ],
  _parsers: [ [Function: parseInteger], [Function: noParse] ],
  RowCtor: [Function: anonymous],
  rowAsArray: false,
  _getTypeParser: [Function: bound ] }
```