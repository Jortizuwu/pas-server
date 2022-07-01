const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const { dbConnection } = require("./db/connection");
const { auth, user,fingerprint } = require("./routes");

dotenv.config();
const app = express();
// db connection
dbConnection();

// Middlewares

// cors
app.use(cors());

// body reading
app.use(express.json());

// Routes
app.use("/auth", auth);
app.use("/user", user);
app.use("/fingerprint", fingerprint);

// listen
app.listen(process.env.PORT, () =>
  console.log("server running in the port", process.env.PORT)
);

module.exports = app;
