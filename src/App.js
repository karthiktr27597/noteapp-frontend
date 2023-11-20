import { Route, Routes } from "react-router-dom"
import LoginPage from "./Components/LoginPage/LoginPage";
import PasswordReset from "./Components/PasswordReset/PasswordReset";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import NoPage from "./Components/NoPage/NoPage";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/passwordreset/:id" element={<PasswordReset />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
