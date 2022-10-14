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
    next(new Error('Test'))
    response.status(200).json({message: 'OK', status: 200});
});
app.post('/login',  (request, response) => {
    response.status(200).json({message: 'OK', status: 200});
});

app.post('/token',  (request, response) => {
    response.status(200).json({message: 'OK', status: 200});
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