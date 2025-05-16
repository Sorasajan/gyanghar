"use client";
import { Add } from "@mui/icons-material";
import AdminHeader from "../../_component/adminglobal/header";
import AdminCancel from "../../_component/cancel";
import { categoryPost } from "../../_component/data";

export default function AdminAddCategory() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const payload = {
      name: formData.get("name"),
      slug: formData.get("slug"),
      description: formData.get("description"),
      parent_category_id: formData.get("parent_category_id"),
      meta_title: formData.get("meta_title"),
      meta_description: formData.get("meta_description"),
    };

    console.log(payload);
    categoryPost(payload);
  };
  return (
    <div>
      <AdminHeader title="Add Category" />
      <form onSubmit={handleFormSubmit}>
        <div className="py-10 text-center">
          <div className="grid justify-center grid-cols-2 p-5 gap-5">
            <div>
              <section className="flex flex-col gap-2 items-start">
                <label>Category Name </label>
                <input
                  name="name"
                  className="p-2 border border-black w-full dark:border-gray-600 rounded bg-slate-200  dark:bg-gray-900"
                />
              </section>
              <section className="flex flex-col mt-5 gap-2 items-start">
                <label>Slug </label>
                <input
                  name="slug"
                  className="p-2 border border-black w-full dark:border-gray-600 rounded bg-slate-200  dark:bg-gray-900"
                />
              </section>
              <section className="flex flex-col gap-2 mt-5 dark:border-gray-600 items-start">
                <label>Description</label>
                <textarea
                  name="description"
                  className="p-2 border border-black w-full dark:border-gray-600 min-h-20 rounded bg-slate-200 dark:bg-gray-900"
                />
              </section>
              <section className="flex flex-col gap-2 mt-5 dark:border-gray-600 items-start">
                <label>Parent Category </label>
                <input
                  name="parent_category_id"
                  className="p-2 border border-black w-full dark:border-gray-600 rounded bg-slate-200 dark:bg-gray-900"
                />
              </section>
            </div>
            <div>
              <section className="flex flex-col gap-2 dark:border-gray-600 items-start">
                <label>Meta Title</label>
                <input
                  name="meta_title"
                  className="p-2 border border-black w-full dark:border-gray-600 rounded bg-slate-200 dark:bg-gray-900"
                />
              </section>
              <section className="flex flex-col gap-2 mt-5 dark:border-gray-600 items-start">
                <label>Meta Description </label>
                <textarea
                  name="meta_description"
                  className="p-2 border border-black min-h-40 w-full dark:border-gray-600 rounded bg-slate-200 dark:bg-gray-900"
                />
              </section>
            </div>
            <section className="mt-10 col-span-2 flex gap-5 justify-center">
              <button
                type="submit"
                className="bg-blue-900 text-white px-5 py-2 hover:rounded-lg hover:bg-blue-600 transition-all duration-500 cursor-pointer hover:scale-95"
              >
                <Add /> Add Category
              </button>
              <AdminCancel />
            </section>
          </div>
        </div>
      </form>
    </div>
  );
}
