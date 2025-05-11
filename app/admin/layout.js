import { AdminDataProvider } from "./_component/context/adminDataContext";
import AdminNavbar from "./_component/navigation/navbar/navbar";
import AdminSidebar from "./_component/navigation/sidebar/sidebar";

export default function AdminLayout({ children }) {
  return (
    <AdminDataProvider>
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1">
          <AdminNavbar />
          <div className="p-5">{children}</div>
        </div>
      </div>
    </AdminDataProvider>
  );
}
