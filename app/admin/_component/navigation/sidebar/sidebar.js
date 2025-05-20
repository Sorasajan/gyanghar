"use client";
import { Logout } from "@mui/icons-material";
import AdminSidebarItems from "./sidebaritems";
import AdminSidebarHeader from "./sidebarheader";
import { useData } from "../../context/adminDataContext";

export default function AdminSidebar() {
  const { sidebarView } = useData();

  return (
    <div
      className={`bg-white dark:bg-slate-900 text-slate-900 shadow-sm dark:shadow-slate-700/80 dark:text-slate-100 h-screen sticky top-0 left-0 flex flex-col 
    ${
      sidebarView ? "max-w-100" : "max-w-20"
    } transition-[max-width] duration-1000`}
    >
      <AdminSidebarHeader />
      <div className="flex-1">
        <AdminSidebarItems sidebarView={sidebarView} />
      </div>
      <div className="bg-red-600 text-white p-5 flex justify-between">
        <div
          className={`${
            sidebarView ? "max-w-100" : "max-w-0"
          } overflow-hidden transition-all duration-500 text-nowrap font-semibold`}
        >
          Logout
        </div>
        <Logout />
      </div>
    </div>
  );
}
