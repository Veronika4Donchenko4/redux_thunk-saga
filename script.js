const App = () => {
  const [buttonText, setButtonText] = React.useState('Click me');
  const onButtonClick = () => {
    setButtonText('Click me pls');
  };
  return (
    <div className="app">
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
