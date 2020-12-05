const mongoose = require('mongoose');

const ReportDiscussionCommentSchema = new mongoose.Schema(
  {
    discussionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Discussion',
      required: true,
    },
    commentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'DiscussionComment',
      required: true,
    },
    numberOfReports: {
      type: Number,
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
