// State Example
import React, { useState } from 'react';

function Counter() {
  // State: Internal data that can change
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);  // Updating state
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// Props Example
function Greeting(props) {
  // Props: External data passed from parent
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Counter />
      <Greeting name="Alice" />
    </div>
  );
}

// Key Differences:
// 1. Origin: 
//    - State is internal and controlled by the component itself
//    - Props are external and controlled by whatever renders the component

// 2. Mutability:
//    - State can be changed using setState or useState setter
//    - Props should not be changed by the component that receives them

// 3. Ownership:
//    - State is owned and managed by the component
//    - Props are owned by the parent and read-only to the component

// 4. Purpose:
//    - State is for data that changes over time within a component
//    - Props are for passing data and callbacks down the component tree

// 5. Initialization:
//    - State is initialized in the constructor or with useState
//    - Props are passed to the component when it's rendered

// 6. Updating:
//    - Updating state triggers a re-render of the component
//    - Updating props from the parent also triggers a re-render

// 7. Accessibility:
//    - State can only be accessed in the component that owns and sets it
//    - Props can be passed down to child components

// 8. Persistence:
//    - State persists as long as the component is mounted
//    - New props can be passed at any time from the parent component
