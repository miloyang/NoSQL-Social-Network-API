// Import dependencies
const { User, Thought } = require('../models');

// Create functionality for the User model
const userController = {
  // GET all users (callback function for `GET /api/users`)
  getAllUsers(req, res) {
    User.find({})
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.error(err);
        res.status(500).json(err); 
      });
  },

  // Get one user by id (callback function for `GET /api/users/:id`)
  getSingleUser({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: 'thoughts',
        select: '-__v',
      })
      .populate({
        path: 'friends',
        select: '-__v',
      })
      .select('-__v')
      .then(dbUserData => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'No user found with this id' });
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json(err);
      });
  },

  // Add a user to the database (callback function for `POST /api/users`)
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(400).json(err));
  },

  // Update user by id (callback function for `PUT /api/user/:id`)
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then(dbUserData => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'No user found with this id' });
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },

  // Delete user and associated thoughts (callback function for `DELETE /api/users/:id`)
  deleteUser({ params }, res) {
    Thought.deleteMany({ userId: params.id })
      .then(() => {
        User.findOneAndDelete({ _id: params.id }).then(dbUserData => {
          if (!dbUserData) {
            return res.status(404).json({ message: 'No user found with this id' });
          }
          res.json(dbUserData);
        });
      })
      .catch(err => res.status(500).json(err)); 
  },

  // Add a new friend (callback function for `POST /api/users/:userId/friends/:friendId`)
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: params.friendId } },
      { new: true }
    )
      .then(dbUserData => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'No user found with this id' });
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },

  // Delete a friend (callback function for `DELETE /api/users/:userId/friends/:friendId`)
  deleteFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then(dbUserData => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'No user found with this id' });
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },
};


// const userController = {
//     // Get all users
//   getAllUsers: async (req, res) => {
//     try {
//       const users = await User.find();
//       res.json(users);
//     } catch (err) {
//       res.status(500).json({ message: 'Internal Server Error', error: err.message });
//     }
//   },

// // Get a single user by ID
//   async getSingleUser(req, res) {
//     try {
//         const user = await User.findOne({ _id: req.params.userId })

//         if (!user) {
//             return res.status(404).json({ message: 'No user found!' });
//         }

//         res.json(user);
//     } catch (err) {
//         res.status(500).json({ message: 'Internal Server Error', error: err.message });
//     }
// },

// // Create a new user
// async createUser(req, res) {
//     try {
//         const newUser = await User.create(req.body);
//         res.json(newUser);
//     } catch (err) {
//         res.status(500).json({ message: 'Internal Server Error', error: err.message });
//     }
// },

// // Update a user by ID
// async updateUser(req, res) {
//     try {
//         const updatedUser = await User.findOneAndUpdate(
//             { _id: req.params.userId },
//             req.body,
//             { new: true }
//             );
    
//         if (!updatedUser) {
//             return res.status(404).json({ message: 'No user found!' });
//         }
    
//         res.json({ message: 'User successfully updated!', user: updatedUser });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: 'Internal Server Error', error: err.message });
//     }
// },

// // Delete a user by ID
// async deleteUser(req, res) {
//     try {
//         const deletedUser = await User.findOneAndRemove({ _id: req.params.userId });

//         if (!deletedUser) {
//             return res.status(404).json({ message: 'No user found!' });
//         }

//         const deletedThought = await Thought.deleteMany({ users: req.params.userId });

//         res.json({
//             message: 'User and associated thoughts successfully deleted!',
//             user: deletedUser,
//             thoughts: deletedThoughts,
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: 'Internal Server Error', error: err.message });
//     }
// },
// };

// Export the module
module.exports = userController;
