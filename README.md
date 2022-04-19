# POC URL FRONT

Tiny frontend for [poc-url tiny api](https://github.com/GianCastle/poc-url)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to start
 ⚠️ Must have installed [poc-url tiny api](https://github.com/GianCastle/poc-url)
 - Go to project directory
 - Run `npm install`
 - If everything goes ok, runs `npm start` ✅


## Tech Stack
- **Typescript**: as default per requirements
- **React Hook Form**: I decided to use React Hook Form because it isolates the component and avoids the other components from re-rending and it easy to understand API. RHF will improve the performance by avoiding unwanted rendering in other child components. This allows us to extend our form if we wish or as our API grows without affecting our browser peformance. 
- **Axios**: Axios is a http library that provide many useful features from the start such as Default JSON parsing, interceptors (which could be useful later on if we want to use a monitoring tool like LogRocket or Sentry or we want to make some actions based on the response or request type)
- **Jest**: our main Javascript testing framework on `cra`


## Known issues
- This project only supports modern browsers due to `navigator.clipboard` API. We should add a Polyfill in case we want browser support for older browsers such as IE
- Honestly, I didn't like having to pass as a dependency the isSucess state to the `useGetAllUrls` hook as a way to refresh the state. While in this small case it is not shocking, we could use better structured patterns such as a context that handles the whole flow of fetching URLs or use third party packages with even more elaborate patterns for fetching and state handling such as React Query. 
- Although we use Bootstrap, in the current state of the project it is an overkill. But if we would like to extend the project with some design system, we can extend it by editing its SCSS variables and
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

