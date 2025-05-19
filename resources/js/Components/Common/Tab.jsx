export const Tab = ({section,setSection,activeSection}) => {
    const activeStyle = "font-semibold text-indigo-700  relative before:content-[''] before:block before:-translate-x-1/2 before:absolute before:left-1/2 before:bottom-0 before:w-2/4 before:h-1 before:rounded-full  before:bg-indigo-500";
    const desactiveStyle = ' text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200';
    const getTheStyle = (s) => s === activeSection ? activeStyle : desactiveStyle
     
    return (
        <button
            onClick={() => setSection(section)}
            className={`px-4 py-2 text-sm ${getTheStyle(section)}`}
        >
            {section}
        </button>
    )
      
}

export const TabContainer = ({children}) => {
    return (
        <div className="flex flex-1 items-center gap-2 mb-3 border-b border-gray-200 dark:border-gray-700">
            {children}
        </div>
    )
}
