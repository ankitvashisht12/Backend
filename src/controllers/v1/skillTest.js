const create = require('../create');
const SkillTest = require('../../models/SkillTest');
const validators = require('../../validators/skillTest');

module.exports = {
  postSkillTest: create(
    async (req, res) => {
      const { name, image, description } = req.body;

      const newSkillTest = new SkillTest({
        name,
        image,
        description,
      });

      const skillTest = await newSkillTest.save();

      res.json({ data: skillTest });
    },
    {
      validation: {
        validators: validators.postSkillTest,
        throwError: true,
      },
    },
  ),

  updateSkillTestQuestion: create(
    async (req, res) => {
      const { questionId } = req.params;
      const { question, options, correctIndex } = req.body;

      const skillTestQuestion = SkillTest.findByIdAndUpdate(
        questionId,
        {
          question,
          options,
          correctIndex,
        },
        { new: true },
      );

      res.json({ data: skillTestQuestion });
    },
    {
      validation: {
        validators: validators.updateSkillTestQuestion,
        throwError: true,
      },
    },
  ),
};
