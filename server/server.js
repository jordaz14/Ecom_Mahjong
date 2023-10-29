const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

require("dotenv").config({ path: "../hidden.env" });

// Establish connection to DB
const conn = {
  host: "localhost",
  port: 5432,
  database: "mahjong",
  user: "postgres",
  password: process.env.DB_PW,
};

const pgp = require("pg-promise")();
const db = pgp(conn);

// HANDLE USER LOGINS
app.post("/user-login", (req, res) => {
  // Initialize req data to userData
  const userData = req.body;

  // Check if User completed entries
  if (userData.name == "" || userData.password == "") {
    return res.send({ Message: "Please enter valid user info." });
  }

  // Query to check if user email exists in user table
  const queryUser = "SELECT * FROM users WHERE email = $1";

  // Check if userData is valid
  const checkUserAndReturnToken = async () => {
    //Gather data from users table
    const queryUserData = await db.query(queryUser, [userData.email]);

    // If user doesn't exist, notify client
    if (queryUserData.length == 0) {
      return res.send({
        Message: "Account doesn't exist. Try creating an account",
      });
    }

    // Return True / False, contingent on if passwords match
    const matchingPasswordCheck = await bcrypt.compare(
      userData.password,
      queryUserData[0].password
    );

    // If False on password match, notify cleint
    if (!matchingPasswordCheck) {
      return res.send({ Message: "Passwords do not match. Try again" });
    }
    // Otherwise, create JWT token and alert user of successful login
    else {
      const Token = jwt.sign(
        { UserId: userData.email, UserUnique: userData.user_id },
        "RANDOM-TOKEN"
      );

      res.send({ Message: "Login successful", Auth: userData.email, Token });
    }
  };

  checkUserAndReturnToken();
});

// REGISTER A CLIENT
app.post("/user-register", (req, res) => {
  // Initialize req data to userData
  const userData = req.body;

  // Check if userData is valid
  if (userData.name == "" || userData.password == "") {
    return res.send({ Message: "Please enter valid user info." });
  }

  // DB Queries
  const queryUser = "SELECT * FROM users WHERE email = $1";
  const insertUser = "INSERT INTO users (email, password) VALUES ($1, $2)";

  // Check if userData is valid, create account if so
  const checkUserAndCreateAccount = async () => {
    // Find user data based on client's submitted email
    const queryUserData = await db.query(queryUser, [userData.email]);

    // If email already exists, notify client
    if (queryUserData.length > 0) {
      return res.send({ Message: "Account already exists. Try logging in." });
    }
    // Otherwise, encrypt password, insert client req into users table, and notify client of success
    else {
      const hashPassword = await bcrypt.hash(userData.password, 10);
      db.query(insertUser, [userData.email, hashPassword]);
      return res.send({ Message: "Account created. Welcome!" });
    }
  };

  checkUserAndCreateAccount();
});

// OUTPUT PRODUCTS TO MERCH PAGE
app.get("/merch-products", (req, res) => {
  const queryProducts = "SELECT * FROM products";

  const gatherAllProducts = async () => {
    const queryProductsData = await db.query(queryProducts);

    return res.send(queryProductsData);
  };

  gatherAllProducts();
});

// ADD ITEMS TO CLIENT'S CART
app.post("/add-to-cart", (req, res) => {
  // Initialize req data to cartData
  const cartData = req.body;

  // Decode client's token to query for user data
  const decodedToken = jwt.verify(cartData.Token, "RANDOM-TOKEN");

  // DB Queries
  // Query to find product info based on product client clicked
  const queryProducts = "SELECT * FROM products WHERE product_id = $1";
  // Query to find user info based info from token
  const queryUser = "SELECT * FROM users WHERE email = $1";
  // Query to check if user has added product to cart before
  const queryCart = "SELECT * FROM cart WHERE product_id = $1 AND user_id = $2";
  // Query to insert product in cart
  const insertCart =
    "INSERT INTO cart (user_id, product_id, product_price, product_amount, product_name, product_path) VALUES ($1, $2, $3, $4, $5, $6)";
  // Query to update amount of product in cart
  const updateCart =
    "UPDATE cart SET product_amount = $1 WHERE product_id = $2 AND user_id = $3";

  // Gather info about product and user, subsequently add to cart
  const gatherProductGatherUserAddToCart = async () => {
    //Gather info about product client submitted
    const queryProductsData = await db.query(queryProducts, [cartData.ProdId]);

    // Gather info about client
    const queryUserData = await db.query(queryUser, [decodedToken.UserId]);

    // Gather info about product and client combination from cart table
    const queryCartData = await db.query(queryCart, [
      queryProductsData[0].product_id,
      queryUserData[0].user_id,
    ]);

    // If product/client combination exists in cart, add +1 of product to cart
    if (queryCartData.length > 0) {
      const newProductAmount = queryCartData[0].product_amount + 1;

      db.query(updateCart, [
        newProductAmount,
        queryProductsData[0].product_id,
        queryUserData[0].user_id,
      ]);
    }
    //Otherwise, create initial entry of product to cart
    else {
      db.query(insertCart, [
        queryUserData[0].user_id,
        queryProductsData[0].product_id,
        queryProductsData[0].price,
        1,
        queryProductsData[0].product,
        queryProductsData[0].path,
      ]);
    }
  };

  gatherProductGatherUserAddToCart();

  res.send("POST RECEIVED");
});

// GET ITEMS FROM CLIENT'S CART
app.post("/get-cart", (req, res) => {
  // Initialize req data to userData
  const userData = req.body;

  // Decode Token contained within userData
  const decodedToken = jwt.verify(userData.Token, "RANDOM-TOKEN");

  // DB Queries
  const queryUser = "SELECT * FROM users WHERE email = $1";
  const queryProducts = "SELECT * FROM cart WHERE user_id = $1";

  const gatherAllProducts = async () => {
    // Gather user data from decoded token
    const queryUserData = await db.query(queryUser, [decodedToken.UserId]);

    // Use user data to query cart for stored items
    const queryProductsData = await db.query(
      queryProducts,
      queryUserData[0].user_id
    );

    return res.send(queryProductsData);
  };

  gatherAllProducts();
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
