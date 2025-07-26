import React, { useCallback } from "react";

import History from "./History";
import CounterApp from "../apps/CounterApp";

const Counter = () => {
  const [history, setHistory] = React.useState([]);


  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 items-center justify-center min-h-[80vh] bg-gray-50 transition-colors duration-500 font-sans px-4 py-8">
      <CounterApp setHistory={setHistory} />
      <div className="hidden lg:flex h-100 w-0.5 bg-gray-900 rounded-full shadow-lg" />
      <div className="flex flex-col w-full items-center bg-white max-w-md rounded-xl shadow-lg border-2 border-gray-900 font-sans h-[400px] px-0 relative justify-start" >
        <h2 className="w-full m-0 p-4 text-lg font-bold rounded-t-xl shadow-lg border-yellow-500 border-2 bg-gray-900 text-yellow-500 text-center">
          History
        </h2>
        <div className=" flex flex-col items-center overflow-auto scroll-auto">
          {history.length !== 0 ? (
            <History history={history} setHistory={setHistory} />
          ) : (
            <p className="mt-5">
              No history yet!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Counter;
