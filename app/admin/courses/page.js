import { Add, SearchTwoTone } from "@mui/icons-material";
import AdminHeader from "../_component/adminglobal/header";
import AdminCourseTable from "../_component/courses/coursetable";

export default function AdminCourses() {
  return (
    <div>
      <AdminHeader title="Courses" />
      <div className="p-10">
        <div className="flex pb-5">
          <input
            className="flex-1 px-5 py-2 border-b border-slate-200 w-full dark:border-gray-900 focus:outline-0 focus:bg-slate-200 dark:focus:bg-gray-900"
            placeholder="Search Courses"
          />
          <div className="bg-slate-200 p-2 w-30 grid justify-center dark:bg-gray-700 border-b hover:scale-95 transition-all duration-500 cursor-pointer">
            <SearchTwoTone />
          </div>
        </div>
        <AdminCourseTable />
      </div>

      <div className="fixed bottom-10 right-10 shadow bg-slate-200 p-2 rounded-full shadow-gray-900 dark:bg-gray-900 dark:shadow-slate-200 hover:scale-95 transition-all duration-500 cursor-pointer hover:bg-slate-400">
        <Add />
      </div>
    </div>
  );
}
