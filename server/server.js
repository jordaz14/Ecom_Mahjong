const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

require("dotenv").config({ path: "../hidden.env" });

const conn = {
  host: "localhost",
  port: 5432,
  database: "mahjong",
  user: "postgres",
  password: process.env.DB_PW,
};

const pgp = require("pg-promise")();
const db = pgp(conn);

app.get("/test", (req, res) => {
  res.json({
    john: { age: 32, hobby: "soccer", single: true },
    kat: { age: 21, hobby: "football", single: false },
  });
});

app.post("/user-register", (req, res) => {
  console.log(req.body);
  res.send({hello: "world"});
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
