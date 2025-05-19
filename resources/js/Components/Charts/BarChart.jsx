import React, { useState, useRef, useEffect } from "react";
import { XOctagon } from "lucide-react";

const BarChart = ({ data, withModal = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const total = data.reduce((acc, val) => acc + val.value, 0);

  const handleButtonClick = (item) => {
    setCurrentItem(item);
    setIsOpen(true);
  };

  return (
    <>
      <div className="flex gap-4 mx-auto w-full h-64 rounded-xl p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-sm">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col space-y-3 justify-end items-center text-center h-full w-full cursor-pointer group"
          >
            <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              {item.value}
            </div>
            <div 
              className="bg-purple-300 dark:bg-purple-600 rounded-lg hover:bg-purple-400 dark:hover:bg-purple-500 
                transition-all duration-300 w-full group-hover:shadow-md"
              style={{ height: `${item.value * 100 / total}%` }}
              onClick={() => withModal ? handleButtonClick(item) : null}
            />
            <div className="h-12 flex justify-center items-center">
              <span className="text-center font-medium text-sm text-gray-600 dark:text-gray-300 hidden md:block">
                {item.label}
              </span>
              <span className="text-center font-medium text-sm text-gray-600 dark:text-gray-300 block md:hidden">
                {item?.shortCut}
              </span>
            </div>
          </div>
        ))}
      </div>
      {isOpen && <SubChart currentItem={currentItem} setIsOpen={setIsOpen} />}
    </>
  );
};

export default BarChart;

const SubChart = ({ currentItem, setIsOpen }) => {
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm z-50">
      <div
        ref={popoverRef}
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg 
          max-w-2xl w-full mx-4 divide-y divide-gray-200 dark:divide-gray-700"
      >
        <div className="flex justify-between items-center py-4 px-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Today's Absence of {currentItem?.label}
          </h3>
          <button
            className="text-gray-400 hover:text-red-500 focus:outline-none transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            <XOctagon size={24} />
          </button>
        </div>

        <div className="flex gap-4 mx-auto h-72 p-6">
          {currentItem?.groups.map((group, index) => (
            <div 
              key={index} 
              className="flex flex-col justify-end items-center text-center h-full w-full group"
            >
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
                {group.value}
              </div>
              <div 
                className="w-full bg-purple-300 dark:bg-purple-600 rounded-lg hover:bg-purple-400 
                  dark:hover:bg-purple-500 transition-all duration-300 group-hover:shadow-md" 
                style={{ height: `${group.value}%` }}
              />
              <div className="mt-3 font-medium text-sm text-gray-600 dark:text-gray-300">
                {group.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
