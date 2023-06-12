const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const todo = new Schema({
    name: { type: String, require:true},
    isComplete: {type: Boolean,},
},{
  timestamps: true,
});

module.exports = mongoose.model('Todo', todo);
