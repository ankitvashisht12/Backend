const create = require('../create');
const User = require('../../models/User');
const Discussion = require('../../models/Discussion');
const validators = require('../../validators/discussion');

module.exports = {
  getDiscussions: create(async (req, res) => {
    const { page = 1, per_page = 10 } = req.query;

    const discussions = await Discussion.find({})
      .populate('userId', User.getUserIdFields().join(' '))
      .select(Discussion.getDiscussionFields().join(' '))
      // eslint-disable-next-line camelcase
      .limit(per_page * 1)
      // eslint-disable-next-line camelcase
      .skip((page - 1) * per_page);

    const count = await Discussion.countDocuments();

    res.json({
      data: {
        // eslint-disable-next-line camelcase
        totalPages: Math.ceil(count / per_page),
        currentPage: page,
        discussions,
      },
    });
  }),

  getDiscussionById: create(async (req, res) => {
    const { id } = req.params;

    const discussion = await Discussion.findById(id)
      .populate('userId', User.getUserIdFields().join(' '))
      .select(Discussion.getDiscussionFields().join(' '));

    res.json({ data: discussion });
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
