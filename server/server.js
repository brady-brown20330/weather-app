const { default: axios } = require('axios');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");
var cors = require('cors')

var whitelist = ['https://60595473dd7e650007f5ccd3--stupefied-blackwell-da7fbd.netlify.app/']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

// ENDPOINT: searches for cities that match the input field
app.get('https://www.metaweather.com/api/location/search/?query=', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const url = `https://www.metaweather.com/api/location/search/?query=${req.query.data}`
  return axios.get(url, {
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  })
  .then(data => res.send(data.data))
})

// ENDPOINT: gets weather for a given city based on woeid
app.get('https://www.metaweather.com/api/location/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const url = `https://www.metaweather.com/api/location/${req.query.data}/`
  return axios.get(url, {
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  })
  .then(data => res.send(data.data))
})

app.listen(PORT, () => {
  console.log(`Hello, Your server is running on PORT: ${PORT}`);
});

app.use(express.static(path.join(__dirname, '../public')));
