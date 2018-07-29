# Enzyme Setup

The following section will show you how to setup and perform React testing with Enzyme which makes it effortless to test React components with unit and integration tests. It is a library by Airbnb which was introduced for component tests in React.

`npm install --save-dev enzyme`

Enzyme introduced adapters to play well with React. That’s why you have to install such an adapter for your test setup too. The version of it depends on your React version:

`npm install --save-dev enzyme-adapter-react-16`

Last but not least, you can setup Enzyme in your test/helpers.js file. There you can configure the adapter and expose the enzyme functionalities globally next to the expect function:

`import { expect } from 'chai';`
`import { mount, render, shallow, configure} from 'enzyme';`
`import Adapter from 'enzyme-adapter-react-16';`

`configure({ adapter: new Adapter() });`

`global.expect = expect;`

`global.mount = mount;`
`global.render = render;`
`global.shallow = shallow;`

You can make shallow, render and mount from Enzyme globally accessible. That way, you don’t need to import it explicitly in your test files anymore. You will use these three functions for your unit and integration tests with Enzyme for your React components.
