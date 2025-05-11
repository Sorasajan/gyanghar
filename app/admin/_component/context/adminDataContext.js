"use client";

import { createContext, useContext, useState } from "react";

// Create the context with default values
const AdminDataContext = createContext({
  sidebarView: true,
  setSidebarView: () => {},
  adminHeader: "Dashboard",
  setAdminHeader: () => {},
});

// AdminDataProvider wraps children components and provides context
export const AdminDataProvider = ({ children }) => {
  const [sidebarView, setSidebarView] = useState(true);
  const [adminHeader, setAdminHeader] = useState("Dashboard");

  return (
    <AdminDataContext.Provider
      value={{
        sidebarView,
        setSidebarView,
        adminHeader,
        setAdminHeader,
      }}
    >
      {children}
    </AdminDataContext.Provider>
  );
};

// Custom hook to access context
export const useData = () => useContext(AdminDataContext);
