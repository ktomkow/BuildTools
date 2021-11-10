print = () => {
  console.log("JsonEditor");
  console.log("Run:");
  console.log("\n  node index.js <json file> <key1> <newValue1> <key2> <newValue2>\n")
  console.log("    -h | --help - print help");
  console.log("    -c | --config <json file> use file with key value pairs instead of CLI arguments. CLI key value pairs will be ignored");
  console.log("    -o | --output <file> - output file (optional). Use if you do NOT want to override input file");
  console.log("    -s | --strict - override existing keys. Use if you do NOT want to create keys that do not exist but are specified in arguments.");
};

module.exports = { print };
