const mongoose = require('mongoose');

const ReportDiscussionSchema = new mongoose.Schema(
  {
    reason: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    discussionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Discussion',
      required: true,
    },
  },
  { timestamps: true },
);

const ReportDiscussion = mongoose.model(
  'ReportDiscussion',
  ReportDiscussionSchema,
);

module.exports = ReportDiscussion;
