import React, { useCallback } from "react";

import History from "./History";
import CounterApp from "../apps/CounterApp";

const Counter = () => {
  const [history, setHistory] = React.useState([]);


  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 items-center justify-center min-h-[80vh] bg-gray-50 transition-colors duration-500 font-sans px-4 py-8">
      <CounterApp setHistory={setHistory} />
      <div className="hidden lg:flex h-100 w-0.5 bg-gray-900 rounded-full shadow-lg" />
      <div className="flex flex-col w-80 sm:w-100">
        <h2 className="text-lg font-bold text-gray-900 text-center">
          History
        </h2>
        {history.length !== 0 ? (
          <History history={history} setHistory={setHistory} />
        ) : (
          <p className="mt-5 w-full max-w-lg bg-white rounded-xl shadow-lg border-2 border-gray-900 p-4 font-sans flex items-center justify-center text-lg text-gray-700 font-semibold h-100 ">
            No history yet!
          </p>
        )}
      </div>
    </div>
  );
};

export default Counter;
