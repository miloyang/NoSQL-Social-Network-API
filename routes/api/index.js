const router = require('express').Router();
// const friendRoutes = require('./friend-routes');
const userRoutes = require('./user-routes');
// const reactionRoutes = require('./reaction-routes');
const thoughtRoutes = require('./thought-routes');

// router.use('/friends', friendRoutes);
router.use('/users', userRoutes);
// router.use('/reaction', reactionRoutes);
router.use('/thought', thoughtRoutes);

module.exports = router;
