/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import React, { useState } from "react";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <React.Fragment>
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />

      <div>
        <button
          className="btn-menu"
          onClick={(): void => setIsSidebarOpen(true)}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        style={{
          width: "25%",
          position: "sticky",
          top: "0px",
          zIndex: 999,
          height: "100vh",
          float: "left",
        }}
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
        {/* https://github.com/abhijithvijayan/react-minimal-side-navigation */}
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            navigate(itemId);
          }}
          items={[
            {
              title: "Main",
              itemId: "/",
              elemBefore: () => <Icon name="coffee" />,
            },
            {
              title: "Dashboard",
              itemId: "/dashboard",
              elemBefore: () => <Icon name="user" />,
              subNav: [
                {
                  title: "Upload",
                  itemId: "/dashboard/upload",
                  elemBefore: () => <Icon name="cloud-snow" />,
                },
                {
                  title: "Members",
                  itemId: "/",
                  elemBefore: () => <Icon name="coffee" />,
                },
              ],
            },
            {
              title: "Login",
              itemId: "/login",
              elemBefore: () => <Icon name="user" />,
              subNav: [
                {
                  title: "Register",
                  itemId: "/login/register",
                  elemBefore: () => <Icon name="calendar" />,
                },
              ],
            },
          ]}
        />

        <div className="absolute bottom-0 w-full my-8">
          <Navigation
            activeItemId={location.pathname}
            items={[
              {
                title: "Profile",
                itemId: "/profile",
                elemBefore: () => <Icon name="activity" />,
              },
            ]}
            onSelect={({ itemId }) => {
              navigate(itemId);
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
