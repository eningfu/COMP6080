## Clean up a React App - improve accessibility in the context of linting and material ui

In the `exercise` folder run `npm i` and then `npm run dev`.

This contains a *very bad* react app, with a single component, that attempts to display a simple page with a header, footer, and body that has an input and a button.

### Part 1

This code fails to adhere to a number of very basic accessibility and best practices. Implement any and all relevant improvements to the code to make it more accessible.

### Part 2

Play around with the linter. We have already set up ESLint for you which has been configured in `exercise/eslint.config.ts`. Run `npm run lint`. This will lint all React TypeScript files.

Ensure your `exercise` passes the linter.

### Part 3

It's time to try and use a React based library - **Material UI**.

Install Material UI with yarn [here](https://mui.com/getting-started/installation/)

```sh
npm add @mui/material @emotion/react @emotion/styled
```

Once installed, add at least two Material UI components to your ReactTS app. They can be headers, buttons, alerts, cards - anything. They must be clearly visible to someone using the page.
