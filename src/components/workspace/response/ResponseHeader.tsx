export const ResponseHeader = () => {
  return (
    <div className="col-span-12 row-span-1">
      <div className="flex gap-4 h-full items-center border-b border-b-zinc-800 px-2">
        <ResponseCode code="400" />
        <Time total={300} />
        <Size total={300} />
      </div>
    </div>
  );
};

const ResponseCode = ({ code }: { code: string }) => {
  return <span className="bg-zinc-800 p-2 text-zinc-200">{code}</span>;
};

const Time = ({ total }: { total: number }) => {
  return <span className="bg-zinc-800 p-2 text-zinc-200">{total} ms</span>;
};

const Size = ({ total }: { total: number }) => {
  return <span className="bg-zinc-800 p-2 text-zinc-200">{total} ms</span>;
};
