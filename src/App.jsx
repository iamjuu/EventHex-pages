import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/login';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the Login page route */}
        <Route path="/login" element={<Login />} />
        
        {/* Add more routes here as needed */}
        <Route path="/" element={<div>Home Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
