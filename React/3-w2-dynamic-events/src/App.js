import './App.css';
import Btn from './Btn';
import ModeToggler from './ModeToggler'
function App() {

function handleClick() { 
  let randomNum = Math.floor(Math.random() * 3) + 1;
  console.log(randomNum);
  let userInput = prompt('type a number'); 
  alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
}

  return (
    <div>
      <div>
        <Btn />
      </div>
      <div>
        <ModeToggler />
      </div>
      <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
      </div>
    </div>
  );
}

export default App;
