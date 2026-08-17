import { Search } from "lucide-react";

export const Header = () => {
  return (
    <div className="grid grid-cols-12 p-3 border-b border-b-zinc-800 col-span-12 row-span-1">
      <div className="flex col-span-4 gap-2 items-center min-w-300">
        <h1 className="text-white text-lg font-bold uppercase">reqly</h1>
      </div>
      <button
        className="flex items-center text-zinc-400 px-2 py-1.5 rounded-sm
                bg-zinc-800 cursor-pointer w-full col-span-4 justify-between"
      >
        <div className="flex items-center gap-3">
          <Search size={18} className="text-zinc-400" />
          <span>Search...</span>
        </div>
        <span className="bg-zinc-950/40 px-1 rounded-sm font-semibold">
          Ctrl+k
        </span>
      </button>
    </div>
  );
};
