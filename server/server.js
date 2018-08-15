const express = require('express');
const bodyParser = require('body-parser');
const ctr = require('./controller');

const app = express();
app.use(bodyParser.json());

app.get('/api/v1/pages', ctr.read);
const port = 4011;

app.listen(port, () => console.log(`Port is running on port: ${port}`));