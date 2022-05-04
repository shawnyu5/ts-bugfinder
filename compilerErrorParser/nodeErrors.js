// const dick = await fetch('https://api.github.com/users/dick-bob');
//              ^^^^^

// SyntaxError: await is only valid in async functions and the top level bodies of modules
//     at Object.compileFunction (node:vm:352:18)
//     at wrapSafe (node:internal/modules/cjs/loader:1033:15)
//     at Module._compile (node:internal/modules/cjs/loader:1069:27)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
//     at node:internal/main/run_main_module:17:47

//parse for the line with Error:

export default function parser(stderr) {
  let lines = stderr.split('\n');
  let line = lines.find(line => line.includes('SyntaxError'));
  return line;

}
