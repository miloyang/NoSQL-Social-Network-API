const { Schema, model, Types } = require('mongoose');
// const Schema = mongoose.Schema;
// const reactionSchema = require('../Unused/Reaction');

// Create Reaction schema
const reactionSchema = new Schema(
    {
      reactionId: {
        type: Types.ObjectId, // tell Mongoose to expect an ObjectId
        default: () => new Types.ObjectId(), // default value is a new ObjectId
      },
      reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
        trim: true,
      },
      username: {
        type: String,
        required: true,
        trim: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        // Use a getter method to format the timestamp on query
        get: (createdAt) => new Date(createdAt).toLocaleString(),
      },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );

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
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;