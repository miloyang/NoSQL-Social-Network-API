const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    // deleteUser,
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
// router.route('/userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.get(getSingleUser);
router.put(updateUser);
// router.delete(deleteUser);

module.exports = router;