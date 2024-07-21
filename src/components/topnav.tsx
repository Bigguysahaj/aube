export default function TopNav() {
  return (
    <div className="w-lg mx-4 mt-2 flex h-16 flex-row">
      <div className="w-full rounded-lg bg-primary">
        <div className="h-full w-7/12">
          <div className="bg-primar flex h-full items-center justify-center font-mono">
            <h1 className="rounded-lg bg-slate-200 px-2 py-1">
              Symposium / Chapter 1
            </h1>
          </div>
        </div>
      </div>
      {/* <div className="my-2 h-auto w-1.5 rounded-lg bg-black"></div> */}
      {/* Maybe we can use => Feedback = Beta Access */}
      <div className="ml-4 flex h-16 w-36 items-center justify-center rounded-md bg-yellow-200 font-mono">
        Feedback
      </div>
    </div>
  );
}
