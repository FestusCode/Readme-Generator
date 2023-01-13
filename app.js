import inquirer from "inquirer";
import fs from "fs";

const questions = [
  {
    type: "input",
    name: "projectName",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "How to install the project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How to use the project?",
  },
  {
    type: "input",
    name: "contributing",
    message: "How to contribute to the project?",
  },
  {
    type: "input",
    name: "license",
    message: "What is the license of your project?",
  },
];
inquirer.prompt(questions).then((answers) => {
  const readme = `
# ${answers.projectName}

${answers.description}

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing
${answers.contributing}

## License

This project is licensed under the ${answers.license} license.`;
});

fs.writeFileSync("README.md", readme);
console.log("README generated!");
