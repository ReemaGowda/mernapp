const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	content: String
}, {timestamp: true})
		

//const Todo = mongoose.model("Todo", TodoSchema);

module.exports = mongoose.model("Todo",todoSchema);