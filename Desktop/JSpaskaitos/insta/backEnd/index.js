const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const apiRouter = require('./Routes/routes');
const app = express();

mongoose.connect('mongodb://localhost:27017/instagram', {
  useCreateIndex: true,
  useNewUrlParser: true,
});

app.use('/uploads', express.static('uploads'));

let corsOptions = {
  exposedHeaders: ['x-auth'],
};

app.use(cors(corsOptions));
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());
app.use('/api', apiRouter);

app.listen(3000);
