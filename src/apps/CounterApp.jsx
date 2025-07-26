import React from 'react'
import JumpButton from './components/JumpButton';

const CounterApp = (props) => {
  const [count, setCount] = React.useState(0);
  return (
    <>
    <div className="flex flex-col items-center justify-center w-full max-w-md bg-white rounded-xl shadow-lg p-4 sm:p-6 border-2 border-gray-900 ">
      <div className="relative flex items-center justify-center w-64 h-64">
        <h1 className="w-48 h-48 rounded-full bg-gray-900 text-yellow-300 flex items-center justify-center text-5xl sm:text-7xl font-extrabold shadow-2xl z-10 border-8 border-gray-900 transition-all duration-500">
          {count}
        </h1>
        <button
          onClick={() => {
            props.setHistory((prevHistory) => [
              ...prevHistory,
              count + " - 1 " + " = " + (count - 1),
            ]);
            setCount((prevCount) => prevCount - 1);
          }}
          className="absolute left-8  bottom-8 sm:left-8 sm:bottom-8  translate-y-1/2 w-24 h-24 rounded-full bg-white shadow-xl text-3xl sm:text-4xl font-bold flex items-center justify-center text-gray-900 border-4 border-gray-900 cursor-pointer transition-all duration-150 active:scale-90 active:bg-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 z-20"
        >
          -
        </button>
        <button
          onClick={() => {
            props.setHistory((prevHistory) => [
              ...prevHistory,
              count + " + 1 " + " = " + (count + 1),
            ]);
            setCount((prevCount) => prevCount + 1);
          }}
          className="absolute right-8  bottom-8 sm:right-8 sm:bottom-8 translate-y-1/2 w-24 h-24 rounded-full bg-white shadow-xl text-3xl sm:text-4xl font-bold flex items-center justify-center text-gray-900 border-4 border-gray-900 cursor-pointer transition-all duration-150 active:scale-90 active:bg-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 z-20"
        >
          +
        </button>
      </div>
      <p className="mt-4 text-base sm:text-lg text-gray-700 font-semibold text-center">
        Click the buttons to change the count!
      </p>
      <div className="flex flex-row flex-wrap items-center justify-center">
        <JumpButton type={"-"} jump={2} count={count} setCount={setCount} setHistory={props.setHistory}/>
        <JumpButton type={"-"} jump={5} count={count} setCount={setCount} setHistory={props.setHistory}/>
        <JumpButton type={"-"} jump={10} count={count} setCount={setCount} setHistory={props.setHistory}/>
        <JumpButton type={"+"} jump={2} count={count} setCount={setCount} setHistory={props.setHistory}/>
        <JumpButton type={"+"} jump={5} count={count} setCount={setCount} setHistory={props.setHistory}/>
        <JumpButton type={"+"} jump={10} count={count} setCount={setCount} setHistory={props.setHistory}/>
    </div>
      <button
        onClick={() => {
          setCount(0);
          props.setHistory([]);
        }}
        className="mt-6 px-6 py-2 sm:px-8 sm:py-3 rounded-full bg-gray-900 text-yellow-300 font-bold text-base sm:text-lg shadow-lg border-2 border-yellow-300 hover:bg-yellow-300 hover:text-gray-900 transition-colors duration-200 active:scale-95 focus:outline-none focus:ring-4 focus:ring-yellow-300 cursor-pointer"
      >
        Reset
      </button>
    </div>
    </>
  )
}

export default CounterApp