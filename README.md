# dp-foundation-lerna-lib

Use:

`npm install lerna`
lerna dependency

`npm i`
install dependencies and bootstrap lerna

`npm run build`
run build in the packages (library components) and create a distribution packake

# Local publish npm packages

`npm install verdaccio`

then run `verdaccio` command to start the local npm server

after a package is successfully built, it can be published locally running this in the main folder of the package you want to publish:
`npm publish --registry=http://localhost:4873`

Next steps, lerna to publish to the actual registry

# Using your new published package

now you can install the published package running:
`npm install @greatminds/dp-foundation-footer --registry=http://localhost:4873/`

then use it in your project
`import { Footer } from '@greatminds/dp-foundation-footer';`

