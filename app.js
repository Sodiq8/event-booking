const express = require("express");
const app = express();
const event_routes = require("./routes/event_routes");
const user_routes = require("./routes/user_routes");
const auth_routes = require("./routes/auth_routes");
app.use(express.json());

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    console.log("passing through middleware");
  next();
});

app.use("/event", event_routes);
app.use("/users", user_routes);
app.use("/auth", auth_routes);



app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
