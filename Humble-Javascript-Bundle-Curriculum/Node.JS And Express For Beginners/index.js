const express = require('express');
const app = express();
const port = 3000;

app.get('/',  (request, response) => {
    console.log(request);
    response.send('Main Page');
});

app.get('/1',  (request, response) => {
    console.log(request);
    response.send('Cool Stuff');
});

app.get('/2',  (request, response) => {
    response.send('We\'re fucked');
});

app.get('/3',  (request, response) => {
    response.send('Not fun time');
});

app.listen(port, ()=>{
    console.log(`This is port ${port}`)
})  