import { Link, Outlet, useLocation } from "react-router-dom";
import { successNotify } from "../../../Components/Common/Toast";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

const links = [
    {
        name: "Home",
        link: "/humanResources"
    },
    {
        name: "Absence Managers",
        link: "/humanResources/absenceManagers"
    },
    {
        name: "Teachers",
        link: "/humanResources/teachers"
    }
]

const addUserLink = {
    "/humanResources/absenceManagers" : "absenceManger",
    "/humanResources/teachers" : "teacher"
}



export default function HumanRessources(){
   const location = useLocation();
   const path = location.pathname;
   useEffect(()=>{
    const message = localStorage.getItem('toastMessage')
    if(message){
      successNotify(message)
      setTimeout(() => {
        localStorage.removeItem('toastMessage')
      }, 3000);
      
    }
  })
   const Links = () => {
    return (
            <div className="flex items-center gap-3">
                <ToastContainer pauseOnHover={false} closeButton={false} />

                {links.map((link) => (
                    <Link 
                        to={link.link}
                        key={link.name}
                        className={`px-3 py-1.5 rounded-lg font-medium text-sm
                        ${path === link.link ? 
                        ' bg-purple-300 text-purple-700 dark:bg-purple-800/50 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800/70 ' 
                        : 
                        ' text-gray-700 dark:text-gray-300 hover:bg-purple-200 dark:hover:bg-gray-800/50'
                        }
                       
                        `}
                    >
                    {link.name}

                    </Link>
                ))}
            </div>
        )
    }
    return(
        <div className="min-h-screen ">
            <nav className="w-full border-b border-gray-200 dark:border-gray-800 
                bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/50 dark:to-purple-800/50 
                px-6 py-3 flex justify-between items-center shadow-sm">
                <Links/>
                {
                    (path === '/humanResources/absenceManagers' || path === '/humanResources/teachers') && 
                    <Link to={`/humanResources/addUser/${addUserLink[path]}`} className="px-4 py-2 rounded-lg font-medium text-sm
                        bg-purple-600 text-white hover:bg-purple-700
                        dark:bg-purple-500 dark:hover:bg-purple-600
                        transition-colors duration-200">
                        Add New
                    </Link>
                }
                
            </nav>

            <Outlet/>
      </div>
    )
}
