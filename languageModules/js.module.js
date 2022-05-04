
import fs from 'fs';

export const compiler = 'node'

export function parseFileError(stderr) {
  let lines = stderr.split('\n');
  let line = lines.find(line => line.includes('Error'));
  return line;
}

export function parseDirectoryError(stderr){
  let lines = stderr.split('\n');
  let line = lines.find(line => line.includes('Error'));
  return line;

}
