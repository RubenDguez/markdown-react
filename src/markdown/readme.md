# Tech Quiz Test Suite

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Cypress](https://img.shields.io/badge/cypress-testing-brightgreen)
![Node.js](https://img.shields.io/badge/node.js-%3E%3D20.0.0-brightgreen)
![React](https://img.shields.io/badge/react-%5E18.3.1-blue)
![MongoDB](https://img.shields.io/badge/mongodb-%5E7.0.14-green)

## Description

This project adds comprehensive testing to an existing Tech Quiz application built with the MERN stack. The app allows users to take a quiz with ten random questions and view their final score. The testing suite uses **Cypress** to implement both **component** and **end-to-end tests** for key functionalities.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
  - [Component Tests](#component-tests)
  - [End-to-End Tests](#end-to-end-tests)
- [Walkthrough Video](#walkthrough-video)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [License](#license)
- [Questions](#questions)

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/RubenDguez/tech-quiz-test-suite.git
    ```

2. Navigate into the project directory:

    ```bash
    cd tech-quiz-test-suite
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Rename the `.env.example` file to `.env` and set the required environment variables.

5. Install **Cypress** as a dev dependency:

    ```bash
    npm install cypress --save-dev
    ```

6. Configure Cypress for both component and end-to-end testing.

## Usage

To start the application:

1. Run the server and client:

    ```bash
    npm run start
    ```

2. Open Cypress to run tests:

    ```bash
    npm run test
    ```

3. To view and modify the codebase, open your preferred code editor and navigate through the project files.

## Testing

### Component Tests

Component tests are written to verify the functionality of the **Quiz** component in isolation. These tests ensure that individual parts of the component work as expected, like rendering questions and capturing user input.

The component tests are located in the `cypress/component/Quiz.cy.jsx` file.

### End-to-End Tests

End-to-end tests simulate the user's journey through the application, ensuring that the quiz flows as expected from start to finish. These tests cover the entire process, including starting the quiz, answering questions, and viewing the final score.

The end-to-end tests are located in the `cypress/e2e/quiz.cy.js` file.

#### Steps Covered in Tests

- **Start Quiz**: Clicking the "Start" button should begin the quiz.
- **Answer Questions**: Each question is presented, and the user can select an answer.
- **View Score**: After answering all questions, the final score is displayed.
- **Restart Quiz**: The user can start a new quiz once the current one is complete.

## Walkthrough Video

You can view the walkthrough video showing all tests passing and demonstrating the setup here:

[Walkthrough Video Link](#)

The video shows:

- All tests running and passing from the command line.
- How to invoke the application using the command line.
- How to run both component and end-to-end tests using **Cypress**.

## Technologies Used

- **MERN Stack** (MongoDB, Express.js, React, Node.js)
- **Cypress** for testing
- **JavaScript/TypeScript**
- **CSS**

## File Structure

The project follows a well-organized directory structure:

```bash
.
├── client/                 # Front-end application (React)
├── server/                 # Back-end application (Node.js/Express)
├── cypress/                # Cypress tests
    ├── component/          # Component tests
        └── Quiz.cy.jsx     # Quiz component tests
    ├── e2e/                # End-to-end tests
        └── quiz.cy.js      # Tech Quiz E2E tests
    ├── fixtures/           # Mock data for tests (questions.json)
    └── tsconfig.json
├── cypress.config.ts       # Cypress configuration
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation

```
## License

This project is licensed under the MIT License.

## Questions

- If you have further questions, you can contact me at: argenis.dominguez@hotmail.com
- This is my GitHub profile: [RubenDguez](https://github.com/RubenDguez)
