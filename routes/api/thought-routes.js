const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThoughts,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/').get(getSingleThoughts).put(updateThought).delete(deleteThought);

module.exports = router;