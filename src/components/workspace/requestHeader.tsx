import { type RequestType } from "./utils";

export const RequestHeader = () => {
  return (
    <div className="col-span-10 row-span-1">
      <div className="flex h-full items-center border-b border-b-zinc-800 px-2">
        <RequestButton requestType="GET" />
        <input />
        <button></button>
      </div>
    </div>
  );
};

const RequestButton = ({ requestType }: { requestType: RequestType }) => {
  return (
    <button
      className={`rounded-md bg-white text-black font-bold min-w-24 text-md p-1.5`}
    >
      {requestType}
    </button>
  );
};
//const SendButton = () => {};
