import React from "react";

const History = (props) => {
  const historyList = props.history.map((historyItem, idx) => (
    <li
      key={idx}
      className="flex items-center justify-between px-4 py-2 rounded-full bg-gray-900 text-yellow-300 font-semibold shadow transition mb-2"
    >
      <span>
        {idx + 1}) {historyItem}
      </span>
      <button
        onClick={() => {
          const newHistory = props.history.filter(
            (item) => item !== historyItem
          );
          props.setHistory(newHistory);
        }}
        className="ml-4 px-4 py-1 rounded-full bg-red-600 text-white font-bold shadow border-2 border-red-800 transition-colors duration-150 hover:bg-red-800 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
      >
        Delete
      </button>
    </li>
  ));
  return (
    <>
     
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg border-2 border-gray-900 p-4 font-sans h-100 overflow-auto scroll-auto">
        <ul>{historyList}</ul>
      </div>
    </>
  );
};

export default React.memo(History);
