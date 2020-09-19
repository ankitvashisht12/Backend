const { body } = require('express-validator');

module.exports = {
  postSkillTestQuestion: [
    body('question').isString().notEmpty().withMessage('Question is required'),
    body('options').isArray().notEmpty().withMessage('Options is required'),
    body('correctIndex')
      .isNumeric()
      .notEmpty()
      .withMessage('Correct Index is required'),
  ],
};
