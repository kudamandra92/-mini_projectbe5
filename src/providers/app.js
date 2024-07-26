const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const userRoute = require("../routers/user-router");
const gameRoute = require("../routers/game-router");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Global Middleware
// app.use(async function (req, res, next) {
//   const pathWhitelist = ["/user/login", "/user/register", "/"];
//   // console.log(req);
//   try {
//     if (pathWhitelist.includes(req.path)) {
//       next();
//     }
//     else {}
//   } catch (error) {}
// });

app.use("/user", userRoute);
app.use("/game", gameRoute);

module.exports = app;
