const { Schema, model } = require('mongoose');

// const mongoose = require('mongoose')
// mongoose.model 

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
        match: [/.+@.+\..+/], // Mongoose matching validation
        //   validate: {
        //     // Mongoose email validation
        //     validator: function(v) {
        //         // return /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,})$/.test(v);
        //     },
        //     message: props => `${props.value} is not a valid email address!`
        // },
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId, // Tell Mongoose to expect an object id
            ref: 'Thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User', // Self-reference to User model
        },
    ],
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});

// Create a virtual called friendCount to retrieve the length of the user "friends" array field
userSchema.virtual('friendCount').get(function () {
    return this.friends ? this.friends.length: 0;
});

// Create the User model
const User = model('User', userSchema);

module.exports = User;