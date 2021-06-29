var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Order = new Schema({
  idPayment: String,
  address: String,
  artwork: String,
  idUser: String,
  totalPayment: String,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', Order );
