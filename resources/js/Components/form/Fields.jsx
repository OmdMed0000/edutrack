import { Calendar } from 'lucide-react';
import { FieldContainer } from "./GlobalComponents";
import CustomDatePicker from './CustomDatePicker';









export const DateField = ({name,min='',max = '',value,handleChange,error,label,disabled,placeholder,handleFocus,yearsAccepted = 'all' }) => {
    return (
      <FieldContainer label={label} error={error}>
          <CustomDatePicker
              value={value}
              onChange={handleChange}
              disabled={disabled}
              placeholder={placeholder}
              name={name}
              handleFocus={handleFocus}
              error={error}
              yearsAccepted={yearsAccepted}
             
          />
    </FieldContainer>
    )
}

export const DateRangeInput =({startDate,endDate,handleChange,}) =>{

  return (
    <div className={`flex flex-col space-y-2  `}>
      <div className="flex items-center space-x-4 ">
        <div className="flex-1">
          <label htmlFor="start-date" className="block text-sm font-medium  mb-1">
            Start Date 
          </label>
          <div className="relative">
            <input
              type="date"
              id="start-date"
              value={startDate}
              onChange={({target}) => handleChange('start_date',target.value)}
              max={endDate}
              className="block outline-none w-full border bg-gray-50 dark:bg-gray-800 rounded-md border-gray-300 dark:border-gray-600  focus:ring-1 focus:border-purple-600 focus:ring-purple-600 pl-10 pr-3 py-2"
            />
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-300 dark:text-gray-600" />
          </div>
        </div>
        <div className="flex-1">
          <label htmlFor="end-date" className="block text-sm font-medium  mb-1">
            End Date
          </label>
          <div className="relative">
            <input
              type="date"
              id="end-date"
              value={endDate}
              onChange={({target}) => handleChange('end_date',target.value)}
              min={startDate}
              className="block outline-none w-full border bg-gray-50 dark:bg-gray-800 rounded-md border-gray-300 dark:border-gray-600 focus:right-1  focus:border-purple-600 focus:ring-purple-600 pl-10 pr-3 py-2"
            />
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-300 dark:text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
}





