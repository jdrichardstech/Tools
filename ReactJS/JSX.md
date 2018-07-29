JSX produces React Elements

Rendering logic is coupled with UI logic: how events are handled, how state changes over time, and how data is prepared for display

Instead of artificially separating technologies by putting markup and logic in separate files, REACT separates concerns with loosely coupled units which are called components, which contain both.

JSX is not required by React but is helpful as a visual aid when working with UI. Also helps REACT show more useful error messages.

After compliation JSX becomes regular JS function calls and evaluate to objects.

You can use valid JS Expressions inside curly braces of JSX

`
function formatName(user) {
return user.firstName + ' ' + user.lastName;
}

const user = {
firstName: 'Harper',
lastName: 'Perez'
};

const element = (

  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
element,
document.getElementById('root')
);
`

JSX prevents injection attacks
It is safe to embed user input

const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;

REACTDOM escapes any
