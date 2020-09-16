const create = require('../create');
const User = require('../../models/User');
const Discussion = require('../../models/Discussion');
const DiscussionComment = require('../../models/DiscussionComment');
const validators = require('../../validators/discussion');

module.exports = {
  getDiscussionById: create(async (req, res) => {
    const { id } = req.params;

    const discussion = await Discussion.findById(id)
      .populate('userId', User.getUserIdFields().join(' '))
      .select(Discussion.getDiscussionFields().join(' '));

    res.json({ data: discussion });
  }),

  getComments: create(async (req, res) => {
    // eslint-disable-next-line camelcase
    const discussion_id = req.params;

    const discussionComments = await DiscussionComment.find({
      discussionId: discussion_id,
    })
      .populate('userId', User.getUserIdFields().join(' '))
      .select(DiscussionComment.getDiscussionCommentFields().join(' '));

    res.json({ data: discussionComments });
  }),

  postDiscussion: create(
    async (req, res) => {
      const { question, repository } = req.body;

      const newDiscussion = new Discussion({
        question,
        repository,
        userId: req.user.id,
      });

      const discussion = await newDiscussion.save();

      res.json({ data: discussion });
    },
    {
      validation: {
        validators: validators.postDiscussion,
        throwError: true,
      },
    },
  ),
};
