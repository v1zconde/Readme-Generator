// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT")
    license =
      "[![Github License: MIT](https://img.shields.io/badge/License-MIT-yellow)]";
  if (license === "APACHE 2.0")
    license =
      "[![Github License](https://img.shields.io/badge/License-Apache%202.0-blue)]";
  if (license === "GPL 3.0")
    license =
      "[![Github License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue)]";
  if (license === "BSD 3")
    license =
      "[![Github License](https://img.shields.io/badge/License-BSD%203-blue)]";
  if (license === "NONE") license = "";
  return license;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") license = "(https://opensource.org/licenses/MIT)";
  if (license === "APACHE 2.0")
    license = "(https://opensource.org/licenses/Apache-2.0)";
  if (license === "GPL 3.0")
    license = "(https://www.gnu.org/licenses/agpl-3.0)";
  if (license === "BSD 3")
    license = "(https://opensource.org/licenses/BSD-3-Clause)";
  if (license === "NONE") license = "";
  return license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  const badgeSection = {
    badge: badge + link,
    section: `## License of the project

    * ${license}
    `,
  };

  return badgeSection;
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  const sectionBadge = renderLicenseSection(data.license);

  const { badge, section } = sectionBadge;

  return `# ${data.title}\n
 ${badge}

   ## Description
    ${data.description}
  ---- 
  ## Table of Contents

  1. [Installation](#installation)
  2. [Tests](#tests)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [License](#license-of-the-project)
  6. [Questions](#questions)
  
  ## Installation

  To install necesary dependencies, run the following command:

      ${data.installation}

  ## Tests

  To run tests, run the following command:

      ${data.test}

  ## Usage

      Use ${data.usage} to pull down this repo

  ${section}

  ## Contributing

    ${data.contributing}

  ## Questions
you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at 
  Github: [${data.github}](http://github.com/${data.github})
`;
};

module.exports = generateMarkdown;
