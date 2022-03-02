const express = require("express");
const moment = require("moment");
const stringify = require("json-stringify-safe");
const server = express();
const port = 3000;

server.get("/", (req, res) => {
  //console.log(req);
  let now = new Date();
  var dateStringWithTime = moment(now).format("YYYY-MM-DD HH:mm:ss");
  console.log("pingtime: ", dateStringWithTime);
  console.log(req);
  res.send(stringify(req));
});
server.post("/", (req, res) => {
  //console.log(req);
  let now = new Date();
  var dateStringWithTime = moment(now).format("YYYY-MM-DD HH:mm:ss");
  console.log("pingtime: ", dateStringWithTime);
  console.log(req);
  res.send(stringify(req));
});
server.put("/", (req, res) => {
  //console.log(req);
  let now = new Date();
  var dateStringWithTime = moment(now).format("YYYY-MM-DD HH:mm:ss");
  console.log("pingtime: ", dateStringWithTime);
  console.log(req);
  res.send(stringify(req));
});
server.delete("/", (req, res) => {
  //console.log(req);
  let now = new Date();
  var dateStringWithTime = moment(now).format("YYYY-MM-DD HH:mm:ss");
  console.log("pingtime: ", dateStringWithTime);
  console.log(req);
  res.send(stringify(req));
});

server.head("/", (req, res) => {
  //console.log(req);
  let now = new Date();
  var dateStringWithTime = moment(now).format("YYYY-MM-DD HH:mm:ss");
  console.log("pingtime: ", dateStringWithTime);
  console.log(req);
  res.send(stringify(req));
});

server.trace("/", (req, res) => {
  //console.log(req);
  let now = new Date();
  var dateStringWithTime = moment(now).format("YYYY-MM-DD HH:mm:ss");
  console.log("pingtime: ", dateStringWithTime);
  console.log(req);
  res.send(stringify(req));
});

server.options("/", (req, res) => {
  //console.log(req);
  let now = new Date();
  var dateStringWithTime = moment(now).format("YYYY-MM-DD HH:mm:ss");
  console.log("pingtime: ", dateStringWithTime);
  console.log(req);
  res.send(stringify(req));
});

server.connect("/", (req, res) => {
  //console.log(req);
  let now = new Date();
  var dateStringWithTime = moment(now).format("YYYY-MM-DD HH:mm:ss");
  console.log("pingtime: ", dateStringWithTime);
  console.log(req);
  res.send(stringify(req));
});

console.log("Rocket Launched");
console.log("Server running on port ", process.env.PORT || 3333);
server.listen(process.env.PORT || 3333);
