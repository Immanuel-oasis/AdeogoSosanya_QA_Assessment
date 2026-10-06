# QA Assessment

This project is the solution to the assessment given, as stated, it contains **manual test cases** and **automated end-to-end tests** which was built with [Cypress](https://www.cypress.io/).

---

## 📑 Table of Contents

- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Manual Testing](#-manual-testing)
- [Automated Testing (Cypress)](#-automated-testing-cypress)
- [Test Reports](#-test-reports)

---

## 🛠 Prerequisites

Ensure you have the following installed on your machine before proceeding:

| Tool | Notes |
|---|---|
| [Node.js](https://nodejs.org/) | LTS version recommended |
| npm | Comes bundled with Node.js |
| [Git](https://git-scm.com/) | Required for cloning |

---

## ⚙️ Installation & Setup

> **⚠️ Important:** This project uses a custom local plugin (`cypress_documenter_plugin`) to generate test reports. It is installed via a **relative file path**, so **both repositories must be cloned into the same parent directory**.

### 1. Clone this repository

```bash
git clone https://github.com/Immanuel-oasis/AdeogoSosanya_QA_Assessment.git
```

### 2. Clone the plugin into the same parent directory

Navigate back to the parent directory and clone the plugin alongside the project:

```bash
cd ..
git clone https://github.com/Immanuel-oasis/cypress_documenter_plugin.git
```

Your folder structure should now look like this:

```text
📦 parent-folder
┣ 📂 AdeogoSosanya_QA_Assessment
┗ 📂 cypress_documenter_plugin
```

### 3. Install dependencies

Navigate back into the project directory and install:

```bash
cd AdeogoSosanya_QA_Assessment
npm install
```

This installs all necessary Cypress dependencies and links the local plugin to the project via the relative path in `package.json`.

---

## 📝 Manual Testing

Manual test cases, steps, and expected results are documented in the Google Sheet below:

👉 **[View Manual Test Documentation](https://docs.google.com/spreadsheets/d/1FaXLileIh4pKSyx40DEIuvQtOcwWMZqiblRUHKZlJDI/edit?gid=0#gid=0)**

---

## 🤖 Automated Testing (Cypress)

The automated test scripts cover the objectives stated in the assessment document.

### How to Run the Tests

You can execute the automated tests in either **headless** or **interactive** mode:

#### 1. Headless Mode (Recommended ✅)

Runs all tests in the background and **automatically generates the Excel test report**:

```bash
npx cypress run
```

#### 2. Interactive Mode

Opens the Cypress Test Runner, allowing you to select and watch tests run visually:

```bash
npx cypress open
```

> **💡 Tip:** Use headless mode (`npx cypress run`) when you need the test report — report generation is triggered automatically after the run completes.

---

## 📊 Test Reports

When the tests are run in **headless mode**, the local plugin automatically generates an Excel document detailing the test results.

📁 **Report location:**

```text
cypress/test-docs/test-documentation-latest.xls
```

The file can be opened in **Excel**, **Google Sheets**, or any compatible spreadsheet viewer.
