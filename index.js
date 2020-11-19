const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors(), routes)

const port = 3333 || 3030;
app.listen(port, () => { console.log(`Server Online on ${port}`) })