require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const passport = require("passport");

/**
 * Routes
 */
const routes = require("./routes/main");
const passwordRoutes = require("./routes/password");
const secureRoutes = require("./routes/secure");
const { response } = require("express");

/**
 * Setup Mongo Connection
 */
const uri = process.env.MONGO_CONNECTION_URL;
const mongoConfig = {
  useNewUrlParser: true,
};

/**
 * Tells mongo to use username and password
 */
if (process.env.MONGO_USER_NAME && process.env.MONGO_PASSWORD) {
  mongoConfig.auth = { authSource: "admin" };
  mongoConfig.user = process.env.MONGO_USER_NAME;
  mongoConfig.pass = process.env.MONGO_PASSWORD;
}

/**
 * Connect to MongoDB with config from Setup
 */
mongoose.connect(uri, mongoConfig);

/**
 * On connection
 */
mongoose.connection.on("error", (error) => {
  console.log("Error in the process:");
  console.log(error);
  process.exit(1);
});

/**
 * On succesful connection then start listen to tapp on port
 */
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`This is port ${port}`);
  });
});

/**
 * Added routes
 */
const app = express();
const port = process.env.PORT || 3000;

/**
 * Update express settings
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CORS_ORIGIN }));

/**
 * Require Passort Auth
 */
require("./auth/auth");

/**
 * Routes for webpage
 */
app.use(express.static(__dirname + "/public"));
app.get("/", (request, response) => {
  response.send(__dirname + "index.html");
});

/**
 * Setup routes
 */
app.use("/", routes);
app.use("/", passwordRoutes);
app.use("/", passport.authenticate("jwt", { session: false }), secureRoutes);

/**
 * Catch not found Routes
 */
app.use((request, response) => {
  response.status(404).json({ message: "404 - Not Found", status: 404 });
});

/**
 * Handle errors
 */
app.use((error, request, response, next) => {
  console.log(error);
  response
    .status(error.status || 500)
    .json({ error: error.message, status: 500 });
});
