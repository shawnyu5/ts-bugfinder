#!/bin/env/node
"use strict";

import cp from "child_process";
import p from "process";
import { hideBin } from "yargs/helpers";
import yargs from "yargs";
import { readdirSync } from "fs";
import IError from "../types/errors";

// @ts-ignore
const argv = yargs(hideBin(process.argv)).argv._;
const fileName = argv[0];

if (argv.length < 1) {
   console.error("Please provide a file to run. ");
   p.exit(1);
}

// get the file extension of the file passed in
const fileExtension = fileName.split(".").pop();

// read all error files in the error directory
let errorFiles = readdirSync(__dirname + "/../compilerErrorParser").filter(
   (file) => file.endsWith(".ts")
);

// if error file is found
if (errorFiles.includes(`${fileExtension}.errors.ts`)) {
   let errorFile: IError = require(`../compilerErrorParser/${fileExtension}.errors.ts`);

   // run the file though the compiler
   cp.exec(
      `${errorFile.default.compiler} ${fileName}`,
      (_err, _stdout, stderr) => {
         let error = errorFile.parseError(stderr);

         if (error) {
            cp.exec(`howto ${error}`);
         }
      }
   );
} else {
   console.log("No error parser found for this filetype.");
}
