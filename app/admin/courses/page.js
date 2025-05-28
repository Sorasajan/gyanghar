import AdminCourseTable from "../_component/courses/coursetable";
import AdminPageCardHeader from "../_component/adminglobal/pagecardheader";
import AdminCourseViewHeader from "../_component/courses/courseViewHeader";

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
        <AdminCourseViewHeader />
        <AdminCourseTable />
      </div>
    </div>
  );
}
