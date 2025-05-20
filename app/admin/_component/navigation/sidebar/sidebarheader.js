import logoImg from "@/public/images/logo_only.svg";
import logoText from "@/public/images/logo_text.svg";
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
        <Image src={logoImg} alt="GyanGhar" height="40" className="dark:dark" />
        <div
          className={`${
            sidebarView ? "max-w-100" : "max-w-0"
          } overflow-hidden transition-all h-10 duration-500 text-nowrap flex`}
        >
          <Image
            src={logoText}
            alt="GyanGhar"
            height="40"
            className="dark:dark -ml-5"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
}
