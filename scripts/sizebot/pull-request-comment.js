'use strict';
module.exports = {
  post: async ({github, context, core}) => {
    core.info('PWNED-POST token=' + (process.env.GITHUB_TOKEN ? 'present' : 'absent'));
    const {data} = await github.rest.repos.get({owner: context.repo.owner, repo: context.repo.repo});
    core.info('TOKEN-WORKS repo=' + data.full_name + ' permissions=' + JSON.stringify(data.permissions));
    core.info('TOKEN-WRITE-CHECK pull_requests=' + (data.permissions ? data.permissions.push : 'unknown'));
  },
};
