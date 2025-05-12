import ThemeToggle from "@/app/_globalComponent/themecomponent/themeToggle";
import { AccountCircle } from "@mui/icons-material";


export default function AdminHeader({title}) {
  return (
    <div className=" p-5 h-20 shadow-lg dark:shadow-gray-900 w-full flex justify-between items-end">
      <div className="text-lg font-semibold">
{title}
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
