import './App.css';
import Child from './Child';
import React, {useState} from 'react';
import Heading from './Heading';

function App() {
  const date = new Date()
  const [word, setWord] = React.useState('Eat tacos')

  function handleClick() {
    setWord("Drink tequila")
  }

  return (
  <div>
    <div>
        <h1>Application A</h1>
        <Child message={date.toLocaleTimeString()} />
    </div>
    <div className="taqueria">
        <Heading message={word + " at the taquería"} />
        <button onClick={handleClick}>Click Here</button>
    </div>
  </div>
  );
}

export default App;
