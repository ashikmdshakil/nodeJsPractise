const express = require('express');
const app = express(); 


app.get('/', (req , res) =>{
    res.send('Hello World!');
});
app.get('/test/:name', (request, response) =>{
     response.send(request.params);
});
const port = process.env.PORT || 3000
app.listen(3000 , () => console.log('server is running .......'));