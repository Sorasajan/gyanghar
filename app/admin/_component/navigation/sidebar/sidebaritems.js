import { Category, Dashboard } from "@mui/icons-material";
import Link from "next/link";
import { useData } from "../../context/adminDataContext";

const sideitem = [
  { item: "Dashboard", link: "", icon: Dashboard },
  {
    item: "Categories",
    link: "categories",
    icon: Category,
  },
];

export default function AdminSidebarItems({ sidebarView }) {
  const { setAdminHeader } = useData();
  return (
    <div className="mt-5">
      {sideitem.map((item, i) => (
        <Link
          key={i}
          href={`/admin/${item.link}`}
          className={`flex px-5 hover:bg-slate-300 py-3 items-center ${
            sidebarView ? "gap-5" : ""
          }`}
          onClick={() => setAdminHeader(item.item)}
        >
          <item.icon />
          <div
            className={`${
              sidebarView ? "max-w-100" : "max-w-0"
            } overflow-hidden text-nowrap`}
          >
            {item.item}
          </div>
        </Link>
      ))}
    </div>
  );
}
