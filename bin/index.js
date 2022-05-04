#!/bin/env/node
'use strict';

import cp from 'child_process';
import p from 'process';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs';

const argv = yargs(hideBin(p.argv)).argv._;
// console.log(argv);

if (argv.length < 1) {
  console.log('Please a file to run. ');
  p.exit(1);
}

// console.log(fileextension);
let compiler;

switch (argv[0].split('.').pop()) {
  case 'js':
    compiler = 'node';
    break;
  case '': //a bad workaround for now... cargo doesn't take files to compile...
    compiler = 'cargo build';
  case 'cpp': // clean up the executable after compilation?
    compiler = 'g++ -Wall -std=c++17 -g -o ws *.cpp';
  case 'c': // clean up the executable after compilation?
    compiler = 'gcc -Wall -std=c11 -g -o ws *.c';
}


cp.exec(`${compiler} ${argv[0]}`, (_err, stdout, stderr) => {


});
