const express = require('express');

const router = express.Router();

const authenticator = require('../../middlewares/auth');
const controller = require('../../controllers/v1/discussion');

router.get('/:id', authenticator(), controller.getDiscussionById);
router.get('/:discussion_id/comments', authenticator(), controller.getComments);
router.post('/', authenticator(), controller.postDiscussion);

module.exports = router;
