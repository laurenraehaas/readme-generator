// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = {
    'Mozilla Public License 2.0': 'https://img.sheilds.io/badge/License-MPL%202.0-brightgreen.svg',
    'MIT License': 'https://img.sheilds.io/badge/License-MIT-yellow.svg',
  };
  if(licenseBadge.hasOwnProperty(license)) {
    return licenseBadge[license]
  } 
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    'Mozilla Public License 2.0': 'https://www.mozilla.org/en-US/MPL/2.0',
    'MIT License': 'https://opensource.org/license/mit',
  }
  if(licenseLink.hasOwnProperty(license)) {
    return licenseLink[license]
  } 
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license
  const licenseBadgeUrl = renderLicenseBadge(license)
  const licenseLink = renderLicenseLink(license)
  const readMe = `
    ${data.title}
    ![License Badge](${licenseBadgeUrl})
    ${data.description}
    ${data.installation}
    ${data.usage}
    ${data.contribution}
    This project was made under the ${data.license}. ${data.licenseLink}
    ${data.email}
    ${data.reach}`

    return readMe
};

module.exports = generateMarkdown;