const { default: axios } = require('axios');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");

// ENDPOINT: searches for cities that match the input field
app.get('/searchByName', (req, res) => {
  const url = `https://www.metaweather.com/api/location/search/?query=${req.query.data}`
  console.log(req.query.data, 'REQUEST')

  return axios.get(url)
  .then(data => res.send(data.data))
})

// ENDPOINT: gets weather for a given city based on woeid
app.get('/weatherByLoc', (req, res) => {
  const url = `https://www.metaweather.com/api/location/${req.query.data}/`
  console.log('should be the woeid: ', req.query.data)

  return axios.get(url)
  .then(data => res.send(data.data))
})

app.listen(PORT, () => {
  console.log(`Hello, Your server is running on PORT: ${PORT}`);
});

app.use(express.static(path.join(__dirname, '../public')));
