const express = require('express');

const router = express.Router();

const authenticator = require('../../middlewares/auth');
const controller = require('../../controllers/v1/skillTest');
const ROLES = require('../../config/roles');

router.post('/', authenticator(ROLES.ADMIN), controller.postSkillTest);
router.patch(
  '/question/:questionId',
  authenticator(ROLES.ADMIN),
  controller.updateSkillTestQuestion,
);

module.exports = router;
