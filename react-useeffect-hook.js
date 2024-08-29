import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This effect runs after every render
    console.log('Component rendered');

    // Simulating data fetching
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function (equivalent to componentWillUnmount)
    return () => {
      console.log('Component will unmount');
      // Perform any necessary cleanup here
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  // Effect with dependencies
  useEffect(() => {
    console.log('Data has changed:', data);
  }, [data]); // This effect runs whenever 'data' changes

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataFetchingComponent;
