import React, { useEffect } from 'react';

const TimerComponent = () => {
  useEffect(() => {
    const timerId = setInterval(() => {
      console.log('Timer ticked!');
    }, 1000);

    return () => {
      console.log('Timer cleared!');
      clearInterval(timerId);
    };
  }, []);

  return <div>Timer Component</div>;
};

const ScrollComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log('Page scrolled!');
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      console.log('Scroll event listener removed!');
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div>Scroll Component</div>;
};

const App = () => {
  return (
    <div>
      <TimerComponent />
      <ScrollComponent />
    </div>
  );
};

export default App;
