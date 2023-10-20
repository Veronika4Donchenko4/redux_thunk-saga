import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  console.log('called');
  const [buttonText, setButtonText] = React.useState('Click me');

  const onButtonClick = () => {
    setButtonText('Hello from React');
  };

  return (
    <div className="app">
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};
