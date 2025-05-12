import logo from "@/public/images/logo.svg";
import Image from "next/image";
import { useData } from "../../context/adminDataContext";

export default function AdminSidebarHeader() {
  const { sidebarView, setSidebarView } = useData();
  return (
    <div>
      <div
        className={`p-5 font-semibold text-lg flex justify-between 
        items-center transition-all duration-500`}
      >
        <div
          className={`${
            sidebarView ? "max-w-100" : "max-w-0"
          } overflow-hidden transition-all h-10 duration-500 text-nowrap flex`}
        >
          <Image src={logo} alt="GyanGhar" height="40" /> &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        </div>
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
      <hr />
    </div>
  );
}
