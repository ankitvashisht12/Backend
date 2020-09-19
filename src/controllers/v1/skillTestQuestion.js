const create = require('../create');
const SkillTestQuestion = require('../../models/SkillTestQuestion');
const validators = require('../../validators/skillTestQuestion');

module.exports = {
  postSkillTestQuestion: create(
    async (req, res) => {
      const { question, options, correctIndex } = req.body;

      const newSkillTestQuestion = new SkillTestQuestion({
        question,
        options,
        correctIndex,
      });

      const skillTestQuestion = await newSkillTestQuestion.save();

      res.json({ data: skillTestQuestion });
    },
    {
      validation: {
        validators: validators.postSkillTestQuestion,
        throwError: true,
      },
    },
  ),
};
