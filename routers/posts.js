const express = require('express');
const router = express.Router();
const posts = require('../data/posts.js');
const postsController = require('../controllers/postsController.js')
const error = require('../middlewares/error.js')

//index (get)
router.get('/', postsController.index);

//show (get))
router.get('/:id', error.eroorNotFound, postsController.show);

//store (post)
router.post('/', error.errorPost, postsController.post);

//update (put)
router.put('/:id', error.eroorNotFound, postsController.update);

//modify (patch)
router.patch('/:id', postsController.modify);

//destroy (delete)
router.delete('/:id', error.errorDestoy, postsController.destroy);

module.exports = router