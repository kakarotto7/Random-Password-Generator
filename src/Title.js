import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Title = () => {
  // This effect runs once, after the first render
  useEffect(() => {
    document.title = "Random Password Generator"
  }, []);
  
  return <h1>Random Password Generator</h1>;
};

ReactDOM.render(
  <Title />,
  document.getElementById('root')
);

export default Title;