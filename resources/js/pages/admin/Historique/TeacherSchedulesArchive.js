import { users } from "../../../Data/Users"
import { useParams } from "react-router-dom"
import { days,sessions } from "../../../Data/ScheduleData"
import ScheduleContainer from "../../../Components/Schedule/ScheduleContainer"
import { FullSession } from "../../../Components/Schedule/ScheduleComponents"
import { schedulesArchive } from "../../../Data/SchedulesArchive"
import { useState } from "react"
import { ChevronUp, ChevronDown, Calendar } from "lucide-react"
import CustomDatePicker from "../../../Components/form/CustomDatePicker"

export default function TeacherSchedulesArchive () { 
    const [selectedVersions,setSelectedVersions] = useState([])
    const [dateRange, setDateRange] = useState({
        from: '',
        to: ''
    })
    const {id} = useParams()
    const versions = [
        {
            id: 2,
            startDate: "2025-03-03",
            endDate: null,
            version: "version 2",
        },
        {
                id: 1,
                startDate: "2024-01-01",
                endDate: "2024-04-01",
                version: "version 1",
        },
    ]

    const filteredVersions = versions.filter(version => {
        if (!dateRange.from && !dateRange.to) return true;
        
        const versionStart = new Date(version.startDate);
        const versionEnd = version.endDate ? new Date(version.endDate) : new Date();
        const fromDate = dateRange.from ? new Date(dateRange.from) : null;
        const toDate = dateRange.to ? new Date(dateRange.to) : null;

        if (fromDate && toDate) {
            return versionStart <= toDate && versionEnd >= fromDate;
        } else if (fromDate) {
            return versionEnd >= fromDate;
        } else if (toDate) {
            return versionStart <= toDate;
        }
        return true;
    });

    const handleDateChange = (name,value) => {
        // If setting "from" date and there's already a "to" date
        if (name === 'from' && dateRange.to && value > dateRange.to) {
            return; // Don't update if the new "from" date is after the "to" date
        }
        
        // If setting "to" date and there's already a "from" date
        if (name === 'to' && dateRange.from && value < dateRange.from) {
            return; // Don't update if the new "to" date is before the "from" date
        }

        setDateRange(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const renderSessionCell = (day, dayIndex, session, sessionIndex,data) => {
        
        const matchingSessions = data.find(s => 
            s.day_of_week === day && session.start === s.start_time
        );
        
        const isLastDay = dayIndex === days.length - 1;
        const isOddSession = sessionIndex === 1 || sessionIndex === 3;
        const isEvenSession = sessionIndex === 0 || sessionIndex === 2;
        const isLastSession = sessionIndex === sessions.length - 1;
        
        return (
            <div 
                key={`${dayIndex}-${sessionIndex}`} 
                className={`
                    col-start-${sessionIndex + 2} row-start-${dayIndex + 2} 
                   
                    ${isOddSession && 'mr-2'}  
                    ${isLastDay && isOddSession && 'rounded-br-lg'}
                    ${isLastDay && isEvenSession && 'rounded-bl-lg'}
                    ${isLastDay && isLastSession && 'rounded-b-lg'}
                    bg-white dark:bg-gray-800
                    border border-gray-200 dark:border-gray-700    
                    cursor-pointer min-h-16 relative p-1 duration-300 transition-all  
                   
               
                `}
            >
                {matchingSessions?.id && (
                    <FullSession 
                        name={matchingSessions?.group_name} 
                        room={matchingSessions?.room_name} 
                        status={matchingSessions.status}
                    />
                )}
            </div>
        );
    };
    const handleVersionClick = (version,event) => {
        // Prevent the click from affecting focus
        event.preventDefault();
        event.stopPropagation();
        
        if (selectedVersions.includes(version)) {
            setSelectedVersions(selectedVersions.filter(v => v !== version))
            return;
        }
        setSelectedVersions([...selectedVersions,version])
    }
    const teacher = users.find(user => user.matricule === id)
    return (
        <div className="p-6 space-y-6 min-h-screen">
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold capitalize text-gray-900 dark:text-white">
                    {teacher?.fullName} Schedules Archive
                </h1>
                
                {/* Date Range Filter */}
                <div className="flex flex-col gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="flex items-center gap-2">
                        <Calendar size={20} className="text-purple-500" />
                        <span className="text-base font-semibold text-gray-900 dark:text-white">Filter by Date Range</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <CustomDatePicker
                            value={dateRange.from}
                            onChange={(value) => handleDateChange('from', value)}
                            className="w-full"
                            placeholder="From Date"
                        />
                        <CustomDatePicker
                            value={dateRange.to}
                            onChange={(value) => handleDateChange('to', value)}
                            className="w-full"
                            placeholder="To Date"
                        />
                     
                    </div>
                    {(dateRange.from || dateRange.to) && (
                        <button
                            onClick={() => setDateRange({ from: '', to: '' })}
                            className="self-end text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 
                                dark:hover:text-purple-300 transition-colors duration-200"
                        >
                            Clear filters
                        </button>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {filteredVersions.map(version => (
                    <div 
                        key={version.id} 
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                            rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out
                             hover:shadow-lg hover:border-purple-500 dark:hover:border-purple-400"
                    >
                        <div 
                            className="flex items-center justify-between p-4 border-b border-gray-200 
                                dark:border-gray-700 cursor-pointer group"
                            onClick={(e) => handleVersionClick(version.version,e)}
                            role="button"
                            tabIndex={0}
                        >
                            <div className="flex items-center gap-3">
                                <div className="transform transition-transform duration-300 ease-in-out 
                                    group-hover:translate-y-1">
                                    {selectedVersions.includes(version.version) ? 
                                        <ChevronUp size={20} className="text-purple-500" /> : 
                                        <ChevronDown size={20} className="text-purple-500" />
                                    }
                                </div>
                                <h2 className="text-lg font-bold capitalize text-gray-900 dark:text-white 
                                    group-hover:text-purple-600 dark:group-hover:text-purple-400 
                                    transition-colors duration-200">
                                    {version.version}
                                </h2>
                            </div>
                            {version.endDate ? (
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {version.startDate} - {version.endDate}
                                        </p>
                                    ) : (
                                <p className="text-sm text-gray-500 dark:text-gray-50 px-3 py-1 rounded-full 
                                    bg-purple-50 dark:bg-purple-950/80 transition-colors duration-200 
                                    group-hover:bg-purple-100 dark:group-hover:bg-purple-950">
                                            {version.startDate} - Present
                                        </p>
                            )}
                        </div>
                        <div className={`transform transition-all duration-500 ease-in-out 
                            ${selectedVersions.includes(version.version) 
                                ? 'opacity-100 max-h-[2000px]' 
                                : 'opacity-0 max-h-0 overflow-hidden'}`}>
                            <div className="p-4">
                                <ScheduleContainer sessions={sessions} days={days}>
                                    {days.map((day,dayIndex) =>
                                        sessions.map((session,sessionIndex) =>
                                            renderSessionCell(day,dayIndex,session,sessionIndex,
                                                schedulesArchive[version.version]?.schedule)
                                        )
                                            )}
                                        </ScheduleContainer>
                            </div>
                      </div>
                                    </div>
                                )
                )}
            </div>
        </div>
    )
}
