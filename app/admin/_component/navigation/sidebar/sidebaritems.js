import {
  AutoStoriesTwoTone,
  CategoryTwoTone,
  DashboardTwoTone,
  PortraitTwoTone,
  ReceiptTwoTone,
  RssFeedTwoTone,
  SecurityTwoTone,
  SettingsTwoTone,
} from "@mui/icons-material";
import Link from "next/link";

const sideitem = [
  { item: "Dashboard", link: "", icon: DashboardTwoTone },
  {
    item: "Courses",
    link: "courses",
    icon: AutoStoriesTwoTone,
  },
  {
    item: "Categories",
    link: "categories",
    icon: CategoryTwoTone,
  },
  {
    item: "Students",
    link: "students",
    icon: PortraitTwoTone,
  },
  {
    item: "Invoices",
    link: "invoices",
    icon: ReceiptTwoTone,
  },
  {
    item: "Articles",
    link: "articles",
    icon: RssFeedTwoTone,
  },
  {
    item: "Roles & Permissions",
    link: "roles-permissions",
    icon: SecurityTwoTone,
  },
  {
    item: "Details Configure",
    link: "details-configuration",
    icon: SettingsTwoTone,
  },
];

export default function AdminSidebarItems({ sidebarView }) {
  return (
    <div className="mt-5">
      {sideitem.map((item, i) => (
        <Link
          key={i}
          href={`/admin/${item.link}`}
          className={`flex px-5 hover:bg-slate-300 text-blue-900 dark:text-slate-300 dark:hover:text-blue-900 py-3 group items-center ${
            sidebarView ? "gap-5" : ""
          }`}
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
