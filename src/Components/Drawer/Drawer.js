import React, { useState } from 'react'

const Drawer = () => {

  let [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (

    <section>
      <div className="relative">
        {/* Drawer button */}
        {/* <button
        className="fixed top-0 left-0 p-4 bg-gray-800 text-white"
        onClick={toggleDrawer}
        >
          {isOpen ? 'Close Drawer' : 'Open Drawer'}
        </button> */}

        {/* Drawer */}
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white shadow z-50 transform ${isOpen ? '' : 'translate-x-full'
            } transition duration-300 ease-in-out`}
        >
          {/* Close button */}
          <button
            className="absolute top-0 right-0 p-4 focus:outline-none"
            onClick={toggleDrawer}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          {/* Drawer content */}
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Drawer Content</h2>
            <p>This is the content of the drawer. You can put any content here.</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Drawer