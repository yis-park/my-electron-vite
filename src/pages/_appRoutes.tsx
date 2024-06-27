import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../layout/Main";
import Dashboard from "./Dashboard";
import Login from "../login/Login";
import Register from "../login/Register";
import Profile from "./Profile";
import Upload from "./Upload";
import DashboardGrid from "./DashboardGrid";
import Header from "../layout/Header";
// import { Sidebar } from "../components/Sidebar";

const AppRoutes: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/dashboard" element={<DashboardGrid />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard/upload" element={<Upload />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
