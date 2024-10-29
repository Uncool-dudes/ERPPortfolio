'use client'

import { useState, useEffect } from 'react'

export default function Component() {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getButtonClasses = () => {
    let classes = "bg-white text-black hover:bg-gray-200 transition-colors duration-200 font-semibold rounded-full"
    if (windowWidth < 640) {
      classes += " px-4 py-2 text-sm"
    } else if (windowWidth < 1024) {
      classes += " px-6 py-3 text-base"
    } else {
      classes += " px-8 py-4 text-lg"
    }
    return classes
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-20 h-20 md:w-32 md:h-32 bg-white/10 rounded-full flex items-center justify-center">
          <span className="text-xl md:text-2xl font-bold">Scam Logo</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center md:items-end p-4 md:p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8 text-center md:text-right">Portfolio 0_0</h1>
        <div className="w-full max-w-xs md:max-w-md flex justify-center md:justify-end">
          <button 
            className={getButtonClasses()}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  )
}
