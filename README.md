# react-ts-todo

A simple todo list app written in React + Typescript.

Demo: https://maniacalhonks.github.io/react-ts-todo/

The main source files are:

```
src
├── App.tsx - the root component
├── Clock.tsx
├── DataBackend.tsx
├── index.tsx - main entry point
└── TodoList.tsx
```

A brief overview of what each of the files does:

 - index.tsx
    - `ReactDOM.render(<App />, document.getElementById('root'));`
 - App.tsx
    - renders the root view
    - holds all the state of the todo app
    - defines mutation methods that setState()
    - uses Clock and TodoList
    - persists state changes to localStorage
 - Clock.tsx
    - a ticking clock
    - has its own state, the current date + time
    - the date/time is updated with the latest once every second
    - current date/time is displayed
    - there's logic to color the clock text red every 5th second
 - DataBackend.tsx
    - persistence to localStorage
 - TodoList.tsx
    - a todo list
    - can add new items
    - can edit existing items (double click/tap), and toggle items as completed
    - there's an option to hide/show all completed items

---

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
