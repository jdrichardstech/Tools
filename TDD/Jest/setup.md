Robin Wieruch version
https://www.robinwieruch.de/react-testing-tutorial/

`npm install --save-dev jest react-test-renderer`

cd test

touch jest.config.json

Then add to file:
`{ "testRegex": "((\\.|/*.)(snapshot))\\.js?$", "rootDir": ".." }`

The testRegex configuration is a regular expression that can be used to specify the naming of the files where your snapshot tests will be located. In this case, the files will have the name \*.snapshot.js. That’s how you can separate them clearly from the \*.spec.js files for unit and integration tests.

Jest will run recursively through your src/ folder and run all the snapshot tests identified with the regular expression.

The rootDir configuration is used to specify the root folder where Jest should start to run through all the folders recursively. Since the Jest configuration is located in the test/ folder, you have to go one folder up the directory chain to be able to access the src/ folder where your snapshot tests can be found.

Last but not least, you need to specify a new script in your package.json to run your snapshot tests on the command line:

`"scripts": { "start": "webpack-dev-server --config ./webpack.config.js", "test:unit": "mocha --require babel-core/register --require ./test/helpers.js --require ./test/dom.js --require ignore-styles 'src/**/*.spec.js'", "test:unit:watch": "npm run test:unit -- --watch", "test:snapshot": "jest --config ./test/jest.config.json", "test:snapshot:watch": "npm run test:snapshot -- --watch" },`

Now, you can run your snapshot tests by using npm run test:snapshot. It will tell Jest to run all your snapshot tests with the help of the Jest configuration file. The second script, npm run test:snapshot:watch can be used to run the snapshot tests in watch mode.
If you decide to not use Mocha and Chai, you can only have one testing script for your Jest tests which would include Sinon and Enzyme.
