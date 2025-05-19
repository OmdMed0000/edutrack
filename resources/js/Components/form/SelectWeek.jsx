import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import useClickOutSide from "../../utils/Hooks/useClickOutSide"
import { DateField } from "./Fields"

export default function SelectWeek({ weeks ,  handleSelectWeek , activeWeek , position = 'bottom' }) {
    const [isSelectItem, setIsSelectItem] = useState(false)
    const [currentValue, setCurrentValue] = useState(activeWeek)
    const [filteredTimeRange, setFilteredTimeRange] = useState({
        fromDate : null,
        toDate : null
    })
    const getUniqueYears = (weeks) => {
        const years = weeks.map(week => new Date(week.from).getFullYear())
        return [...new Set(years)]
    }
    const [dropdownPosition, setDropdownPosition] = useState(position)
    const selectRef = useRef(null)
    const handleClose = () => {
        setIsSelectItem(false)
        setFilteredTimeRange({
            fromDate : null,
            toDate : null
        })
    }

    useClickOutSide(handleClose,selectRef)



    // Check available space and adjust position
    useEffect(() => {
        if (isSelectItem && selectRef.current) {
            const rect = selectRef.current.getBoundingClientRect()
            const spaceBelow = window.innerHeight - rect.bottom
            const spaceAbove = rect.top
            const dropdownHeight = 200 // Approximate height of dropdown

            if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
                setDropdownPosition('top')
            } else {
                setDropdownPosition('bottom')
            }
        }
    }, [isSelectItem])

    const handleChange = (type,value) => setFilteredTimeRange(prev => ({...prev,[type]:value}))
    
    const select = (week) => {
        handleSelectWeek(week)
        setCurrentValue(week)
        setIsSelectItem(false)
        setFilteredTimeRange({
            fromDate : null,
            toDate : null
        })
    }

    const filtredWeeks = weeks.filter(week => {
        const filterByFromDate = filteredTimeRange.fromDate ? week.from >= filteredTimeRange.fromDate : true
        const filterByToDate = filteredTimeRange.toDate ? week.to <= filteredTimeRange.toDate : true
        return filterByFromDate && filterByToDate
})

    return (
        <div className="relative flex-1 max-w-xs" ref={selectRef}>
            <div 
                className={`
                    flex items-center justify-between 
                    bg-white dark:bg-gray-800
                    cursor-pointer
                    text-gray-700 dark:text-gray-50
                    border rounded-lg
                    w-full py-2.5 px-4
                    transition-all duration-200
                    ${isSelectItem 
                        ? 'border-purple-500 dark:border-purple-500 shadow-sm' 
                        : 'border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }
                `} 
                onClick={() => setIsSelectItem(!isSelectItem)}
            >
                <span className="font-medium flex items-center justify-start  gap-2" >
                    <span className="text-sm text-gray-700 dark:text-gray-50">
                        {currentValue?.week}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {currentValue?.from} - {currentValue?.to}
                    </span>
                </span>
                <ChevronDown 
                    size={20} 
                    className={`
                        transition-transform duration-300
                        ${isSelectItem ? 'rotate-180 text-purple-500' : 'text-gray-400'}
                    `}
                />
            </div>

            {isSelectItem && (
                <div 
                    className={`
                        absolute left-0 right-0
                        p-2 border border-gray-200 dark:border-gray-700
                        rounded-lg bg-white dark:bg-gray-800
                        shadow-lg
                        ${dropdownPosition === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'}
                        w-full
                        max-w-72
                        z-50
                    `}
                >
                <div className="flex items-center justify-between gap-2 w-full">
                    <DateField 
                        name="fromDate"
                        label="From Date"
                        handleChange={handleChange}
                        value={filteredTimeRange.from}
                        placeholder="From Date"
                        handleFocus={()=>{}}
                        yearsAccepted={getUniqueYears(weeks)}
                    />
                    <DateField 
                        name="toDate"
                        label="To Date"
                        handleChange={handleChange}
                        value={filteredTimeRange.to}
                        placeholder="To Date"
                        handleFocus={()=>{}}
                        yearsAccepted={getUniqueYears(weeks)}
                    />
                      
                       
                    
                    
                </div>
                    <div className="max-h-48 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] space-y-1 mt-2">
                        {filtredWeeks.length > 0 ? (
                            filtredWeeks.map((week) => (
                                <span
                                    key={week.week}
                                    className={`
                                         p-2 rounded-md text-sm cursor-pointer
                                        transition-colors duration-200
                                        flex items-center justify-between
                                        ${currentValue.week === week.week
                                            ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700'
                                            : 'bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                                        }
                                        border
                                    `}
                                    onClick={() => select(week)}
                                >
                                   <span className="text-sm">
                                        {week.week}
                                   </span>
                                   <span className={`text-sm ${currentValue.week === week.week ? 'text-purple-700 dark:text-purple-300' : 'text-gray-500 dark:text-gray-400'}`}>
                                        {week.from} - {week.to}
                                   </span>
                                </span>
                            ))
                        ) : (
                            <div className="text-center py-2 text-gray-500 dark:text-gray-400 text-sm">
                                No results found
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
} 


