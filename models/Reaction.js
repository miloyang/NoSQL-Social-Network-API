const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Reaction schema
const reactionSchema = new Schema(
    {
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // Use a getter method to format the timestamp on query
    get: (createdAt) => new Date(createdAt).toLocaleString(),
  },
});

module.exports = reactionSchema;
