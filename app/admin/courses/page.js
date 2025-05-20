import { Add, SearchTwoTone } from "@mui/icons-material";
import AdminHeader from "../_component/adminglobal/header";
import AdminCourseTable from "../_component/courses/coursetable";
import AdminPageCardHeader from "../_component/adminglobal/pagecardheader";

export default function AdminCourses() {
  return (
    <div>
      <AdminPageCardHeader
        title="Courses"
        button={true}
        link="/admin/courses/add"
        button_title="Add New Course"
      />
      <div className="p-5">
        <div className="flex pb-5 gap-5">
          <div className="flex flex-1">
            <div className="bg-slate-200 rounded-l p-2 w-30 grid justify-center dark:bg-gray-700 border-b">
              <SearchTwoTone />
            </div>
            <input
              className="flex-1 px-5 py-2 border-b border-slate-200 w-full dark:border-gray-900 focus:outline-0 focus:bg-slate-200 dark:focus:border-b dark:focus:border-white focus:border-b focus:border-black dark:bg-gray-900 dark:focus:bg-gray-700 transition-all duration-500"
              placeholder="Search Courses"
            />
          </div>
        </div>
        <AdminCourseTable />
      </div>
    </div>
  );
}
