import { Delete, Edit, Preview } from "@mui/icons-material";

const courses = [
  {
    id: 1,
    title: "Science",
    category: "Science",
    status: "Published",
  },
  {
    id: 2,
    title: "Management",
    category: "Management",
    status: "Draft",
  },
  {
    id: 3,
    title: "Humanities",
    category: "Humanities",
    status: "Published",
  },
  {
    id: 4,
    title: "Law",
    category: "Law",
    status: "Published",
  },
];

export default function AdminCourseTable() {
  return (
    <div>
      <table className="w-full border-b-2 border-gray-300 dark:border-blue-900 border-separate border-spacing-y-1">
        <thead>
          <tr className="bg-gray-300 dark:bg-blue-800">
            <th className="px-5 py-2 text-left w-5">S.N.</th>
            <th className="px-5 py-2 text-left ">Course Title</th>
            <th className="px-5 py-2 text-left ">Category</th>
            <th className="px-5 py-2 text-left ">Status</th>
            <th className="px-5 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((item, i) => (
            <tr
              key={i}
              className="odd:bg-gray-100 even:bg-gray-100/15 hover:bg-blue-900/20 dark:odd:bg-blue-500/20 dark:even:bg-gray-900 dark:hover:bg-blue-600/40 transition-all duration-200"
            >
              <td className="px-5 py-2 ">{i + 1}</td>
              <td className="px-5 py-2 ">{item.title}</td>
              <td className="px-5 py-2 ">{item.category}</td>
              <td className="px-5 py-2 ">{item.status}</td>
              <td className="px-5 py-2 flex gap-2 w-30">
                <button className="p-1 flex gap-0 gap-2 bg-blue-600 text-white hover:rounded cursor-pointer hover:scale-90 transition-all duration-500">
                  <Preview fontSize="small" />
                  <p className="pr-2  transition-all duration-1000 overflow-hidden">
                    View
                  </p>
                </button>
                <button className="p-1 flex gap-2 bg-blue-900 text-white hover:rounded cursor-pointer hover:scale-90 transition-all duration-500">
                  <Edit fontSize="small" />
                  <p className="pr-2  transition-all duration-1000 overflow-hidden">
                    Edit
                  </p>
                </button>
                <button className="p-1 flex gap-2  bg-red-900 text-white hover:rounded cursor-pointer hover:scale-90 transition-all duration-500">
                  <Delete fontSize="small" />
                  <p className="mpr-2 transition-all duration-1000 overflow-hidden">
                    Delete
                  </p>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
