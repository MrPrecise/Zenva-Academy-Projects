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

app.post('/signup',  (request, response) => {
    response.status(200).json({message: 'OK', status: 200});
});

app.listen(port, ()=>{
    console.log(`This is port ${port}`)
})  