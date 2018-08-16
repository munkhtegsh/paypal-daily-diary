const express = require('express');
const bodyParser = require('body-parser');
const ctr = require('./controller');

const app = express();
app.use(bodyParser.json());

app.get('/api/v1/pages', ctr.read);
app.post('/api/pages', ctr.create);
app.put('/api/pages/:id', ctr.update);
app.get('/api/pages/today', ctr.readToday);
app.get('/api/pages/:date', ctr.readDate);

const port = 4011;
app.listen(port, () => console.log(`Port is running on port: ${port}`));