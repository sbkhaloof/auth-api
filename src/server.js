
'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const v1Routes = require('./routes/v1.js');
const v2Routes=require('./routes/v2');
//v2 route

const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./routes/routes');
const logger = require('./middleware/logger.js');



const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

// Routes

app.use(authRoutes);
app.use('/api/v1', v1Routes);
app.use('/api/v2',v2Routes);

app.get('/',(req,res)=>{
  res.send('this is the home page')
})



app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};