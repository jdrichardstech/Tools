Unit tests test the smallest possible parts of an application in order to check their proper operation.

Enzyme is a React testing library built by Airbnb to test mounted components.

Jest is a test runner built by Facebook to automatically pick up tests. It provides many features such as the running of individual tests and coverage ports

describe() groups together individual tests.

it() runs an individual test.

beforeEach() runs before each individual test in a `describe` block.

afterEach() runs after each individual test in a `describe` block.

simulate() allows to test user events on components such as typing or clicking.

Test coverage reporting gives a percentage output of how well tests capture written components by checking their line coverage and various possibilities in state.

`npm -- --coverage`
