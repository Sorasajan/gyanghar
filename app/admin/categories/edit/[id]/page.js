import AdminPageCardHeader from "@/app/admin/_component/adminglobal/pagecardheader";
import { Edit } from "@mui/icons-material";
import { AdminFormButtonsWithCancel } from "@/app/admin/_component/adminglobal/forms/buttons";
import {
  AdminFormInput,
  AdminFormTextArea,
} from "@/app/admin/_component/adminglobal/forms/inputs";

export default function AdminEditCategories() {
  return (
    <div>
      <AdminPageCardHeader title="Edit Category" button={false} />
      <div className="text-center">
        <div className="text-center">
          <div className="grid justify-center grid-cols-2 p-5 gap-5">
            <div>
              <AdminFormInput label="Category Name" name="name" />
              <AdminFormTextArea
                label="Description"
                name="description"
                className="min-h-40"
              />

              <AdminFormInput
                label="Parent Category"
                name="parent_category_id"
              />
            </div>
            <div>
              <AdminFormInput label="Meta Title" name="meta_title" />
              <AdminFormTextArea
                label="Meta Description"
                name="meta_description"
                className="min-h-40"
              />
            </div>
          </div>

          <AdminFormButtonsWithCancel Icon={Edit} title="Add Category" />
        </div>
      </div>
    </div>
  );
}
