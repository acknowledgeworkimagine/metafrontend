import logo from './logo.svg';
import './App.css';
import AboutMe from './AboutMe';
import HomePage from './HomePage';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div ClassName="App">
      <nav ClassName="nav">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav-item">About Me</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>

   </div>
  );
}

export default App;
