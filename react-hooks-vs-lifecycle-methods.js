// Class Component with Lifecycle Methods
class ExampleClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log('Count updated');
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return <div>Count: {this.state.count}</div>;
  }
}

// Functional Component with Hooks
function ExampleFunctionalComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Count updated');
  }, [count]);

  return <div>Count: {count}</div>;
}
