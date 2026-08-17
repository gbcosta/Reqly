export const ResponseTab = () => {
  return (
    <div className="col-span-10 row-span-1">
      <div className="flex items-center border-b border-b-zinc-800 h-full">
        {["Preview", "Headers", "Cookies"].map((e) => {
          return <TabItem name={e} key={e} />;
        })}
      </div>
    </div>
  );
};

const TabItem = ({ name }: { name: string }) => {
  return (
    <div
      className="px-4 h-full border-r border-r-zinc-800 flex gap-2 text-white
            justify-center items-center font-semibold text-md cursor-pointer hover:bg-zinc-800"
    >
      <span> {name}</span>
    </div>
  );
};
