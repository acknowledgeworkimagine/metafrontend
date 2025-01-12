import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import SayHi from './SayHi';
import Card from './Card';

// function Header() {
//   return <h1>Hello world</h1>;
// }

// function App() {
//   return <Header />
// }

// export default App;


function App() {
  return (
  <div>
      <div className="App">
      This is the starting code for "Your first component" ungraded lab
      <Heading />
      <SayHi firstName="Bob"/>
      <SayHi firstName="Amigo"/>
      </div>
      <div>
      <h1> Task: Add Three Card Elements</h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />
      </div>
    </div>
  );
};

export default App;


