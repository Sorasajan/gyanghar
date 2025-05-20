import Link from "next/link";
import AdminCategoryDetails from "../_component/categories/categorydetail";

import { categoryFetcher } from "../_component/data";
import AdminPageCardHeader from "../_component/adminglobal/pagecardheader";

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
      <AdminPageCardHeader
        title="Categories"
        button={true}
        link="/admin/categories/add"
        button_title="Add Categories"
      />
      <div className="flex">
        <div className="p-5 pr-5 w-80 border-r border-gray-200 dark:border-gray-800">
          {categories
            ? renderCategories(categories.data)
            : "No Categories to Show"}
        </div>
        <div className="flex-1 p-5 pl-5">
          <AdminCategoryDetails data={selectedId} />
        </div>
      </div>
    </div>
  );
}
