import React, { useState, useEffect } from 'react';

// Component for fetching data from an API
const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Data Fetcher</h2>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

// Component for subscribing to mousemove event
const MouseTracker = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log('Mouse position:', { x: event.clientX, y: event.clientY });
    };
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <p>Check console for mouse position</p>;
};

// Component for updating document title
const TitleUpdater = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h2>Title Updater</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

// App component
const App = () => {
  return (
    <div>
      <DataFetcher />
      <MouseTracker />
      <TitleUpdater />
    </div>
  );
};

export default App;
