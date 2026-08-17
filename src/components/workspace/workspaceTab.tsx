import { Plus } from "lucide-react";
import { requestColors, type RequestType } from "./utils";

export const WorkspaceTab = () => {
  return (
    <div className="col-span-10 row-span-1">
      <div className="flex items-center border-b border-b-zinc-800 gap-2 h-full">
        <TabItem requestType="GET" name="Request" />
        <Plus
          size={24}
          className="text-zinc-400 hover:text-white cursor-pointer"
        />
      </div>
    </div>
  );
};

const TabItem = ({
  requestType,
  name,
}: {
  requestType: RequestType;
  name: string;
}) => {
  return (
    <div
      className="px-4 h-full border-r border-r-zinc-800 flex gap-2 text-white
            justify-center items-center font-semibold text-md"
    >
      <span className={`${requestColors.text[requestType]} `}>
        {requestType}
      </span>
      <span> {name}</span>
    </div>
  );
};
