var mongoose = require('mongoose');

var mongoDB = 'mongodb://sjlutterbie:abcd1234@ds137611.mlab.com:37611/sjlutterbie-sandbox'
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));