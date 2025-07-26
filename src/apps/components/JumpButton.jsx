import { useCallback } from 'react'

const JumpButton = (props) => {
  let performJump = useCallback((type) => {
  let delta = props.jump;
  if (type === "-") delta *= -1;

  props.setHistory((prevHistory) => [
    ...prevHistory,
    `${props.count} ${type} ${props.jump} = ${props.count + delta}`,
  ]);

  props.setCount((prevCount) => prevCount + delta);
}, [props.count]);


  return (
    <button
      onClick={() => performJump(props.type)}
      className="mx-2 my-4 w-10 h-10  rounded-full bg-white shadow-xl  font-bold flex items-center justify-center text-gray-900 border-2 border-gray-900 cursor-pointer transition-all duration-150 active:scale-90 active:bg-gray-300 hover:bg-gray-900 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow
    ">{props.type}{props.jump}</button>
  )
}

export default JumpButton
