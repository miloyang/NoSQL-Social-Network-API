const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
    {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'A valid email address is required'],
        unique: true,
          validate: {
            // Mongoose email validation
            validator: function(v) {
                return /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,})$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        },
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User', // Self-reference to User model
        },
    ],
});

// Create a virtual called friendCount
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Create the User model
const User = mongoose.model ('user', userSchema);

model.exports = User;