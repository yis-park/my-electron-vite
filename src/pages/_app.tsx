import "../App.scss";
// import Header from "../layout/Header";

// import Main from "../layout/Main";
// import Register from "../login/Register";
// import Login from "../login/Login";
// import Dashboard from "./Dashboard";
// import Upload from "./Upload";
// import { Sidebar } from "../components/Sidebar";
import AppRoutes from "./_appRoutes";

function App() {
  return (
    // <>
    //   {/* <Header /> */}
    //   <Sidebar />
    //   <Routes>
    //     <Route path="/" element={<Main />} />
    //     <Route path="/dashboard" element={<Dashboard />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="register" element={<Register />} />
    //     <Route path="/upload" element={<Upload />} />
    //   </Routes>
    // </>

    <AppRoutes />
  );
}

export default App;
