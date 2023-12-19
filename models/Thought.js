const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Thought schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            require: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // Use a getter method to format the timestamp on query
            get: (createdAt) => new Date(createdAt).toLocaleString(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    }
);

// Create a virtual called reactionCount
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Create the Thought model
const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;