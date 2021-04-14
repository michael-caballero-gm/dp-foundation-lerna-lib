# dp-foundation-lerna-lib

Use:

`npm install lerna`
Install lerna dependency. Not necessary to start the project but necessary to execute lerna commands (add dependencies, run tests, etc).

`npm i`
install dependencies and bootstrap lerna

`lerna run test`
Execute all "test" scripts defined in each package. This will run JEST in the packages defined at this moment. Each package 
can implement it's own script. To run test separately enter to the desired folder and execute `npm run test` or `npm run test -- -u` to re-generate snapshots.

`npm run build`
run build command defined in each package (library components) and create a distribution package (dist folder). This folder is 
the one to be publised in the NPM repository


# Local publish npm packages

This is just part a verification process for developers. CI process should be involved here in the real life.

`npm install verdaccio`

then run `verdaccio` command to start the local npm server

after a package is successfully built, it can be published locally running this in the main folder of the package you want to publish:
`npm publish --registry=http://localhost:4873`

# Using your new published package

now you can install the published package running:
`npm install @greatminds/dp-foundation-footer --registry=http://localhost:4873/`

then use it in your project
`import { Footer } from '@greatminds/dp-foundation-footer';`

TODO: create a sample app inside this lerna repository as playground for the developed components
