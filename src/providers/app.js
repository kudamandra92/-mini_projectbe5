const express = require("express");
const app = express();
const userRoute = require("../routers/user-router");
const gameRoute = require("../routers/game-router");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", userRoute);
app.use("/game", gameRoute);

module.exports = app;
