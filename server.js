const express = require('express');

let app = express();

app.get('/', (req, res) => {
    console.log('vikas');
    res.send('Vikas');
});

app.get('/api/login', (req, res) => {
    console.log('vikas');
    res.send('Login');
});

const port = process.env.PORT||4000;
app.listen(port, () => {
    console.log(`your server is running at ${port}`);
})


// app.listen(4000, () => {
//     console.log('your server is running at port 4000')
// })



