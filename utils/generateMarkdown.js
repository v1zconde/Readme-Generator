// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === "MIT")
    return "[![Github License: MIT](https://img.shields.io/badge/License-MIT-yellow)]";
  if (license === "APACHE 2.0")
    return "[![Github License](https://img.shields.io/badge/License-Apache%202.0-blue)]";
  if (license === "GPL 3.0")
    return "[![Github License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue)]";
  if (license === "BSD 3")
    return "[![Github License](https://img.shields.io/badge/License-BSD%203-blue)]";
  if (license === "NONE") return "";
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license === "MIT") return "(https://opensource.org/licenses/MIT)";
  if (license === "APACHE 2.0")
    return "(https://opensource.org/licenses/Apache-2.0)";
  if (license === "GPL 3.0")
    return "(https://www.gnu.org/licenses/agpl-3.0)";
  if (license === "BSD 3")
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  if (license === "NONE") return "";
  
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license === "NONE") {
    return "";
  } else {
    return `## License of the project

    * ${license}
`;
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  const sectionBadge = renderLicenseSection(data.license);
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);

  return `# ${data.title}\n
 ${badge}${link}

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

  ${sectionBadge}

  ## Contributing

    ${data.contributing}

  ## Questions
    If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at 
  Github: [${data.github}](http://github.com/${data.github})

  <iframe src="https://drive.google.com/file/d/1n0VDey-ckMGB1k0gQ-8ltZy7i1JWiRmp/preview" width="640" height="480"></iframe>

`;
};

module.exports = generateMarkdown;
