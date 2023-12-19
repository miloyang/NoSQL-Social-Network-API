const express = require('express');
const friendController = require('../controllers/friend-controller');
const router = express.Router();

// POST to add a new friend to a user's friend list
router.post('/users/:userId/friends/:friendId', friendController.addFriend);

// DELETE to remove a friend from a user's friend list
router.delete('/users/:userId/friends/:friendId', friendController.removeFriend);

module.exports = router;
