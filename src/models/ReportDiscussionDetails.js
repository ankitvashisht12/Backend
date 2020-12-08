const mongoose = require('mongoose');

const ReportDiscussionDetailsSchema = new mongoose.Schema(
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

const ReportDiscussionDetails = mongoose.model(
  'ReportDiscussionDetails',
  ReportDiscussionDetailsSchema,
);

module.exports = ReportDiscussionDetails;
