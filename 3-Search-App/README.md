This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Currently the test coverage of this project is 

```68.57% Statements 24/35  | 100% Branches 6/6 | 57.14% Functions 8/14 | 69.7% Lines 23/33```

you can validate this by runing 

```bash
npm test -- --coverage
```

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Accessibility, Performance, and SEO

After running runing several audits the values for the metrics mentioned on the title are 

- Accessibility: 80 the main issues encountered here are due to the css framework I decided to use.
- Best practices: 93 the recommendation here was to use http/2 since this ran on localhost it is expected to get this issue
- SEO: 100 due to the number of meta tags added on the index page of the project


### Containarization

The project currently is containarized into a Dockerfile in order to run the application into a container first you will need to have docker installed and them go to your terminal to the root directory of the project 3-Search-App and run the following command

```docker-compose up```

in order to shutdown the container input the following command in the terminal

```docker-compose down```