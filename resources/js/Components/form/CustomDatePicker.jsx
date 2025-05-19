import React, { useState, useEffect, useRef } from 'react';
import { Calendar } from 'lucide-react';
import useClickOutSide from '../../utils/Hooks/useClickOutSide';

const CustomDatePicker = ({ value,   onChange,yearsAccepted, placeholder = 'Select date', name,disabled = false,error , handleFocus }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [dropdownPosition, setDropdownPosition] = useState('top');
  const [dropdownAlignment, setDropdownAlignment] = useState('right');
  const [selectedYear, setSelectedYear] = useState( value ? new Date(value).getFullYear() : null);
  const [selectedMonth, setSelectedMonth] = useState( value ? new Date(value).getMonth() : null);
  const [selectedDay, setSelectedDay] = useState( value ? new Date(value).getDate() : null);
  

 
  const pickerRef = useRef(null);

  useEffect(()=>{
    if (!value) {
      setSelectedYear( null)
      setSelectedMonth(null)
      setSelectedDay( null)

    }
    if (value) {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        setSelectedYear(date.getFullYear());
        setSelectedMonth(date.getMonth());
        setSelectedDay(date.getDate());
      }
    }


  },[value])

  // Generate years (current year ± 100)
  const currentYear = new Date().getFullYear();
  const years = yearsAccepted === 'all' ? Array.from({ length: 70 }, (_, i) => currentYear - 60 + i) : yearsAccepted;
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December'
  ];
  
  // Days array (dynamic based on month/year)
  const [days, setDays] = useState([]);

  // Update days when month or year changes
  useEffect(() => {
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    setDays(daysArray);
    
    if (selectedDay > daysInMonth) {
      const newDay = daysInMonth;
      setSelectedDay(newDay);
      triggerOnChange(selectedYear, selectedMonth, newDay);
    }
  }, [selectedYear,selectedMonth,selectedDay]);

   // Close picker when clicking outside
   useClickOutSide(()=>setIsOpen(false) , pickerRef)


 

  // Format date to YYYY-MM-DD
  const formatDate = (year, month, day) => {
    return `${String(day).padStart(2, '0')}/${String(month + 1).padStart(2, '0')}/${year}`;
  };

  // Trigger the onChange callback
  const triggerOnChange = (year, month, day) => {
    if(year === null || month === null || day === null){
      onChange(name, '');
    }else{
      onChange(name,new Date(year, month, day).toISOString().split('T')[0]);
      setIsOpen(false);
    }
  };

  // Handle year selection
  const handleYearChange = (year) => {
    
  
    setSelectedYear(year);
    triggerOnChange(year, selectedMonth, selectedDay);
  };

  // Handle month selection
  const handleMonthChange = (monthIndex) => {
    
    setSelectedMonth(monthIndex);
    triggerOnChange(selectedYear, monthIndex, selectedDay);
  };

  // Handle day selection
  const handleDayChange = (day) => {
 
    setSelectedDay(day);
    triggerOnChange(selectedYear, selectedMonth, day);
     // Close picker when day is selected
  };

  // Format display value
  const formatDisplayValue = () => {
    if (selectedYear === null || selectedMonth === null || selectedDay === null) return placeholder;
    return formatDate(selectedYear, selectedMonth, selectedDay);
  };
  const handleClear = () => {
    setSelectedYear(null);
    setSelectedMonth(null);
    setSelectedDay(null);
    triggerOnChange(null, null, null);
    setIsOpen(false);
  };
  const handleToday = () => {
    const today = new Date();
    setSelectedYear(today.getFullYear());
    setSelectedMonth(today.getMonth());
    setSelectedDay(today.getDate());
    triggerOnChange(today.getFullYear(), today.getMonth(), today.getDate());
    setIsOpen(false);
  };
  const toggleCalendar = () => {
    setIsOpen(!isOpen);
    handleFocus(name);
  };

  useEffect(() => {
    if (isOpen && pickerRef.current) {
        const rect = pickerRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        const spaceRight = window.innerWidth - rect.right;
        const spaceLeft = rect.left;
        const dropdownHeight = 200; // Approximate height of dropdown
        const dropdownWidth = 250;  // Approximate width of dropdown

        // Determine vertical position (top or bottom)
        if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
            setDropdownPosition('top');
        } else {
            setDropdownPosition('bottom');
        }

        if (spaceRight >= dropdownWidth) {
          setDropdownAlignment('right'); // Enough space on the right
      } else if (spaceLeft >= dropdownWidth) {
          setDropdownAlignment('left'); // Enough space on the left
      } 
    }
}, [isOpen]);


  return (
    <div className={`relative cursor-pointer ${disabled ? 'cursor-not-allowed' : ''}`} ref={pickerRef}>
      <div 
        className={`flex items-center gap-2 px-3 py-2.5 text-sm bg-gray-50 dark:bg-gray-800/50 border  rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-purple-500 ${isOpen ? ' border-purple-600' : error ? 'border-red-600' : 'border-gray-300 dark:border-gray-600'}`}
        onClick={toggleCalendar}
        disabled={disabled}
      >
        <Calendar className="size-5 text-gray-300 dark:text-gray-600" />
        <input
          type="text"
          value={formatDisplayValue() === placeholder ? '' : formatDisplayValue()}
          className="w-full bg-transparent border-none font-medium focus:outline-none text-gray-700 dark:text-gray-50 cursor-pointer placeholder:text-gray-300 dark:placeholder:text-gray-600 placeholder:text-sm"
          placeholder={placeholder}
          readOnly
        />
      </div>

      {isOpen && (
        <div className={`
              absolute 
              ${dropdownPosition === 'top' ? 'bottom-full mb-1' : 'top-full mt-1'} 
              ${dropdownAlignment === 'left' ? 'right-0' : 'right-0'}
              p-2 space-y-2  w-2/5 min-w-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50
             
              `}>
          <div className="grid grid-cols-3 divide-x divide-gray-200 dark:divide-gray-700 ">
            {/* Years Column */}
            <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-h-48"
              onWheel={(e) => e.stopPropagation()}
            >
              {years.map((year) => (
                <div
                  key={year}
                  onClick={() => handleYearChange(year)}
                  className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    selectedYear === year
                      ? 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {year}
                </div>
              ))}
            </div>

            {/* Months Column */}
            <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-h-48"
              onWheel={(e) => e.stopPropagation()}
            >
              {monthNames.map((month, index) => (
                <div
                  key={month}
                  onClick={() => handleMonthChange(index)}
                  className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    selectedMonth === index
                      ? 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {month}
                </div>
              ))}
            </div>

            {/* Days Column */}
            <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-h-48"
              onWheel={(e) => e.stopPropagation()}
            >
              {days.map((day) => (
                <div
                  key={day}
                  onClick={() => handleDayChange(day)}
                  className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    selectedDay === day
                      ? 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {String(day).padStart(2, '0')}
                </div>
              ))}
            </div>
          </div>
          <div className='flex justify-end items-center gap-2'>
                        <button
                            onClick={handleClear}
                            className="px-2 py-1 text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg"
                        >
                            Clear
                        </button>
                        <button
                            onClick={handleToday}
                            className="px-2 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-lg"
                        >
                            Today
                        </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;