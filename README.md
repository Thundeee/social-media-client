# Workflow 

[![Deploy static content to Pages](https://github.com/Thundeee/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/Thundeee/social-media-client/actions/workflows/pages.yml)

[![E2E testing](https://github.com/Thundeee/social-media-client/actions/workflows/e2eTests.yml/badge.svg)](https://github.com/Thundeee/social-media-client/actions/workflows/e2eTests.yml)

[![Unit testing](https://github.com/Thundeee/social-media-client/actions/workflows/unitTests.yml/badge.svg)](https://github.com/Thundeee/social-media-client/actions/workflows/unitTests.yml)

## Description

Workflow was a school assignement where we were tasked to work as a QA Engineer and implement tests for developers. I implemented auto formatting, linting, unit tests and end-to-end tests to the existing project, creating the start of a CI/CD pipeline. The Project used Github Pages for hosting and had to pass all tests before being deployed.

Working on this project was both really fun and really annoying. Adding tests to an existing project is always a challenge, but it was a good learning experience. I learned a lot about how to implement tests in a project and how to work with CI/CD pipelines. I also learned a lot about how to work with Github Actions and how to use them to automate the testing process. 

I implemented auto formatting and linting on commit. On push to a specific branch the project would be built and deployed to Github Pages if it passes both the unit tests and the end-to-end tests. It will also run these checks on pull request to the main branch.

## Built With


- [husky](https://www.npmjs.com/package/husky)
- [eslint](https://www.npmjs.com/package/eslint)
- [prettier](https://www.npmjs.com/package/prettier)
- [jest](https://www.npmjs.com/package/jest)
- [cypress](https://www.npmjs.com/package/cypress)
- [babel](https://www.npmjs.com/package/babel)
- [lint-staged](https://www.npmjs.com/package/lint-staged)
- [vite](https://www.npmjs.com/package/vite)



## Getting Started


## Installing


1. Clone the repo:

```bash
git clone git@github.com:Thundeee/react-ca.git
```

2. Install node.js if you haven't already:

```
https://nodejs.org/en/download/
```

3. Navigate to the project folder in your terminal and run the following command to install the dependencies:

```bash
npm i
```

## Setup

Build the site

```
npm run start
```

```
npm run deployBuild
```

Preview the site

```
npm run preview
```

## Setup Local Enviorment

To run test locally you have to make a .env file and put an Email and Password in it like shown below

```
EMAIL = EXAMPLEEMAIL@EXAMPLE.EXAMPLE
PASSWORD = EXAMPLEPASSWORD
```

Note: This has to be from a REGISTERED account on the noroff api. You can find the docs here: https://noroff-api-docs.netlify.app/social-endpoints/authentication#register.
You can also register a user when running the project on localhost.

To run cypress

```
npm run test-cypress
```

eslint, prettier and jest run on commit.
cypress tests run on Pull request.


## Contact

The easiest way to get in touch with me is through Discord or Twitter. I am also available on LinkedIn if you'd like to connect!


<a href="https://twitter.com/potetsalatlol" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="potetsalatlol" height="40" width="40" /></a><a href="https://discord.com/users/183978195551387649" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg" alt="Asbjorn#6086" height="40" width="40" /></a><a href="https://linkedin.com/in/asbjørn-abelsen-sekse-346961241" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="asbjørn-abelsen-sekse-346961241" height="40" width="40" /></a>
