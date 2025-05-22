"use client";

import { AccountCircle } from "@mui/icons-material";
import { useData } from "../context/adminDataContext";
import ThemeToggle from "@/app/_globalComponent/themecomponent/themeToggle";

export default function AdminHeader({ title }) {
  const { sidebarView, setSidebarView } = useData();
  return (
    <div className="sticky top-0 z-100 shadow-sm dark:shadow-slate-700/30 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-5 pr-10 h-20 flex justify-between items-center cursor-pointer">
      <div className="text-lg font-semibold">
        <div
          className="w-[24px] flex flex-col justify-between group h-[19px]"
          onClick={() => setSidebarView(!sidebarView)}
        >
          <div
            className={`w-full h-[2px] rounded-xl bg-slate-900 ${
              sidebarView ? "rotate-45 delay-500" : ""
            } transition-transform duration-1000 origin-left dark:bg-slate-200`}
          ></div>
          <div
            className={`w-full h-[2px] rounded-xl bg-slate-900 dark:bg-slate-200 ${
              sidebarView ? "opacity-0" : " delay-500"
            } transition-opacity duration-1000`}
          ></div>
          <div
            className={`w-full h-[2px] rounded-xl bg-slate-900 ${
              sidebarView ? "-rotate-45 delay-500" : ""
            } transition-transform duration-1000 origin-left dark:bg-slate-200`}
          ></div>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="relative bg-white rounded-full shadow transition-all duration-500 hover:scale-95 p-1 dark:bg-slate-900">
          <AccountCircle />
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}
