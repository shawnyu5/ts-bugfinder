export default {
   name: "javascript",
   compiler: "node",
};

/**
 * takes the error output of node and returns the error message
 * @param stderr the error output of node
 */
export function parseError(stderr: string): string | undefined {
   let lines = stderr.split("\n");
   let line = lines.find((line) => line.includes("Error"));
   return line;
}
