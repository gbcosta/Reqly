import { RequestHeader } from "./requestHeader";
import { Sidebar } from "./sidebar";
import { WorkspaceTab } from "./workspaceTab";

export const Workspace = () => {
  return (
    <div
      className="grid grid-cols-12  h-full row-span-11 col-span-12
            grid-rows-[repeat(2,48px)_repeat(10,1fr)]"
    >
      <Sidebar />
      <WorkspaceTab />
      <RequestHeader />
    </div>
  );
};
