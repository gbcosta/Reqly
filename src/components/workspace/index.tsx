import { Sidebar } from "./sidebar";

export const Workspace = () => {
  return (
    <div className="grid grid-cols-12 h-full row-span-11 col-span-12">
      <Sidebar />
    </div>
  );
};
