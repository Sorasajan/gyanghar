"use client";

import { categoryPost } from "../../_component/data";
import { useEffect, useState } from "react";
import AdminPageCardHeader from "../../_component/adminglobal/pagecardheader";
import {
  AdminFormDropdown,
  AdminFormInput,
} from "../../_component/adminglobal/forms/inputs";
import { AdminFormTextArea } from "../../_component/adminglobal/forms/inputs";
import { AdminFormButtonsWithCancel } from "../../_component/adminglobal/forms/buttons";
import { Add } from "@mui/icons-material";
import AdminNotification from "../../_component/adminglobal/fullpageMessage";
import Loading from "@/app/_globalComponent/loading";

export default function AdminAddCategory() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [isSlugEdited, setIsSlugEdited] = useState(false);
  const [error, setError] = useState("");
  const [parentCategory, setParentCategory] = useState();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    if (!formData.get("name")) {
      setError("name field required");
      return;
    }

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

    try {
      const response = await categoryPost(payload); // ✅ response is a JS object, not a fetch Response

      if (response.status === 500 || response.error) {
        setError(response.error || "Error adding category");
        return;
      }

      setError(null);
      console.log("see here", response);

      setMessage("Category added successfully!");
    } catch (err) {
      setError("Unexpected error occurred.");
      console.error(err);
    }
  };

  useEffect(() => {
    if (!isSlugEdited) {
      const generatedSlug = name.toLowerCase().replace(/\s+/g, "-");
      setSlug(generatedSlug);
    }
  }, [name, isSlugEdited]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        console.log(data);

        setParentCategory(data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    fetchCategory();
  }, []);
  return (
    <div>
      {parentCategory ? (
        <div>
          {message ? (
            <AdminNotification message={message} setMessage={setMessage} />
          ) : (
            ""
          )}
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
                  <div className="grid grid-cols-3 gap-5 w-full">
                    <AdminFormInput
                      label="**Category Name"
                      name="name"
                      onChange={(e) => {
                        setName(e.target.value);
                        setIsSlugEdited(false);
                      }}
                    />
                    <AdminFormInput
                      label="slug"
                      name="slug"
                      value={slug}
                      onChange={(e) => {
                        setSlug(e.target.value);
                        setIsSlugEdited(true);
                      }}
                    />
                    <AdminFormDropdown
                      label="Parent Category"
                      name="parent_category_id"
                      optionName="name"
                      options={parentCategory}
                      optionId="category_id"
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
          </form>{" "}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
