const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

require("dotenv").config({ path: "../hidden.env" });
const auth = require("./auth");

const conn = {
  host: "localhost",
  port: 5432,
  database: "mahjong",
  user: "postgres",
  password: process.env.DB_PW,
};

const pgp = require("pg-promise")();
const db = pgp(conn);

app.get("/test", auth, (req, res) => {
  res.json({
    john: { age: 32, hobby: "soccer", single: true },
    kat: { age: 21, hobby: "football", single: false },
  });
});

app.post("/user-login", (req, res) => {
  const UserData = req.body;

  // Check if UserData is valid
  if (UserData.name == "" || UserData.password == "") {
    return res.send({ Message: "Please enter valid user info." });
  }

  // DB Queries
  const QueryUser = "SELECT * FROM users WHERE email = $1";

  // Check if UserData is valid
  const CheckUserAndReturnToken = async () => {
    const QueryUserData = await db.query(QueryUser, [UserData.email]);

    if (QueryUserData.length == 0) {
      return res.send({
        Message: "Account doesn't exist. Try creating an account",
      });
    }

    const MatchingPasswordCheck = await bcrypt.compare(
      UserData.password,
      QueryUserData[0].password
    );

    if (!MatchingPasswordCheck) {
      return res.send({ Message: "Passwords do not match. Try again" });
    } else {
      const Token = jwt.sign(
        { UserId: UserData.email, UserUnique: UserData.user_id },
        "RANDOM-TOKEN"
      );

      res.send({ Message: "Login successful", Auth: UserData.email, Token });
    }
  };

  CheckUserAndReturnToken();
});

// Route for users registering an account
app.post("/user-register", (req, res) => {
  const UserData = req.body;

  // Check if UserData is valid
  if (UserData.name == "" || UserData.password == "") {
    return res.send({ Message: "Please enter valid user info." });
  }

  // DB Queries
  const QueryUser = "SELECT * FROM users WHERE email = $1";
  const InsertUser = "INSERT INTO users (email, password) VALUES ($1, $2)";

  // Check if UserData is valid
  const CheckUserAndCreateAccount = async () => {
    const QueryUserData = await db.query(QueryUser, [UserData.email]);

    if (QueryUserData.length > 0) {
      return res.send({ Message: "Account already exists. Try logging in." });
    } else {
      const HashPassword = await bcrypt.hash(UserData.password, 10);
      db.query(InsertUser, [UserData.email, HashPassword]);
      return res.send({ Message: "Account created. Welcome!" });
    }
  };

  CheckUserAndCreateAccount();
});

app.get("/merch-products", (req, res) => {
  const QueryProducts = "SELECT * FROM products";

  const GatherAllProducts = async () => {
    const QueryProductsData = await db.query(QueryProducts);

    console.log(QueryProductsData);
    return res.send(QueryProductsData);
  };

  GatherAllProducts();
});

app.post("/add-to-cart", (req, res) => {
  const CartData = req.body;

  const DecodedToken = jwt.verify(CartData.Token, "RANDOM-TOKEN");

  const QueryProducts = "SELECT * FROM products WHERE product_id = $1";
  const QueryUser = "SELECT * FROM users WHERE email = $1";
  const QueryCart = "SELECT * FROM cart WHERE product_id = $1 AND user_id = $2";
  const InsertCart =
    "INSERT INTO cart (user_id, product_id, product_price, product_amount, product_name, product_path) VALUES ($1, $2, $3, $4, $5, $6)";
  const UpdateCart =
    "UPDATE cart SET product_amount = $1 WHERE product_id = $2 AND user_id = $3";

  const GatherProductGatherUserAddToCart = async () => {
    const QueryProductsData = await db.query(QueryProducts, [CartData.ProdId]);
    console.log(QueryProductsData);

    const QueryUserData = await db.query(QueryUser, [DecodedToken.UserId]);
    console.log(QueryUserData);

    const QueryCartData = await db.query(QueryCart, [
      QueryProductsData[0].product_id,
      QueryUserData[0].user_id,
    ]);
    console.log(QueryCartData);

    if (QueryCartData.length > 0) {
      console.log("Entry found");
      const NewProductAmount = QueryCartData[0].product_amount + 1;
      db.query(UpdateCart, [
        NewProductAmount,
        QueryProductsData[0].product_id,
        QueryUserData[0].user_id,
      ]);
    } else {
      console.log("Entry not found");
      db.query(InsertCart, [
        QueryUserData[0].user_id,
        QueryProductsData[0].product_id,
        QueryProductsData[0].price,
        1,
        QueryProductsData[0].product,
        QueryProductsData[0].path,
      ]);
    }
  };

  GatherProductGatherUserAddToCart();

  res.send("POST RECEIVED");
});

app.post("/get-cart", (req, res) => {
  // Initialize req data to UserData
  const UserData = req.body;

  // Decode Token contained with UserData
  const DecodedToken = jwt.verify(UserData.Token, "RANDOM-TOKEN");

  const QueryUser = "SELECT * FROM users WHERE email = $1";
  const QueryProducts = "SELECT * FROM cart WHERE user_id = $1";

  const GatherAllProducts = async () => {
    const QueryUserData = await db.query(QueryUser, [DecodedToken.UserId]);

    const QueryProductsData = await db.query(
      QueryProducts,
      QueryUserData[0].user_id
    );

    return res.send(QueryProductsData);
  };

  GatherAllProducts();
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
