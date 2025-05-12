import Link from "next/link";
import AdminCategoryDetails from "../_component/categories/categorydetail";
import { Add } from "@mui/icons-material";
import AdminHeader from "../_component/adminglobal/header";

const fallbackcategories = {
  data: [
    {
      category_id: 1,
      name: "Programming",
      description: "Software development courses",
      parent_category_id: null,
      created_at: "2025-05-09T09:34:26.000Z",
      children: [
        {
          category_id: 4,
          name: "Programming4",
          description: "Software development courses4",
          parent_category_id: 1,
          created_at: "2025-05-09T09:37:32.000Z",
          children: [
            {
              category_id: 7,
              name: "Programming6",
              description: "Software development courses6",
              parent_category_id: 4,
              created_at: "2025-05-09T09:40:18.000Z",
              children: [],
            },
          ],
        },
        {
          category_id: 8,
          name: "Programming7",
          description: "Software development courses7",
          parent_category_id: 1,
          created_at: "2025-05-09T09:42:14.000Z",
          children: [],
        },
      ],
    },
    {
      category_id: 2,
      name: "Programming2",
      description: "Software development courses2",
      parent_category_id: null,
      created_at: "2025-05-09T09:34:37.000Z",
      children: [
        {
          category_id: 5,
          name: "Programming5",
          description: "Software development courses5",
          parent_category_id: 2,
          created_at: "2025-05-09T09:39:25.000Z",
          children: [],
        },
      ],
    },
    {
      category_id: 3,
      name: "Programming3",
      description: "Software development courses3",
      parent_category_id: null,
      created_at: "2025-05-09T09:34:45.000Z",
      children: [],
    },
  ],
  success: true,
  status: 200,
};

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

async function fetcher(url) {
  try {
    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({ message: res.statusText }));
      throw new Error(error.message || "Fetch error");
    }
    return res.json();
  } catch (err) {
    console.error("Fetch failed:", err.message);
    console.warn("Using fallback data.");
    return fallbackcategories;
  }
}

export default async function AdminCategoryPage({ searchParams }) {
  const selectedId = await searchParams?.categoryId || "";
  const categories = await fetcher("http://10.10.93.150:3000/api/categories");

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
          {renderCategories(categories.data)}
        </div>
        <div className="flex-1 p-10 pl-5">
          <AdminCategoryDetails data={selectedId} />
        </div>
      </div>
    </div>
  );
}
