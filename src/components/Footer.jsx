import React from 'react'

const Footer = () => {
  return (
    <div className="w-full py-6 bg-gray-900 shadow-lg">
      <p className="text-center text-lg sm:text-xl font-semibold text-yellow-300 font-sans">
        © 2025 Code With Niyyah. All rights reserved.
      </p>
    </div>
  )
}

export default React.memo(Footer)