<a name="readme-top"></a>
# Share Your Thoughts 

![MIT License](https://img.shields.io/badge/license-MIT-important)

## Table of Contents

- [Description](#description)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Usage Instructions](#usage-instructions)
- [License Section](#license)
- [Tests](#tests)
- [Contact Us](#contact-us)

## Description

This project aimed to develop an API for a social network web application. The API facilitates users in sharing their thoughts, reacting to the thoughts of their friends, and managing their friend lists.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

- MongoDB
- Mongoose
- Express.js
- Node.js
- JavaScript
- Insomnia 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Node.js Installation

To check if you already have Node.js installed on your computer, enter node -v in the command line. If successful, the command prompt will return a version number. Otherwise, please install Node.js at https://nodejs.org/en/ and clicking on the LTS version. If you are on Windows, make sure to look for the section that says `Download for Windows (x64)`. If you are using macOS, make sure to look for the section that says `Download for MacOS (x64)`

### Clone the Repo

Once Node.js has been successfully installed, click on the green "<> Code" button and copy the link of the repo. Head over to your code editor and open the terminal. In the terminal, "cd" into the directory you want this repo to be cloned into. Once in the folder, type "git clone" and paste the link copied. The complete repo will be successfully cloned into your folder when entered.

### Express.js

You must also install the Express.js npm package to run the server. Since Express.js is an npm package instead of being built directly into node.js, you must type `npm init` into the command line to allow npm packages to be installed. Next, go to the server.js file, and in the command line, type `npm install express` to install Express.js on your computer. For documentation on Express.js follow this link https://expressjs.com/en/4x/api.html.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage Instructions

1. Upon completing the installation steps, execute npm i to install the required dependencies. 

2. Subsequently, launch the server by running npm start.

3. Navigate to Insomnia and refer to the instructions in the "Tests" section for testing the available routes. Additionally, you can explore the screenshots within the images folder under the public directory to view visuals of all the routes, or refer to the provided screencastify video below.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Screencastify

Screencastify Link: 

## License

Permission to use this application is granted under the MIT license.
Click on the link for more information: [MIT License Information](https://opensource.org/licenses/MIT)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Tests

### Insomnia

Insomnia was used to seed and test the routes for this app. There is no command for running these tests. 
1. To test the application, download insomnia. For more information on Insomnia, follow this link: https://docs.insomnia.rest/.

2. Run `npm run start` to start the server

3. Navigate to Insomnia and initiate testing for the desired route. Ensure to modify the route method from GET to either POST, PUT, or DELETE based on the specific test requirements.

4. The routes are outlined as follows (adjust "users" to "thoughts", "reactions" or "friends" if you intend to test those routes, and replace ":id" with the actual identifier of the route you are testing).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

#### Example Insomnia Test Routes

- `/api/users`

  **GET (Find all users)**
  
  **POST (Create a user)**

- `/api/users/:userid`

  **GET (Find one user)**

  **PUT (Update a user)**

  **DELETE (Delete a user)**

- `/api/users/:userId/friends/:friendId`

  **POST (Add a friend)**

  **DELETE (Remove a friend)**

- `/api/thoughts`

  **GET (Find all thoughts)**
  
  **POST (Create a thought)**

- `/api/thoughts/:thoughtId`

  **GET (Find a thought)**

  **PUT (Update a thought)**

  **DELETE (Delete a thought)**

- `/api/thoughts/:thoughtId/reactions`

  **POST (Create a reaction)**

  **DELETE (Delete a reaction)**

## Contact Me

GitHub Link: (https://github.com/miloyang)
Email Address: <miloyang9@gmail.com><br>
LinkedIn: (https://www.linkedin.com/in/miloyang)
