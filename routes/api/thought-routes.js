const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
// router.route('/').get(getSingleThought).put(updateThought).delete(deleteThought);

router.get(getSingleThought);
router.put(updateThought);
router.delete(deleteThought);

module.exports = router;