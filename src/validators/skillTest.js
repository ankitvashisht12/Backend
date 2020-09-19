const { body } = require('express-validator');

module.exports = {
  postSkillTest: [
    body('name').isString().notEmpty().withMessage('Name is required'),
    body('image').isString().notEmpty().withMessage('Image is required'),
    body('description')
      .isString()
      .notEmpty()
      .withMessage('Description is required'),
  ],
  postSkillTestQuestion: [
    body('question').isString().notEmpty().withMessage('Question is required'),
    body('options').isArray().notEmpty().withMessage('Options is required'),
    body('correctIndex')
      .isNumeric()
      .notEmpty()
      .withMessage('Correct Index is required'),
  ],
};
