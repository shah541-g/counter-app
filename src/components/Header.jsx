import React from 'react'

const Header = () => {
  return (
    <div className="flex items-center justify-center w-full py-10 bg-gray-900 shadow-lg">
      <img src="/favicon.png" width={"85px"} alt="brand-icon" className='rounded-full' />
      <h1 className="text-center text-3xl sm:text-5xl md:text-6xl font-extrabold text-yellow-300 tracking-wide font-sans drop-shadow-lg">
        CounterFlow App - Challenge Accepted
      </h1>
    </div>
  )
}

export default React.memo(Header)