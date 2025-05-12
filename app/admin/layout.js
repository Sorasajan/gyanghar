import { AdminDataProvider } from "./_component/context/adminDataContext";
import AdminNavbar from "./_component/adminglobal/header";
import AdminSidebar from "./_component/navigation/sidebar/sidebar";

export default function AdminLayout({ children }) {
  return (
    <AdminDataProvider>
      <div className="flex ">
        <AdminSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </AdminDataProvider>
  );
}
