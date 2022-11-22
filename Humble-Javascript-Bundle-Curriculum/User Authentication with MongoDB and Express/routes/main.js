const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const tokenList = {};
const router = express.Router();

router.get("/", (request, response) => {
  console.log(request);
  response.send("Hey");
});

router.get(
  "/status",
  passport.authenticate("jwt", { session: false }),
  async (request, response) => {
    response.cookie("Testing", "Test");
    response.status(200).json({ message: "OK", status: 200 });
  }
);

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
router.post("/login", async (request, response, next) => {
  passport.authenticate("login", async (error, user) => {
    try {
      if (error) {
        return next(error);
      }
      if (!user) {
        return next(new Error("Email and Password are required"));
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

router.post("/logout", (request, response) => {
  if (!request.body) {
    response.status(400).json({ message: "Invalid", status: 400 });
  } else {
    response.status(200).json({ message: "OK", status: 200 });
  }
});

router.post("/token", (request, response) => {
  if (!request.body || !request.body.refreshToken) {
    response.status(400).json({ message: "Invalid", status: 400 });
  } else {
    const { refreshToken } = request.body;
    response.status(200).json({
      message: `Refresh token requested: ${refreshToken}`,
      status: 200,
    });
  }
});

module.exports = router;
