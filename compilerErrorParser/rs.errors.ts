export function parser(stderr) {
  let lines = stderr.split('\n');
  let line = lines.find(line => line.includes('error['));
  return line;
}
