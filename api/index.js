const express = require('express');
const routes = require('./routes/routes');
var apm = require('elastic-apm-node').start({
    serviceName: 'api-note-elasticStack',
    // secretToken: '',
    serverUrl: 'http://localhost:8200/',
    environment: 'production'
})


const app = express();
app.use(express.json());

let port = process.env.port || 8000;

app.get('/', (req, res) => {
    res.json({ "Estudo de caso": "Rotinas (Node)" });
})
app.get('/error', function (req, res) {
  try {
    res.json({ "Error": "Fail" });
    throw new Error('something broke! :/')
    
  } catch (err) {
    apm.captureError(err)
  }
})

app.use(routes)
app.listen(8000, '0.0.0.0');