import Link from "next/link";
import {
  AdminDeleteButton,
  AdminEditButton,
} from "../adminglobal/forms/buttons";

export default function AdminCategoryDetails({ data }) {
  const id = data ? data : "not found";
  return (
    <div className="p-5 ">
      <h1 className="font-semibold">Science {id}</h1>
      <hr className="my-5" />

      <p className="font-light italic leading-9">
        Exercitation adipisicing ex ex voluptate consequat enim id.
      </p>
      <p className="mt-5">Slug</p>
      <p>Slug</p>
      <p className="mt-5 font-semibold">Parent Category</p>
      <div className="py-2 flex">
        <Link
          href="#"
          className="px-5 py-1 bg-yellow-500 transition-all duration-500 hover:scale-95 hover:rounded-lg"
        >
          Science
        </Link>
      </div>
      <p className="mt-5 font-semibold">Children Categories</p>
      <div className="flex gap-2 py-2">
        <Link
          href="#"
          className="px-5 py-1 bg-yellow-500  transition-all duration-500 hover:scale-95 hover:rounded-lg"
        >
          11
        </Link>
        <Link
          href="#"
          className="px-5 py-1 w-fit bg-yellow-500  transition-all duration-500 hover:scale-95 hover:rounded-lg"
        >
          12
        </Link>
      </div>

      <div className="mt-10 border border-gray-200 rounded p-5 flex gap-5 relative">
        <p className="absolute -top-4 left-6 bg-white dark:bg-gray-900 px-3 font-semibold">
          SEO Metadata
        </p>
        <div>
          <p className="font-semibold">Meta Title</p>
          <p>title</p>
        </div>
        <div>
          <p className="font-semibold">Meta Description</p>
          <p>description</p>
        </div>
      </div>
      <div className="mt-10 flex gap-5">
        <AdminEditButton link="/admin/categories/edit/1" />
        <AdminDeleteButton data="1" />
      </div>
    </div>
  );
}
