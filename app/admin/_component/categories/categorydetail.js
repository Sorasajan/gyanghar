import { Delete, Edit } from "@mui/icons-material";
import Link from "next/link";

export default function AdminCategoryDetails({ data }) {
  const id = data ? data : "not found";
  return (
    <div className="p-5 bg-gray-200 dark:bg-gray-800">
      <h1 className="font-semibold">Science {id}</h1>
      <hr className="my-5" />
      <p className="font-light italic leading-9">Category Description</p>
      <p className="mt-5">Parent Category</p>
      <p>Science</p>
      <p className="mt-5">Children Categories</p>
      <p>11, 12</p>
      <p className="mt-5">isActive</p>
      <p>true</p>
      <div className="mt-5 flex gap-5">
        <Link
          href="/admin/categories/edit/1"
          className="px-10 py-2 bg-blue-900 text-white hover:scale-95 hover:bg-blue-600 transition-all duration-500 cursor-pointer"
        >
          <Edit /> Edit
        </Link>
        <button className="px-10 py-2 bg-red-900 text-white hover:scale-95 hover:bg-red-600 transition-all duration-500 cursor-pointer">
          <Delete /> Delete
        </button>
      </div>
    </div>
  );
}
