const create = require('../create');
const Discussion = require('../../models/Discussion');
const validators = require('../../validators/discussion');

module.exports = {
  getDiscussionById: create(async (req, res) => {
    const { id } = req.params;

    const discussion = await Discussion.findById(id)
      .populate('userId', Discussion.getUserFields().join(' '))
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
