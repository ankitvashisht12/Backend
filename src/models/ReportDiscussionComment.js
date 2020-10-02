const mongoose = require('mongoose');

const ReportDiscussionCommentSchema = new mongoose.Schema(
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
    discussionCommentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'DiscussionComment',
      required: true,
    },
  },
  { timestamps: true },
);

const ReportDiscussionComment = mongoose.model(
  'ReportDiscussionComment',
  ReportDiscussionCommentSchema,
);

module.exports = ReportDiscussionComment;
