import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/login';
import Reset from './components/pages/reset';
import Resetpaasord from './components/pages/resetpassword'
import LoginPage from './components/pages/login/login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset/>} />
        <Route path="/reset-password" element={<Resetpaasord/>} />
        <Route path="/login-page" element={<LoginPage/>} />

                <Route path="/" element={<div>Home Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
