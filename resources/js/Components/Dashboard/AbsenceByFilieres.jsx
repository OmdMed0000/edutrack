import TimeFilter from '../form/TimeFilter';
import BarChart from '../Charts/BarChart';
import { absenceByFiliere } from '../../Data/AbsenceData';
import { useState } from 'react';
export default function AbsenceByFilieres(){
    const [absencebyFields, setAbsenceByFields] = useState('Today');
    return(
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className='flex items-center justify-between mb-6'>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Absence by Filieres</h2>
          <TimeFilter selected={absencebyFields} setNewTimeRange={setAbsenceByFields}/>
        </div>
        
        <BarChart data={absenceByFiliere[absencebyFields]}/>
      </div>
    )
}
