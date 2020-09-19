const express = require('express');

const router = express.Router();

const authenticator = require('../../middlewares/auth');
const controller = require('../../controllers/v1/skillTestQuestion');
const ROLES = require('../../config/roles');

router.post(
  '/:testId',
  authenticator(ROLES.ADMIN),
  controller.postSkillTestQuestion,
);

module.exports = router;
