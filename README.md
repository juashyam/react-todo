# Basic ToDo based on React

A basic ToDo based on React which stores all the tasks in Firebase Realtime Database.

## Setting Up Firebase

To start, first go to the [Firebase Homepage](https://console.firebase.google.com/) and click on the **Create New Project** or the **App Project** Button. Also, make sure that you have logged into your google account.

In the Firebase project’s homepage, you will notice three circular icons.

The first two will contain code that will help you connect the firebase project to an iOS and Android app respectively, while the third one will have code that will help you connect the project to a web app (which is what we want).

Click on it and copy the apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, and appId values.

Inside the React project directory, go to the **src** folder and edit a file named **firebase.js**. Inside this file, write the values that we copied from the Firebase.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.