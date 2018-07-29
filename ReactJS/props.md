##PROPS

**PROPS ARE IMMUTABLE**

-immutible data that is passed down into your components as an object called this.props (or just props if it is a functional component)

-when you use this.props the 'this' is actually
referring to the class object that you declared for
your component

-props are immutable!!!! you cannot change this.props

this.props.text = "Blah blah" //cannot do this!

this.props = {} //it is possible to do But NEVER do this because the idea is that props are immutable

this.props.newProps = 'Also Wrong' //use default props which is the proper way to set props that the user did not provide for you.
