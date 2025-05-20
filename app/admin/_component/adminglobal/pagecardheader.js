import { Add } from "@mui/icons-material";
import Link from "next/link";

export default function AdminPageCardHeader({
  title,
  button,
  link,
  button_title,
}) {
  return (
    <div className="flex justify-between p-5 dark:border-gray-800 border-b border-gray-200 items-center ">
      <p className="text-xl font-semibold">{title}</p>
      {button ? (
        <Link href={link}>
          <div className="px-5 py-2 font-semibold bg-blue-900 text-white cursor-pointer hover:scale-95 hover:rounded-lg transition-all duration-500 hover:bg-blue-600 dark:bg-blue-300 dark:text-slate-800">
            <Add /> {button_title}
          </div>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
