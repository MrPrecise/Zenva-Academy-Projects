const express = require('express');
const passport = require('passport');
const router = express.Router();


router.get('/',  (request, response) => {
    console.log(request);
    response.send('Hey');
});

router.get ('/status', (request, response) => {
    response.cookie('Testing', 'Test')
    response.status(200).json({message:'OK', status:200});
});

router.post('/signup', passport.authenticate('signup',{session: false}), (request, response, next) => {
    if(!request.body){
    response.status(400).json({message: 'Invalid', status: 400});
    }else{
    response.status(201).json({message: 'Signup Was Successful', status: 201});
}
});
router.post('/login', async (request, response, next) => {
    passport.authenticate('login', async (error, user) => {
      try {
        if (error) {
          return next(error);
        }
        if (!user) {
          return next(new Error('Email and Password are required'));
        }
  
        request.login(user, { session: false }, (err) => {
          if (err) return next(err);
          return response.status(200).json({ user, status: 200 });
        });
      } catch (err) {
        console.log(err);
        return next(err);
      }
    })(request, response, next);
  });

router.post('/logout',  (request, response) => {
    if(!request.body){
        response.status(400).json({message: 'Invalid', status: 400});
    }else{
    response.status(200).json({message: 'OK', status: 200});
}
});

router.post('/token',  (request, response) => {
    if(!request.body || !request.body.refreshToken){
        response.status(400).json({message: 'Invalid', status: 400});
    }else{
        const {refreshToken} = request.body;
    response.status(200).json({message: `Refresh token requested: ${refreshToken}`, status: 200});
}
});

module.exports = router;
