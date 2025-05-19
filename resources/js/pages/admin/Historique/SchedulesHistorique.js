import { Link } from 'react-router-dom'
import {users} from '../../../Data/Users'
import SearchBar from '../../../Components/Common/SearchBar'
import { useState } from 'react'
import { LayoutGrid, List } from 'lucide-react'

export default function SchedulesHistorique () { 
    const [search, setSearch] = useState('')
    const [viewMode, setViewMode] = useState('grid')
    const handleSearch = (value) => setSearch(value)
    const teachers = users.filter(user => user.role === 'teacher')
    const schedules = teachers.filter(teacher => teacher.fullName.toLowerCase().startsWith(search.toLowerCase()))



    const toggleViewMode = () => {
        setViewMode(prev => prev === 'grid' ? 'list' : 'grid')
    }

    return (
        <div className='max-w-6xl mx-auto'>
            <div className='flex items-center justify-between px-3 py-2 mb-4'>
                <h1 className='text-xl text-gray-700 dark:text-gray-50 font-bold'>Schedules Archive</h1>
                <div className='flex items-center gap-4'>
                    <button
                        onClick={toggleViewMode}
                        className='p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 
                            hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors'
                        title={viewMode === 'grid' ? 'Switch to List View' : 'Switch to Grid View'}
                    >
                        {viewMode === 'grid' ? <List size={20} /> : <LayoutGrid size={20} />}
                    </button>
                    <SearchBar searchTerm={search} handleSearch={handleSearch} />
                </div>
            </div>

            <div className={viewMode === 'grid' ? 'grid grid-cols-3 md:grid-cols-5 gap-4' : 'space-y-2'}>
                {schedules.map(schedule => (
                    <div
                        key={schedule.matricule}
                        className='group flex group items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 
                            border border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-500 
                            dark:hover:border-purple-500 transition-all duration-200'
                    >
                        <Link
                            to={`/historique/schedulesHistorique/${schedule.matricule}`}
                            className='flex-1 text-gray-700 dark:text-gray-50 group-hover:text-purple-600 
                                dark:group-hover:text-purple-400 transition-colors'
                        >
                            <span className="font-medium">{schedule?.fullName}</span>
                            
                        </Link>
                        <span className='text-gray-400 text-xs dark:text-gray-300'>2 versions</span>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}