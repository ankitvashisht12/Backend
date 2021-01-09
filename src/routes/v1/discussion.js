const express = require('express');

const router = express.Router();

const authenticator = require('../../middlewares/auth');
const controller = require('../../controllers/v1/discussion');

router.get('/', authenticator(), controller.getDiscussions);
router.get('/:repoId', authenticator(), controller.getDiscussionByRepoId);
router.get('/:discussionId/comments', authenticator(), controller.getComments);
router.post('/', authenticator(), controller.postDiscussion);
router.post('/comment', authenticator(), controller.postComment);
router.post(
  '/report/:discussionId',
  authenticator(),
  controller.reportDiscussionDetails,
);
router.post(
  '/report/:discussionId/comment/:commentId',
  authenticator(),
  controller.reportDiscussionCommentDetails,
);

module.exports = router;
