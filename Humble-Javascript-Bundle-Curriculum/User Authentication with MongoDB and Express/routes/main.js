const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const tokenList = {};
const router = express.Router();

/**
 * First end point we tried, response is just a simple Hello World
 */
router.get("/", (request, response) => {
  response.send("Hello world");
});

/**
 * Test to status from the system
 */
router.get("/status", (request, response) => {
  response.status(200).json({ message: "ok", status: 200 });
});

/***
 * Router to log out of the system
 */
router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  async (request, response, next) => {
    if (!request.body) {
      response.status(400).json({ message: "Invalid", status: 400 });
    } else {
      response
        .status(201)
        .json({ message: "Signup Was Successful", status: 201 });
    }
  }
);

/**
 * Router to login to the system
 */
router.post("/login", async (request, response, next) => {
  passport.authenticate("login", async (error, user) => {
    try {
      if (error) {
        return next(error);
      }
      if (!user) {
        return next(new Error("email and password are required"));
      }

      request.login(user, { session: false }, (err) => {
        if (err) return next(err);

        /**
         * body: A body to create JWT
         * token: Signing a JWT token
         * refreshToken: Refreshing the expired JWT token
         */
        const body = {
          _id: user._id,
          email: user.email,
          name: user.username,
        };

        const token = jwt.sign({ user: body }, process.env.JWT_SECRET, {
          expiresIn: 300,
        });
        const refreshToken = jwt.sign(
          { user: body },
          process.env.JWT_REFRESH_SECRET,
          { expiresIn: 86400 }
        );

        /**
         * Store tokens in cookies
         */
        response.cookie("jwt", token);
        response.cookie("refreshJwt", refreshToken);

        /**
         * Store token in memory
         */
        tokenList[refreshToken] = {
          token,
          refreshToken,
          email: user.email,
          _id: user._id,
          name: user.name,
        };

        /**
         * Send token to the user
         */
        return response.status(200).json({ token, refreshToken, status: 200 });
      });
    } catch (err) {
      console.log(err);
      return next(err);
    }
  })(request, response, next);
});

/**
 * Router for logging out of the system
 */
router.post("/logout", (request, response) => {
  if (request.cookies) {
    const refreshToken = request.cookies.refreshJwt;
    if (refreshToken in tokenList) delete tokenList[refreshToken];
    response.clearCookie("jwt");
    response.clearCookie("refreshJwt");
  }
  response.status(200).json({ message: "logged out", status: 200 });
});

router.post("/token", (request, response) => {
  const { refreshToken } = request.body;
  if (refreshToken in tokenList) {
    const body = {
      email: tokenList[refreshToken].email,
      _id: tokenList[refreshToken]._id,
      name: tokenList[refreshToken].name,
    };
    const token = jwt.sign({ user: body }, process.env.JWT_SECRET, {
      expiresIn: 300,
    });

    /**
     * Update JWT
     */
    response.cookie("jwt", token);
    tokenList[refreshToken].token = token;

    response.status(200).json({ token, status: 200 });
  } else {
    response.status(401).json({ message: "unauthorized", status: 401 });
  }
});

module.exports = router;
