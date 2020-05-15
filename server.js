const express = require('express');
const axios = require('axios');

const app = express();

const PORT = 3000;
app.listen(PORT, () => { console.log(`Express server listening on port#${PORT}`); });

app.use(express.static('.'));

app.get('/rooms/:roomID/reviews', (req, res) => {
  axios.get('http://18.220.252.131:3001/rooms/2/reviews')
    .then(result => res.status(200).send(result.data))
    .catch(err => console.log(err));
});
app.get('/rooms/:roomID/reviews/:phrase', (req, res) => {
  axios.get(`http://18.220.252.131:3001/rooms/2/reviews/${req.params.phrase}`)
    .then(result => res.status(200).send(result.data))
    .catch(err => console.log(err));
});
app.get('/image', (req, res) => {
  axios.get(`http://13.57.183.102:3003/carousel`)
    .then(result => res.status(200).send(result.data))
    .catch(err => console.log(err));
});
app.get('/rooms', (req, res) => {
  axios.get(`http://3.101.29.123:3004/rooms`)
    .then(result => res.status(200).send(result.data))
    .catch(err => console.log(err));
});
app.get('/data', (req, res) => {
  axios.get(`http://18.217.34.96:3002/data`)
    .then(result => res.status(200).send(result.data))
    .catch(err => console.log(err));
});