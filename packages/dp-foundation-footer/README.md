# Atomic UI Library

This library has the basic components that will be consumed by all microapps in Habitat. The definition and relationship of these components have been thought using the [atomic design](https://atomicdesign.bradfrost.com/table-of-contents/) mindset.

## Common commands

### `test`

Runs tests using jest. If adding a flag, remember to use `--`, example:

```sh
npm run test -- --watch
```

### `storybook`

Starts storybook for creating components in isolation and reviewing them.

### Running A11N Lifehouse test

- Move to the folder `.a11y-check`
- Execute `npm install`
- Open another bash window in the root folder and execute `npm run storybook`
- In the folder `.a11y-check` using the initial command window or another one execute `npm run start`
- At the end of the process you will see a JSON with the report of issues found and additionally a folder with all the reports placed at `.a11y-check/lh`

> If you are using Linux Subsystem it is required to use _libxss1_, you can install it using
>
> > `sudo apt-get install libxss1`

## Rules

- N/A

## TSLint + Prettier integration

You can also get VSCode to understand your project's static code analysis setup. If you do this:

- You'll see any warnings or errors directly within VSCode
- VSCode can also automatically fix or format your code for you

To make this happen, follow these steps:

1. Install the TSLint extension for VSCode.
2. Install the Prettier extension for VSCode.
3. Run `npm install`. This will install the dev dependencies needed for prettier to work.
4. Restart your IDE and add the following config to either your User or Workspace Settings:

```json
{
  "tslint.run": "onSave"
}
```

Done! Now everytime you save a file, VSCode will automatically format the code for you.
