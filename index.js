const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "Where are you located?",
      name: "location",
    },
    {
      type: "input",
      message: "Write a short bio for yourself (150-200 words)",
      name: "bio",
    },
    {
      type: "input",
      message: "Paste your LinkedIn URL here:",
      name: "linkedin",
    },
    {
      type: "input",
      message: "Paste your GitHub URL here:",
      name: "github",
    },
  ])
  .then((response) => {
    const { name, location, bio, linkedin, github } = response;
    fs.writeFile(
      "index.html",
      `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      
        <title>${name}'s Portfolio</title>
      </head>
      <body>
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">${name}</a>
          </div>
        </nav>
        <div class="card">
          <div class="card-body">
            <p>Hi, I'm ${name} and I live in ${location}</p>
            <p>${bio}</p>
          </div>
        </div>
      
        <div class="card">
          <div class="card-body">
            <a href="${linkedin}">Linkedin</a>
            <a href="${github}">Github</a>
          </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
      </body>
      </html>`,
      function (err) {
        if (err) {
          return console.log(err);
        }
      }
    );
  });
