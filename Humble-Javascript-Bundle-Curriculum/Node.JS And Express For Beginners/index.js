const express = require('express');
const app = express();
const port = 3000;

app.get('/',  (request, response) => {
    console.log(request);
    response.send('Main Page');
});

app.get ('/status', (request, response) => {
    response.status(200).json({message:'OK', status:200});
});

app.post('/signup',  (request, response, next) => {
    console.log(request.body);
    if(!request.body){
        response.status(400).json({message: 'Invalid', status: 400});
    }else{
    response.status(200).json({message: 'OK', status: 200});
}
});
app.post('/login',  (request, response) => {
    if(!request.body){
        response.status(400).json({message: 'Invalid', status: 400});
    }else{
    response.status(200).json({message: 'OK', status: 200});
}
});

app.post('/logout',  (request, response) => {
    if(!request.body){
        response.status(400).json({message: 'Invalid', status: 400});
    }else{
    response.status(200).json({message: 'OK', status: 200});
}
});

app.post('/token',  (request, response) => {
    if(!request.body || !request.body.refreshToken){
        response.status(400).json({message: 'Invalid', status: 400});
    }else{
        const {refreshToken} = request.body;
    response.status(200).json({message: `Refresh token requested: ${refreshToken}`, status: 200});
}
});

app.post('/forgot-password',  (request, response) => {
    response.status(200).json({message: 'OK', status: 200});
});

app.post('/reset-password',  (request, response) => {
    response.status(200).json({message: 'OK', status: 200});
});

// Catch not found Routes
app.use((request, response) => {
    response.status(404).json({ message: '404 - Not Found', status: 404 })
  })

  // handle errors
app.use((error, request, response, next) => {
    console.log(error)
    response
      .status(error.status || 500)
      .json({ error: error.message, status: 500 })
  })

app.listen(port, ()=>{
    console.log(`This is port ${port}`)
})  