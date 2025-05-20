const AdminFormInput = ({ label, name }) => {
  return (
    <section className="flex flex-col gap-2 items-start">
      <label>{label} </label>
      <input
        name={name}
        className="p-2 mb-5 border border-gray-300 w-full dark:border-gray-800 rounded bg-slate-100  dark:bg-gray-900"
      />
    </section>
  );
};

const AdminFormTextArea = ({ label, name, className }) => {
  return (
    <section className="flex flex-col gap-2 mb-5 items-start">
      <label>{label}</label>
      <textarea
        name={name}
        className={`p-2 border border-gray-300 w-full dark:border-gray-800 rounded bg-slate-100 dark:bg-gray-900 ${className}`}
      />
    </section>
  );
};

export { AdminFormInput, AdminFormTextArea };
