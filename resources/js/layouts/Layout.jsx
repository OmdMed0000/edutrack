import { useState } from "react";
import SideBar from "../Components/Common/SideBar";

function Layout({children}) {
 

  const [theme,setTheme] = useState(localStorage.getItem('theme') || 'light');
  localStorage.setItem('theme',theme)
 
  return (
    <div className={`App ${theme } font-mainFont`} >
      <div className=" min-h-screen bg-gray-100 bg-opacity-50 dark:bg-gray-900 text-gray-700 dark:text-gray-50 font-mainFont">
        {/* Main layout container */}
        {

          <div className="flex h-full ">
            {/* Sidebar */}
            <SideBar 
              darkMode={theme} 
              setDarkMode={setTheme} 
              
            />
            <div className={` w-full overflow-x-hidden duration-500 peer-hover:lg:ml-56 ml-16  mx-auto `}>
                {children}
            </div>
        </div>
        }
      </div>
    </div>
  );
}

export default Layout;
