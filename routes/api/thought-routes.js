const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// Set up GET one, PUT, DELETE at /api/thoughts/:id
router.route('/:id').get(getSingleThought).put(updateThought).delete(deleteThought);

// Post at /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// Delete at /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;