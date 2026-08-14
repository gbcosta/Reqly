import { Plus } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="col-span-2 border-r border-zinc-800">
      <div className="flex w-full border-b border-b-zinc-800">
        <input
          placeholder="Filter"
          className="w-full outline-none text-zinc-100 px-2 py-2"
        />
      </div>
      <div className="flex w-full border-b border-b-zinc-800 p-2 gap-2">
        <div className="flex gap-2 text-zinc-400 hover:text-zinc-200 cursor-pointer">
          <Plus />
          <span>New Collection</span>
        </div>
      </div>
    </div>
  );
};
