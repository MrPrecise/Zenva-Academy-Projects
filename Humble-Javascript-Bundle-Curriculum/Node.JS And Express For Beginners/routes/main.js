const express = require('express');
const router = express.Router();


router.get('/',  (request, response) => {
    console.log(request);
    response.send('Hey');
});

router.get ('/status', (request, response) => {
    response.cookie('Testing', 'Test')
    response.status(200).json({message:'OK', status:200});
});

router.post('/signup',  (request, response, next) => {
    console.log(request.body);
    if(!request.body){
        response.status(400).json({message: 'Invalid', status: 400});
    }else{
    response.status(200).json({message: 'OK', status: 200});
}
});
router.post('/login',  (request, response) => {
    if(!request.body){
        response.status(400).json({message: 'Invalid', status: 400});
    }else{
    response.status(200).json({message: 'OK', status: 200});
}
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
