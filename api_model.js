var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var links = new Schema({
	term: String,
	when: Date
});

module.exports = mongoose.model('link-img', links);