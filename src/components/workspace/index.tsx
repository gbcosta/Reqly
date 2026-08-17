import { RequestHeader } from "./requestHeader";
import { RequestTab } from "./requestTab";
import { Sidebar } from "./sidebar";
import { WorkspaceTab } from "./workspaceTab";

export const Workspace = () => {
  return (
    <div
      className="grid grid-cols-12 h-full row-span-11 col-span-12
            grid-rows-[repeat(1,48px)_repeat(11,1fr)]"
    >
      <Sidebar />
      <WorkspaceTab />
      <div
        className="grid grid-cols-5 col-span-5 row-span-11 border-r border-r-zinc-800
                grid-rows-[repeat(2,48px)_repeat(8,1fr)]"
      >
        <RequestHeader />
        <RequestTab />
      </div>
    </div>
  );
};
