const { model, Schema } = require('mongoose');

const recipeSchema = new Schema({
  name: String, 
  description: String,
  createAt: String, 
  thumbsUp: Number,
  thumbsDown: Number
});

module.exports = model('Recipe', recipeSchema);