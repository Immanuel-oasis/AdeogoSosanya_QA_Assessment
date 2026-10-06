# QA Assessment
Welcome to the QA Assessment repository. This project contains both manual test cases and automated end-to-end tests using Cypress.

## Table of Contents
- Prerequisites
- Installation & Setup
- Manual Testing
- Automated Testing (Cypress)
- Test Reports

## 🛠 Prerequisites
Ensure you have the following installed on your machine before proceeding:

- Node.js (LTS version recommended)
- npm (comes bundled with Node.js)
- Git

## ⚙️ Installation & Setup
This project utilizes a custom local plugin (cypress_documenter_plugin) to generate test reports. It is installed via a relative file path, so both repositories must be cloned into the same parent directory.

To set up the project locally, follow these steps:

Clone this repository:
```bash

git clone https://github.com/Immanuel-oasis/AdeogoSosanya_QA_Assessment.git
cd <repository directory>

```
Clone the local plugin into the same parent directory:
Navigate back to the parent directory and clone the plugin:

```bash

cd ..
git clone https://github.com/Immanuel-oasis/cypress_documenter_plugin.git
```

Your folder structure should look like this:
text

📦 parent-folder <br>
┣ 📂 your-repository-name <br>
┗ 📂 cypress_documenter_plugin

### Install dependencies:
Navigate back into your project directory and install the dependencies:
```bash

cd <project directory>
npm install
```

This will install all necessary Cypress files and link the local plugin to the project via the relative path in package.json.

## 📝 Manual Testing
The manual test cases, steps, and expected results are documented in the Google Sheet below:

[View Manual Test Documentation](https://docs.google.com/spreadsheets/d/1FaXLileIh4pKSyx40DEIuvQtOcwWMZqiblRUHKZlJDI/edit?gid=0#gid=0)

## 🤖 Automated Testing (Cypress)
The automated test scripts cover the objectives stated in the assessment document.

How to Run the Tests
You can execute the automated tests using either interactive or headless mode:

1. Headless Mode (Recommended for report generation):
Runs all tests in the background and automatically generates the Excel test report.

```bash

npx cypress run
```

2. Interactive Mode (Cypress UI):
Opens the Cypress Test Runner, allowing you to select and watch tests run visually.

```bash

npx cypress open
```

## 📊 Test Reports
When running the tests in headless mode (npx cypress run), the local plugin automatically generates an Excel document detailing the test results.

Report Location:

`cypress/test-docs/test-documentation-latest.xls`
(You can open this file in Excel, Google Sheets, or any compatible spreadsheet viewer).

