const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/user-controller');

// Set up GET, POST all at /api/users
router.route('/').get(getAllUsers).post(createUser);

// Set up GET one, PUT, DELETE at /api/users/:id
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

// Set up POST at /:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;