import Link from "next/link";
import AdminCategoryDetails from "../_component/categories/categorydetail";
import { Add } from "@mui/icons-material";
import AdminHeader from "../_component/adminglobal/header";

import { categoryFetcher } from "../_component/data";

const renderCategories = (items, isRoot = true) => {
  return (
    <ul className={isRoot ? "" : "ml-4"}>
      {items.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        return (
          <li key={item.category_id}>
            {hasChildren ? (
              <details>
                <summary className="py-2 hover:bg-gray-200 px-5 cursor-pointer dark:hover:bg-gray-800">
                  <Link
                    href={`/admin/categories?categoryId=${item.category_id}`}
                  >
                    {item.name}
                  </Link>
                </summary>
                {renderCategories(item.children, false)}
              </details>
            ) : (
              <Link href={`/admin/categories?categoryId=${item.category_id}`}>
                <div
                  className={`${
                    isRoot ? "" : "ml-4"
                  } py-2 hover:bg-gray-200 dark:hover:bg-gray-800 px-5 cursor-pointer`}
                >
                  {item.name}
                </div>
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default async function AdminCategoryPage({ searchParams }) {
  const selectedId = (await searchParams?.categoryId) || "";
  const categories = await categoryFetcher();

  return (
    <div>
      <AdminHeader title="Category" />
      <div className="flex">
        <div className="p-10 pr-5 w-80">
          <Link href="/admin/categories/add">
            <div className="px-5 py-2 font-semibold bg-blue-900 text-white cursor-pointer hover:scale-95 transition-all duration-500 hover:bg-blue-600 dark:bg-blue-300 dark:text-slate-800">
              <Add /> Add Category
            </div>
          </Link>
          {categories
            ? renderCategories(categories.data)
            : "No Categories to Show"}
        </div>
        <div className="flex-1 p-10 pl-5">
          <AdminCategoryDetails data={selectedId} />
        </div>
      </div>
    </div>
  );
}
