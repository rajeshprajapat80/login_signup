import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
