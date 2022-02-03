const http = require('http');
const express = require('express');
const PORT = 8000;
const app = express();

// app.use('/')

app.get('/', (req, res) => {
    res.send('Hello World!')
});



app.get('/get_list', ({
    method: 'GET',
    params: 'https://api.coingecko.com/api/v3/coins/list?include_platform=false',
    headers: {
        'Content-Type': 'application/json',
    },
}, res) => {
    console.log('res:::::::::::', res)
})
  
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});