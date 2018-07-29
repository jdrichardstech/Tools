# State Updates May Be Asynchronous

React may batch multiple setState() calls into a single update for performance.

Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

For example, this code may fail to update the counter:

//Wrong

`this.setState({ counter: this.state.counter + this.props.increment, });`

To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

`this.setState((prevState, props) => ({ counter: prevState.counter + props.increment }));`

We used an arrow function above, but it also works with regular functions:

`this.setState(function(prevState, props) { return { counter: prevState.counter + props.increment }; });`

Since the this.setState() method is asynchronously executed, it already uses a function instead of an object.
That way, it can access the state when this.setState() is actually executed asynchronously. That’s only one benefit of using the function over the object in this.setState()
