import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from './components/pages/signup'
import Login from "./components/pages/login";
import Reset from "./components/pages/reset";
import Resetpaasord from "./components/pages/resetpassword";
import LoginPage from "./components/pages/login/login";
import Loginpurchase from "./components/pages/purchase";
import Plans from './components/pages/plans'
import PaymnetComplete from './components/pages/paymentComplete'
import PurchaseComplete  from './components/pages/purchaseComplete'
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/reset-password" element={<Resetpaasord />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/login-purchase" element={<Loginpurchase />} />
        <Route path="/plans" element={<Plans />} />
        <Route  path="/payment-complete" element={<PaymnetComplete/>}/>
        <Route  path="/purchase-complete" element={<PurchaseComplete/>}/>
        <Route path="/" element={<div>Home Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
