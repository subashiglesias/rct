const mongoose = require('mongoose');
const {Schema} = mongoose;

const projects = mongoose.model('projects', new Schema({
  name: String,
  area: String,
  category: String,
  description: String,
  createdBy: String,
  createdDate: Date,
}, { collection: 'projects' }));


module.exports = { projects };


