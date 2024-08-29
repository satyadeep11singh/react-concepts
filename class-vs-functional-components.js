// 1. Import statements
// Class Component
import React from 'react';
// Functional Component
import React, { useState, useEffect } from 'react';

// 2. Component Definition
// Class Component
class ClassComponent extends React.Component {
  // 3. Constructor (for state initialization and method binding)
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  // 4. Lifecycle Methods
  componentDidMount() {
    console.log('Class Component mounted');
  }

  componentWillUnmount() {
    console.log('Class Component will unmount');
  }

  // 5. Custom Methods
  handleClick() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  // 6. Render Method
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

// Functional Component
const FunctionalComponent = (props) => {
  // 3. State in Functional Components
  const [count, setCount] = useState(0);

  // 4. useEffect for Lifecycle-like Behavior
  useEffect(() => {
    console.log('Functional Component mounted');
    return () => {
      console.log('Functional Component will unmount');
    };
  }, []);

  // 5. Custom Functions
  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  // 6. Return JSX Directly
  return (
    <div>
      <h1>Functional Component</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

// 7. Default Props
ClassComponent.defaultProps = {
  title: 'Default Class Title'
};

FunctionalComponent.defaultProps = {
  title: 'Default Functional Title'
};

// 8. PropTypes (if using prop-types package)
import PropTypes from 'prop-types';

ClassComponent.propTypes = {
  title: PropTypes.string
};

FunctionalComponent.propTypes = {
  title: PropTypes.string
};

export { ClassComponent, FunctionalComponent };
