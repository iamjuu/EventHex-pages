import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/pages/login";
import Reset from "./components/pages/reset";
import Resetpaasord from "./components/pages/resetpassword";
import LoginPage from "./components/pages/login/login";
import Loginpurchase from "./components/pages/purchase/loginpurchase";
import Plans from "./components/pages/plans";
import PaymnetComplete from "./components/pages/paymentComplete";
import Signup from "./components/pages/signup";
import Verification from "./components/pages/verification";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/reset-password" element={<Resetpaasord />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/login-purchase" element={<Loginpurchase />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/payment-complete" element={<PaymnetComplete />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/verification" element={<Verification />} />

        <Route path="/" element={<div>Home Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
