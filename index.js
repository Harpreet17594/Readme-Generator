// const fs = require("fs");
// const path = require("path");
// const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
// const questions = [];

// function to write README file
// function writeToFile(fileName, data) {}

// function to initialize program
// function init() {}

// function call to initialize program
// init();
// const inquirer = require("inquirer");
import inquirer from "inquirer";
import fs from "fs";
// const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter the name of your Project :",
      name: "name",
    },
    {
      type: "input",
      message: "Enter Description :",
      name: "desc",
    },
    {
      type: "input",
      message: "Enter the installation:",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter the usage:",
      name: "usage",
    },
    {
      type: "list",
      message: "Enter the license:(use arrow keys to choose)",
      name: "license",
      choices: [
        "MIT",
        "Apache",
        "Boost Software License 1.0",
        "Eclipse Public License 1.0",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      message: "Enter the contributions:",
      name: "contributor",
    },
    {
      type: "input",
      message: "Enter the Tests:",
      name: "test",
    },
    {
      type: "input",
      message: "Enter the github username:",
      name: "username",
    },
    {
      type: "email",
      message: "Enter the your Email Address:",
      name: "email",
    },
  ])
  .then((response) =>
    fs.writeFile(
      "README.md",
      `## **The Title of my project** ${response.name}\n` +
        `## **Description**:  ${response.desc}\n` +
        `## **Table of contents are** \n` +
        `1. [--> Installation](#installation)\n` +
        `2. [--> Usage](#usage)\n` +
        `3. [--> License](#license)\n` +
        `4. [--> Contributors](#contributor)\n` +
        `5. [--> Tests](#test)\n` +
        `6. [--> Questions](#question)\n` +
        `## Installation \n ${response.installation}\n` +
        `## Usage \n https://drive.google.com/file/d/1lrLhml71mATqpY9RyXnF4rvWcpSToTNd/view?usp=sharing \n` +
        `## License\n  [![License: MIT](https://img.shields.io/badge/License-${response.license}-yellow.svg)](https://opensource.org/licenses/${response.license})\n` +
        `## Contributor \n ${response.contributor}\n` +
        `## Test\n ${response.test}\n` +
        `## Question \n **Github username**: ${response.username}\n **User Email id**: ${response.email}`,

      (err) => (err ? console.error(err) : console.log("file updated!!!!"))
    )
  );
