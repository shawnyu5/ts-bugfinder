#!/usr/bin/env node
'use strict';

import cp from 'child_process';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs';

const argv = yargs(hideBin(process.argv)).argv._;

if (argv.length < 1) {
  console.error('Please provide a file to run. ');
  process.exit(1);
}

const fileextension = argv[0].split('.').pop();

import(`../languageModules/${fileextension}.module.js`).then((module) => {
  cp.exec(`${module.compiler} ${argv[0]}`, (_err, _stdout, stderr) => {

    cp.exec(`howto ${module.parseFileError(stderr)}`);
  });

});
