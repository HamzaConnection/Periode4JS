var mongoose = require("mongoose");

var EXPIRES = 60 * 30 * 1000; // 30 minutes
var LocationSchema = new mongoose.Schema({
  userName: {type :String, unique: true},
  created: { type: Date, expires: EXPIRES, default: Date.now() },
  loc: {
    'type': { type: String, enum: "Point", default: "Point" },
     coordinates: { type: [Number] }
  } 
})

//This did NOT work for me, set the index directly on DB as explained in exercise
//LocationSchema.index({ category: 1, loc: "2dsphere" });

//A 2dsphere index supports geometric queries on an earth-like sphere
//This is how we will query for nearby "friends"

//Replace with URL to your own mongolab-db
const MONGO_DB = 'mongodb://hamzaconnection:5800-hlm@ds131997.mlab.com:31997/friendfinder';
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_DB, { useMongoClient: true });

var Location = mongoose.model("location", LocationSchema);

