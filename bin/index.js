#!/bin/env/node
'use strict';

import cp from 'child_process';
// import p from 'process';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs';
import fs from 'fs'

const argv = yargs(hideBin(process.argv)).argv._;

if (argv.length < 1) {
  console.error('Please provide a file to run. ');
  p.exit(1);
}

let compiler;
const fileextension = argv[0].split('.').pop();
switch (argv[0].split('.').pop()) {
  case 'js':
    compiler = 'node';
    break;
  case '': //a bad workaround for now... cargo doesn't take files to compile...
    compiler = 'cargo build';
    break;
  case 'cpp': // clean up the executable after compilation?
    compiler = 'g++ -Wall -std=c++17 -g -o ws *.cpp';
    break;
  case 'c': // clean up the executable after compilation?
    compiler = 'gcc -Wall -std=c11 -g -o ws *.c';
    break;
}


cp.exec(`${compiler} ${argv[0]}`, (_err, _stdout, stderr) => {
  import(`../compilerErrorParser/${fileextension}.errors.js`).then((module) => {
    cp.exec(`howto ${module.parser(stderr)}`);
  });
});

