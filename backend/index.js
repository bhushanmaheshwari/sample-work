const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());


const coaches = require('./routes/api/tasks');
app.use('/api/tasks', coaches);


const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`server started on port ${port}`) })