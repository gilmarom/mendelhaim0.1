const express = require('express');
const path = require('path');
const http = require('http');//.Server(app);
const crypto = require('crypto');
const logger = require('morgan');
const bodyParser = require('body-parser');

// saving video files//
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

const index = require('./routes/index');
//const donate = require('./routes/donation');//
const about = require('./routes/about');
//const contactRoute = require('./routes/contact');//
//const donationRoute = require('./routes/donation'); //
//const dashboardRoute = require('./routes/dashboard');//

const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
 // config = require('./DB');//
 
//mongoose.Promise = require('bluebird');//
//mongoose.connect(config.DB, { promiseLibrary: require('bluebird')})//
 // .then((res) => console.log('connection succesful')).catch((err) => console.error(err));//

let gfs;



// view engine setup
app.set('views', path.join(__dirname, 'dist'));
app.set('view engine', 'html');  
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'false'}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
app.use(express.static(path.join(__dirname, 'dist/client')));
app.use('/', express.static(path.join(__dirname, 'dist')));

app.use('/about',about );
app.use('/contact',contactRoute);
app.use('/donate/:id', donationRoute);
app.use('/dashboard', dashboardRoute);


// catch 404 and forward to error handler
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'dist/client')));



app.use('/',function(req,res){
  res.sendFile(path.join(__dirname,'dist/client','index.html'))
});
const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);

});