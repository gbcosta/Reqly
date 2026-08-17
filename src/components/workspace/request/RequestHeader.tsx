import { requestColors, type RequestType } from "../utils";

export const RequestHeader = () => {
  return (
    <div className="col-span-12 row-span-1">
      <div className="flex gap-4 h-full items-center border-b border-b-zinc-800 px-2">
        <RequestButton requestType="GET" />
        <input className="h-full w-full outline-none text-zinc-200" />
        <SendButton />
      </div>
    </div>
  );
};

const RequestButton = ({ requestType }: { requestType: RequestType }) => {
  return (
    <button
      className={`${requestColors.bg[requestType]} rounded-md text-white font-bold
                    min-w-24 text-md p-1.5 cursor-pointer`}
    >
      {requestType}
    </button>
  );
};
const SendButton = () => {
  return (
    <button
      className={`rounded-md text-white font-bold min-w-24 text-md p-1.5 bg-rose-700
            cursor-pointer`}
    >
      Send
    </button>
  );
};
