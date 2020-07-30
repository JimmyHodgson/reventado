const compression = require('compression');
const bodyParser = require('body-parser');
const express = require('express');
const config = require('./config');
const morgan = require('morgan');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(compression());
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json);
app.use(morgan(config.env));

app.listen(config.port,()=>{
    console.log(`app listening on port: ${config.port}`);
});