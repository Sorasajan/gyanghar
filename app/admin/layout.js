import { AdminDataProvider } from "./_component/context/adminDataContext";
import AdminNavbar from "./_component/adminglobal/header";
import AdminSidebar from "./_component/navigation/sidebar/sidebar";
import AdminHeader from "./_component/adminglobal/header";

export default function AdminLayout({ children }) {
  return (
    <AdminDataProvider>
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1">
          <AdminHeader />
          <div className="p-10">
            <div className="bg-white dark:bg-slate-900/60 text-slate-900 dark:text-slate-100 rounded-lg">
              {children}
            </div>
          </div>
        </div>
      </div>
    </AdminDataProvider>
  );
}
