const App = (props) => {
  console.log(props);
  const [buttonText, setButtonText] = React.useState(props.initialButtonText);
  const [styleButton, setStyleButton] = React.useState(
    props.initialStyleButton
  );

  const onButtonClick = () => {
    setButtonText(`Hello from React`);
    setStyleButton('green-btn');
  };
  return (
    <div className="app">
      <button className={styleButton} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" initialStyleButton="" />);
