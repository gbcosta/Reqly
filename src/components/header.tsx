import { Rocket, Search } from "lucide-react";

export const Header = () => {
  return (
    <div className="grid grid-cols-12 p-3">
      <div className="flex col-span-4 gap-2 items-center min-w-300">
        <div className="bg-white rounded-full p-2">
          <Rocket size={24} color="red" />
        </div>
        <h1 className="text-white text-lg font-semibold">Reqly</h1>
      </div>
      <button
        className="flex items-center text-white gap-4 px-2 py-1 rounded-sm
                bg-zinc-800 cursor-pointer w-full col-span-4"
      >
        <Search size={18} color="white" />
        <span>Search...</span>
      </button>
    </div>
  );
};
