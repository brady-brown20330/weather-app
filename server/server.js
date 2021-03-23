const { default: axios } = require('axios');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");

// ENDPOINT: searches for cities that match the input field
app.get('https://www.metaweather.com/api/location/search/?query=', (req, res) => {
  const url = `https://www.metaweather.com/api/location/search/?query=${req.query.data}`
  return axios.get(url)
  .then(data => res.send(data.data))
})

// ENDPOINT: gets weather for a given city based on woeid
app.get('https://www.metaweather.com/api/location/', (req, res) => {
  const url = `https://www.metaweather.com/api/location/${req.query.data}/`
  return axios.get(url)
  .then(data => res.send(data.data))
})

app.listen(PORT, () => {
  console.log(`Hello, Your server is running on PORT: ${PORT}`);
});

app.use(express.static(path.join(__dirname, '../public')));
