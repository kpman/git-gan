#!/usr/bin/env node

const shell = require('shelljs');

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

shell.exec('git add -A');
shell.exec('git commit --amend --no-edit');
shell.exec(
  'git push origin $(git branch | grep * | cut -d " " -f2) --force-with-lease'
);
