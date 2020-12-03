const mongoose = require('mongoose');

const ReportDiscussionCommentDetailsSchema = new mongoose.Schema(
  {
    discussionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Discussion',
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    discussionCommentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'DiscussionComment',
      required: true,
    },
  },
  { timestamps: true },
);

const ReportDiscussionCommentDetails = mongoose.model(
  'ReportDiscussionCommentDetails',
  ReportDiscussionCommentDetailsSchema,
);

module.exports = ReportDiscussionCommentDetails;
