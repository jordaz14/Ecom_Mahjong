const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

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
  const UserData = req.body;

  const CheckUser = 'SELECT * FROM users WHERE email = $1';

  console.log(UserData.email)
  console.log(db.query(CheckUser, [UserData.email]));

  /*
  const InsertUser = 'INSERT INTO users (email, password) VALUES ($1, $2)';
  db.query(InsertUser, [UserData.email, UserData.password]);
  */

  res.send("POST REQUEST SUBMITTED");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
