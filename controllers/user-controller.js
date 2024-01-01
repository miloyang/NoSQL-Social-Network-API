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

// Export the module
module.exports = userController;