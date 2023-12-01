import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar.js"
import Home from './components/Home';

// import NavBar from "./components/NavBar";
// import Forum from './components/Forum.js';
import logo from "./img/reliable-penpal-logo.png"

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="App-header">
        <img className="App-logo" src={logo} alt="Logo"></img>
        <div className="App-header-text">Reliable PenPals</div>
      </div >
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/forum" element={<Forum />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;


