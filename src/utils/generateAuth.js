const { Octokit } = require('@octokit/core');

module.exports = (accessToken) =>
  new Octokit({
    auth: accessToken,
  });
