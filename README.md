# react-concepts
Important react concepts in code

1.What are the key differences between React class components and functional components?
Import statements:
Class components only need to import React.
Functional components import React and any necessary hooks (e.g., useState, useEffect).

Component Definition:
Class components extend React.Component.
Functional components are defined as regular JavaScript functions or arrow functions.

State Management:
Class components use this.state and this.setState().
Functional components use the useState hook.

Lifecycle Methods:
Class components have built-in lifecycle methods like componentDidMount and componentWillUnmount.
Functional components use the useEffect hook to handle side effects and lifecycle-like behavior.

Custom Methods/Functions:
In class components, custom methods are defined as class methods and often need to be bound in the constructor.
In functional components, custom functions are defined as regular JavaScript functions within the component body.

Rendering:
Class components have a render() method that returns JSX.
Functional components return JSX directly.

Default Props:
Both can use defaultProps, but the syntax is slightly different (shown at the bottom of each component).

PropTypes:
Both can use PropTypes for type checking, with identical syntax (shown at the bottom of the example).
 ***
 
2.Explain the concept of state in React and how it differs from props.
State:
State represents the internal data of a component that can change over time.
It's managed within the component and can be updated using setState (in class components) or the setter function from useState (in functional components).
When state changes, React re-renders the component to reflect the new state.
In the example, we use the useState hook to manage the count state in the Counter component.

Props (short for properties):
Props are external data passed to a component from its parent.
They are read-only within the receiving component and should not be modified directly.
Props allow parent components to pass data and behavior to their children.
In the example, we pass the name prop to the Greeting component.

Key differences:
Origin: State is internal to a component, while props are passed externally.
Mutability: State can be changed, but props should be treated as immutable.
Ownership: A component manages its own state, but its props are owned by the parent.
Purpose: State is for data that changes over time, props are for passing data down the component tree.
Initialization: State is initialized within the component, props are passed when the component is created.
Updating: Both state and prop changes can trigger re-renders, but state is updated internally while props come from the parent.
Accessibility: State is only accessible in the component that owns it, while props can be passed down to children.
Persistence: State persists for the lifetime of the component, while new props can be passed at any time.
***






