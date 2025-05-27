// App.js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './router/Home';  // Hier importieren wir die Home-Komponente
import Work from './router/Work';  // Deine Work-Seite
import Project from './router/Project';  // Deine Project-Seite
import './App.css';


function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/work">Work experiences</Link></li>
        <li><Link to="/project">Current private projects.</Link></li>
      </ul>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar bleibt immer sichtbar */}
        <Navbar />

        {/* Der Inhalt ändert sich je nach Route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}
