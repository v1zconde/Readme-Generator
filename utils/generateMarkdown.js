// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = license;
  if (license === "MIT") badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)]";
  if (license === "APACHE 2.0") badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue)]";
  if (license === "GPL 3.0")badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue)]";
  if (license === "BSD 3")badge = "[![License](https://img.shields.io/badge/License-BSD%203-blue)]";
  if (license === "NONE")badge = "";
  return badge;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = license;
  if (license === "MIT") link = "(https://opensource.org/licenses/MIT)";
  if (license === "APACHE 2.0") link = "(https://opensource.org/licenses/Apache-2.0)";
  if (license === "GPL 3.0")link = "(https://www.gnu.org/licenses/agpl-3.0)";
  if (license === "BSD 3")link = "(https://opensource.org/licenses/BSD-3-Clause)";
  if (license === "NONE")link = "";
return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  const badge = renderLicenseBadge(license);
  const link =  renderLicenseLink(license);
  const section = badge + link;

  return `## License of the project
  ${section}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const sectionBadge = renderLicenseSection(data.license);

  return `# ${data.title}

  ## Personal Info

  Github: ${data.github}\n
  Email: ${data.email}

  ${sectionBadge}

  ## Description of the project

  Description: ${data.description}

  
  ## Command to Install
  Installation: ${data.installation}

  ## Command to test
  Test: ${data.test}

  ## to use the Repo
  Usage: ${data.usage}

  ## To Contribute
  Contribution: ${data.contributing}
`;
}

module.exports = generateMarkdown;
