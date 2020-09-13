const create = require('../create');
const Discussion = require('../../models/Discussion');
const validators = require('../../validators/discussion');
const User = require('../../models/User');

module.exports = {
  postDiscussion: create(
    async (req, res) => {
      const { question, repository } = req.body;

      const user = await User.findById(req.user.id);

      const newDiscussion = new Discussion({
        question,
        repository,
        userId: req.user.id,
        name: user.name,
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
