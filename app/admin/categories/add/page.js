"use client";

import { categoryPost } from "../../_component/data";
import { useState } from "react";
import AdminPageCardHeader from "../../_component/adminglobal/pagecardheader";
import { AdminFormInput } from "../../_component/adminglobal/forms/inputs";
import { AdminFormTextArea } from "../../_component/adminglobal/forms/inputs";
import { AdminFormButtonsWithCancel } from "../../_component/adminglobal/forms/buttons";
import { Add } from "@mui/icons-material";

export default function AdminAddCategory() {
  const [error, setError] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    if (!formData.get("name")) {
      setError("name field required");
      return;
    }
    const slug = formData.get("name")?.toLowerCase().replace(/\s+/g, "-");

    if (!formData.get("description")) {
      setError("Description is required");
      return;
    }
    setError(null);

    const payload = {
      name: formData.get("name"),
      slug: slug,
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
      <AdminPageCardHeader title="Add New Category" button={false} />

      <div>
        {error ? (
          <div className="p-5">
            <div className="border border-red-500 bg-red-100 text-red-400 dark:border-red-400/20 dark:bg-red-500/10 dark:text-red-500 p-5 rounded-md">
              {error}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="text-center">
          <div className="p-5 w-full mt-5">
            <div className="relative border border-gray-300 dark:border-gray-800 p-5  rounded-lg">
              <p className="absolute -top-4 left-6 bg-white dark:bg-gray-900 px-3 text-base font-semibold">
                Category Details
              </p>
              <div className="grid grid-cols-2 gap-5 w-full">
                <AdminFormInput label="**Category Name" name="name" />
                <AdminFormInput
                  label="Parent Category"
                  name="parent_category_id"
                />
              </div>

              <AdminFormTextArea
                label="**Description"
                name="description"
                className="min-h-40"
              />
            </div>

            <div className="relative border border-gray-300 dark:border-gray-800 p-5  rounded-lg mt-10">
              <p className="absolute -top-4 left-6 bg-white dark:bg-gray-900 px-3 text-base font-semibold">
                SEO Metadata
              </p>
              <AdminFormInput label="Meta Title" name="meta_title" />
              <AdminFormTextArea
                label="Meta Description"
                name="meta_description"
                className="min-h-40"
              />
            </div>
          </div>

          <AdminFormButtonsWithCancel Icon={Add} title="Add Category" />
        </div>
      </form>
    </div>
  );
}
