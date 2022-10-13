const express = require('express');
const app = express();
const port = 3000;

app.get('/',  (request, response) => {
    console.log(request);
    response.send('Main Page');
});

app.get('/1',  (request, response) => {
    console.log(request);
    response.send('Page One');
});

app.get('/2',  (request, response) => {
    response.send('Page 2');
});

app.get('/3',  (request, response) => {
    response.send('3');
});

app.listen(port, ()=>{
    console.log(`This is port ${port}`)
})