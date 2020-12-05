const mongooes = require('mongoose');

const ReportDiscussionSchema = new mongooes.Schema(
  {
    discussionId: {
      type: mongooes.Schema.Types.ObjectId,
      ref: 'Discussion',
      required: true,
    },
    numberOfReports: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const ReportDiscussion = mongooes.model(
  'ReportDiscussion',
  ReportDiscussionSchema,
);

module.exports = ReportDiscussion;
