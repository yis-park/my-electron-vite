import "./App.css";
import Header from "./layout/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import Register from "./login/Register";
import Login from "./login/Login";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  );
}

export default App;
