import { Link, useParams } from 'react-router-dom'
import {users,rooms,groups} from '../../../../../Data/Users'
import SearchBar from '../../../../../Components/Common/SearchBar'
import { useState } from 'react'
import { Download, LayoutGrid, List, Pen, Trash2, X } from 'lucide-react'

const dataSet = {
    'Teachers' : {
        data : users.filter(user => user.role === 'teacher'),
        path : 'teacher',
        name: 'fullName',
        primaryKey : 'matricule'
    },
    'Groups' : {
        data : groups,
        path : 'group',
        name: 'libel',
        primaryKey : 'idGroup'
    },
    'Rooms' : {
        data : rooms,
        path : 'room',
        name: 'roomName',
        primaryKey : 'idRoom'
    },
}

export default function SchedulesList () { 
    const {entityType} = useParams()

    const {data,primaryKey,path,name} = dataSet[entityType]
    const [search,setSearch] = useState('')
  
  
    const [isAllSelected,setIsAllSelected] = useState(false)
    const [viewMode, setViewMode] = useState('grid')
    const [selectedSchedules,setSelectedSchudeles] = useState([])
    
   
    const schedules = data.filter(d => d[name].toLowerCase().startsWith(search.toLowerCase()))
    


    const handleDelete = (matricule) => {
        console.log('Delete schedule for matricule:', matricule)
    }
    
    const handleSearch = (value) => setSearch(value)
    const toggleViewMode = () => setViewMode(prev => prev === 'grid' ? 'list' : 'grid')
    
    const handleSelect = (item) => {
         const isItemSelected = selectedSchedules.find(el => el === item)
         if (isItemSelected) {
            removeSelected(item)
            return false;
         }
         const newSelectedSchedules = [...selectedSchedules , item]
         setSelectedSchudeles(newSelectedSchedules)
         setIsAllSelected(newSelectedSchedules.length === schedules.length)
    }
    const removeSelected = (item) => {
        const newSelectedItems = selectedSchedules.filter(el => el !== item)
        setSelectedSchudeles(newSelectedItems)
        setIsAllSelected(false)
    }
    const handleRemoveAll = () => setSelectedSchudeles([])

    const handleSelectAll = () => {
        setSelectedSchudeles(schedules.map(schedule => schedule.fullName))
        setIsAllSelected(true)
    }
    

    return (
        <div className='max-w-6xl mx-auto space-y-4 pb-6'>
            <div className='flex items-center justify-between  py-2 mb-4'>
                <h1 className='text-xl flex-1 text-gray-700 dark:text-gray-50 font-bold'> {entityType} Schedules</h1>
            </div>
            <div className='flex items-center gap-2'>
                <div classname="flex-1">
                <SearchBar searchTerm={search} handleSearch={handleSearch} />
                </div>
                
                
                {
                    schedules.length > 0 &&
                    <div className='flex items-center gap-4'>
                        <button
                            onClick={selectedSchedules.length !== 0 && !isAllSelected  ? '' : ''}
                            className='px-2 py-1.5 rounded-lg bg-red-500 dark:bg-red-700 text-white 
                                hover:bg-red-600 dark:hover:bg-red-800 transition-colors flex items-center gap-2' 
                        >
                            <Trash2 size={20} />
                            Clear {selectedSchedules.length !== 0 && !isAllSelected  ? 'Selected ' : 'All'}
                        </button>
                        <button
                            onClick={selectedSchedules.length !== 0 && !isAllSelected  ? '' : ''}
                            className='px-2 py-1.5 rounded-lg bg-blue-500 dark:bg-blue-700 text-white 
                                hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors flex items-center gap-2' 
                        >
                            <Download size={20} />
                            Export {selectedSchedules.length !== 0 && !isAllSelected  ? 'Selected ' : 'All'}
                        </button>
                        {
                            !isAllSelected &&
                            <button
                                onClick={handleSelectAll}
                                className='px-2 py-1.5 rounded-md bg-purple-500 dark:bg-purple-700 text-white  
                                    hover:bg-purple-600 dark:hover:bg-purple-800 transition-colors' 
                            >
                                Select All
                            </button>
                        }
                    </div>

                }
      
                 <button
                    onClick={toggleViewMode}
                    className='p-2 rounded-md bg-gray-500 dark:bg-gray-700 text-white 
                        hover:bg-gray-600 dark:hover:bg-gray-800 transition-colors'
                    title={viewMode === 'grid' ? 'Switch to List View' : 'Switch to Grid View'}
                >
                    {viewMode === 'grid' ? <List size={20} /> : <LayoutGrid size={20} />}
                </button>
                
            </div>
            <div>
                <h1 className='text-xl font-semibold'>Schedule List </h1>
                <div className='flex gap-3 mt-3'>
                        {
                                schedules.length > 0 ? 
                                <div className={viewMode === 'grid' ? 'grid grid-cols-3 md:grid-cols-4 gap-2 w-full h-fit' : 'space-y-2 w-full h-fit'}>
                                    {schedules.map(schedule => (
                                        <div
                                            key={schedule[primaryKey]}
                                        
                                            className={`flex flex-col justify-between gap-3 px-3 py-2 border rounded-lg transition-all max-h-24 duration-200
                                                ${
                                                    selectedSchedules.includes(schedule[name]) ? 
                                                    ' bg-indigo-50 dark:bg-indigo-950/50 border-indigo-700  text-indigo-700 dark:text-white '
                                                    : 'bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-50'
                                                }
                                                
                                                
                                                `}
                                        >
                                        <div className='flex items-center w-full gap-1.5'>
                                        <input type='checkbox' checked={selectedSchedules.includes(schedule[name])} className=' accent-indigo-700 rounded-lg cursor-pointer size-4' onChange={()=>handleSelect(schedule[name])}/>
                                        <span className="font-medium flex-1 w-full block">{schedule[name]} </span>
           
                                        </div>
                                        
                                            
                                            <div className=' flex items-center justify-end gap-2'>
                                            <Link
                                                to={`/schoolResources/schedules/${path}/${schedule[primaryKey]}`}
                                                className="p-2 rounded-full bg-purple-500 dark:bg-purple-700 
                                                    text-white
                                                    hover:bg-purple-600 dark:hover:bg-purple-800"
                                            >
                                                <Pen size={18} />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(schedule[primaryKey])}
                                                className="p-2 rounded-full bg-blue-500 dark:bg-blue-600 
                                                    text-white 
                                                    hover:bg-blue-600 dark:hover:bg-blue-800"
                                            >
                                                <Download size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(schedule[primaryKey])}
                                                className="p-2 rounded-full bg-red-500 dark:bg-red-700
                                                    text-white
                                                    hover:bg-red-600 dark:hover:bg-red-800"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                            </div>
                                        
                                        </div>
                                    ))}
                                </div>
                            : 
                                <p className="px-4 py-8 text-center text-gray-500">
                                    No results found
                                </p>
                        }

                        {
                            selectedSchedules.length > 0 &&
                            <div className='px-4 py-3 w-full rounded-lg border max-w-[260px] h-fit border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800'>
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-lg text-gray-700 dark:text-gray-50 font-bold mb-3'>Selected Schedules</h1> 
                                    {/* <button
                                        onClick={handleRemoveAll}
                                        className="px-2 py-1 rounded-lg bg-red-100 dark:bg-red-900/50 
                                                        text-red-600 dark:text-red-400 
                                                        hover:bg-red-200 dark:hover:bg-red-900"
                                    >
                                        
                                    </button> */}
                                </div>
                            
                                <div className='space-y-1'>
                                    {
                                        selectedSchedules.map(schedule =>
                                        <span className='p-2 rounded-md flex items-center justify-between gap-3 min-w-20 text-indigo-700 dark:text-purple-50 bg-indigo-50 dark:bg-purple-950/50 '>
                                                <span className=' font-medium'>{schedule}</span>
                                                <button
                                                    onClick={() => removeSelected(schedule)}
                                                    className=" text-red-500 dark:text-red-700 
                                                        
                                                        hover:text-red-600 dark:hover:text-red-800"
                                                >
                                                    <X size={18} strokeWidth={4} />
                                                </button>
                                        </span>
                                        )
                                    }
                                </div>
                                <button onClick={handleRemoveAll} className='w-full py-1 flex justify-end underline text-gray-400 hover:text-gray-700 dark:text-gray-50 dark:hover:text-white'>
                                    Unselect All
                                </button>
                            </div>
                        }
                </div>
            </div>
            

            
           
            
        
         
        </div>
    )
}