// ObjectId() method for converting studentId string into an ObjectId for querying database
const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

// const userController = {
//   getAllUsers: async (req, res) => {
//     try {
//       const users = await User.find();
//       res.json(users);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   },

//   // Implement other CRUD operations here
// };

// module.exports = userController;

module.exports = {
    // Get all users
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
            } catch (err) {
                res.status(500).json(err);
            }
        },
        async getSingleUser(req, res) {
            try {
                const user = await User.findOne({ _id: req.params.userId })

                if (!user) {
                    return res.status(404).json({ message: 'No user found!' });
                }

                res.json(user);
            } catch (err) {
                res.status(500).json(err);
            }
        },
        // Create a new user
        async createUser(req, res) {
            try {
                const usersDB = await User.create(req.body);
                res.json(usersDB);
            } catch (err) {
                res.status(500).json(err);
            }
        },
    };