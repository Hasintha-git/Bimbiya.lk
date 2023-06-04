import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const SearchBox = ({ setShowAnotherComponent }) => {
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  const handleDialogClose = () => {
    setShowAnotherComponent(false);
  }

  useEffect(() => {
    return () => {
      // Function to call when the component is unmounted
      console.log("SearchBox component unmounted");
      // Add your logic here
    };
  }, []);

  return (
    <header className="bg-white  shadow-sm sticky top-0 bg-opacity-70 backdrop-filter backdrop-blur-lg ">
      <div className="w-1">
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={handleDialogClose}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full  justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                    <div className="bg-gray-50 px-4 py-2 sm:flex  sm:px-12 ">
                      <div className="relative w-full">
                        <input
                          type="text"
                          className="w-full pl-12 text-black pr-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none"
                          placeholder="Search..."
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 18l6-6m0 0l-6-6m6 6H4"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>

            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
      </div>
    </header>
  );
};

export default SearchBox;
