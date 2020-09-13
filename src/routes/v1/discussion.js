const express = require('express');

const router = express.Router();

const authenticator = require('../../middlewares/auth');
const controller = require('../../controllers/v1/discussion');

router.get('/:id', authenticator(), controller.getDiscussionById);

module.exports = router;
