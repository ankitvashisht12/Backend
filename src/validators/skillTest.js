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
  updateSkillTestQuestion: [
    body('question')
      .isString()
      .optional()
      .withMessage('Question should be a String'),
    body('options')
      .isArray()
      .optional()
      .withMessage('Options should be an Array'),
    body('correctIndex')
      .isNumeric()
      .custom(
        (correctIndex, { req }) =>
          correctIndex >= 0 && correctIndex < req.body.options.length,
      )
      .optional()
      .withMessage('Correct Index should be a Number'),
  ],
};
