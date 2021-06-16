var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  id: String,
  date: Date,
  price: String,
  user: String,
});
