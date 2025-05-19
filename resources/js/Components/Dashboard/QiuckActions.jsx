// import { Link } from "react-router-dom"
import {  PencilRuler, Presentation, School, User, Wand } from "lucide-react"
import { useRef, useState } from "react"
import useClickOutSide from "../../utils/Hooks/useClickOutSide"
import { Link } from "@inertiajs/react";
import { route } from 'ziggy-js';


export default function QuickActions(){
  
  const iconSize  = 16
  const actionRef = useRef(null)
  const quickLinks = [
    {
      link :'/humanResources/addUser/',
      title : 'Ajouter un utilisateur',
      icon : <User size={iconSize} className="dark:text-purple-500 text-purple-700"/>,
    
    },
    {
      link :'/schoolResources/addFiliere',
      title : 'Ajouter une filiere',
      icon : <PencilRuler size={iconSize} className="dark:text-purple-500 text-purple-700"/>,
    
    },
    {
      link :'/schoolResources/addGroup',
      title : 'Ajouter un group',
      icon : <Presentation size={iconSize} className="dark:text-purple-500 text-purple-700"/>,
 
    },
    
    {
      link :'/schoolResources/addRoom',
      title : 'Ajouter une Salle',
      icon : <School size={iconSize} className="dark:text-purple-500 text-purple-700" />,
     
    }
  ]

    const [activeMenu,setActiveMenu] = useState(false)
    const handleClick = ()=>{
      setActiveMenu(!activeMenu)
    }

    useClickOutSide(()=>setActiveMenu(false) ,actionRef)


    
    


    return (
        <>
        <div className='flex gap-2 items-center justify-end'>
        
          <Link href={route('logout')} method="POST" as="button" >LogOut</Link>
          <div className="relative max-w-60 min-w-44 w-full" ref={actionRef}>
              <button 
                className={`bg-purple-300/50 px-3 py-2 text-purple-700 group outline-none  hover:bg-purple-200 text-sm flex items-center justify-between gap-2  font-medium w-full ${activeMenu ? 'rounded-t-lg':'rounded-lg'} dark:bg-purple-950/50 dark:hover:bg-purple-900 dark:text-gray-50`} 
                onClick={handleClick}
                
              >
              <div className="flex items-center gap-2">
                <Wand size={18} className="dark:text-purple-500 " />
                <span > Actions rapides </span>
              </div>
              
              
              </button>
              {activeMenu && (
              <div className="absolute  z-50 min-w-full  rounded-b-lg dark:bg-purple-950 bg-purple-100 shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="p-2 dark:text-purple-50 text-purple-700">
                    {
                      quickLinks.map(quickLink=>
                        {/* <Link 
                          to={quickLink.link} 
                          className="dark:hover:bg-purple-900 hover:bg-purple-200 rounded-lg flex gap-4 items-center justify-between text-sm p-2 "
                        >
                           <span className="flex items-center gap-2">
                           {quickLink.icon}
                           {quickLink.title}

                           </span>
                           
                         
                        </Link> */}
                      )
                    }
              
                  
                </div>
              </div>
            )}

          </div>
       

          </div>
          
        </>
    )
}

