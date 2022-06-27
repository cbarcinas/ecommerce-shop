const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const server = express();


// import routes and global middleware

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());

server.get("/", (req, res) => {
  res.json({ message: "im watching" });
});

module.exports = server;
