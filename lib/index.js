#!/usr/bin/env node
const commander = require("commander");
const packageJson = require("../package.json");
const templateDir = require("template-dir");
const path = require("path");

let projectName;
const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments("<project-directory>")
  .usage(`<project-directory> [options]`)
  .action(name => {
    projectName = name;
  })
  .parse(process.argv);

if (!projectName) {
  program.help();
  process.exit(1);
}

templateDir(
  {
    source: path.join(__dirname, "..", "template"),
    destination: projectName,
    onlyFiles: false,
    exclude: [".git", ".idea", "node_modules"],
  },
  {
    projectName,
  },
);
