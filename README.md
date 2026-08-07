# Node.js Journal CLI

![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

A lightweight, terminal-based journal application built to explore native Node.js filesystem operations and interactive command-line interface (CLI) design. 

This project was built to bypass the abstraction of databases and web browsers, focusing purely on local file persistence, manual data serialization, and raw terminal inputs. It serves as both a practical personal logger and a clean architectural study in developing robust, zero-dependency console utilities.


## Why This Project? & Key Learnings

Developing a terminal-first application offers a unique engineering perspective compared to standard web development. By building this tool, we explore:

*   **Native File Persistence:** Managing asynchronous file writes and reads using Node's core `fs` module to guarantee data persistence.
*   **Data Integrity & State:** Designing a manual JSON state manager that parses, appends, and deletes records securely while preserving schema structure.
*   **Zero-Dependency Design:** Maintaining a fast, lightweight execution footprint by utilizing only native Node.js modules without external npm packages.


## Core Features

*   **Interactive Console Flow:** Create, view, and delete detailed journal entries directly within a persistent terminal lifecycle.
*   **Local File Storage:** Keeps all data fully private, offline, and stored locally on your machine in a structured JSON format.
*   **Automated ID Tracking:** Sequential tracking and generation of unique, persistent IDs for accurate entry retrieval and clean deletions.
*   **Input Integrity:** Solid validation of terminal inputs to prevent empty entries or broken write cycles.


## Technical Stack & Native APIs

To ensure speed and portability, the codebase relies strictly on standard, native Node.js modules rather than external libraries:

*   **Runtime Environment:** Node.js (ES6+)
*   **File I/O Engine:** Native `fs` (File System) module for structured JSON manipulation
*   **Asynchronous Flow:** Promise-based, async/await architecture for non-blocking console operations
*   **External Dependencies:** Zero external npm packages required


## Directory Structure

A clean, decoupled directory structure that separates user interaction, business logic, and local storage operations:

```text
├── controllers/
│   └── journalController.js  # Manages CLI prompts, user commands, and route states
├── data/
│   └── journal.json          # Local JSON database for persistent entry records
├── utils/
│   └── fileHelper.js         # Abstracted helpers for atomic read/write file operations
├── app.js                    # CLI entry point and application lifecycle manager
├── package.json              # Project metadata and configuration
└── README.md                 # Project documentation

```


## Local Setup & Quick Start

To run this CLI application on your local machine, follow the steps below:

### 1. Clone the Repository
```bash
git clone https://github.com/abdul-rahman-0x/node-journal-cli.git
cd node-journal-cli
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Application
Execute the interactive terminal cycle:

```bash
node app.js
```


## CLI Operations & Interaction Flow

Once executed, the application guides you through interactive prompt options. Here is a simulated view of how the terminal commands and disk saves behave:

### Creating an Entry
```text
? Enter Title: Workout Log
? Enter Content: Ran 5km and did pushups

[SUCCESS] Entry saved successfully!
```


### Listing Entries
```text
Journal Entries:
--------------------------------------
ID: 1
Title: Workout Log
Content: Ran 5km and did pushups
Created At: 2026-08-07T16:30:00.000Z
--------------------------------------
```


### Deleting an Entry
```text
? Enter ID to delete: 1

[SUCCESS] Entry deleted successfully.
```


### Persistent JSON Database (data/journal.json)

The application writes all transactional updates directly to your local storage in standard JSON format:


```json
[
  {
    "id": 1,
    "title": "Workout Log",
    "content": "Ran 5km and did pushups",
    "createdAt": "2026-08-07T16:30:00.000Z"
  }
]
```


## License

This project is licensed under the [MIT License](LICENSE).


## Author

Built by **[Abdul Rahman](https://github.com/abdul-rahman-0x)**

