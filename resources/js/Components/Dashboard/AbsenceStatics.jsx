import TimeFilter from '../form/TimeFilter';
import DonutCHart from '../Charts/DonutChart';
import { absenceType,absenceByYear,styleAbsenceType,styleByYear } from '../../Data/AbsenceData';
import { useState } from 'react';
export default function AbsenceStatics(){
    const [absence,setAbsence] = useState('Today')
    return(
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className='flex items-center justify-between mb-6'>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Absence Statistics</h2>
          <TimeFilter selected={absence} setNewTimeRange={setAbsence} />
        </div>
        
        <div className="flex flex-col gap-6 md:flex-row items-center justify-around">
          <DonutCHart style={styleAbsenceType} data={absenceType[absence]}/>
          <DonutCHart style={styleByYear} data={absenceByYear[absence]}/>
        </div>
      </div>
    )
}
