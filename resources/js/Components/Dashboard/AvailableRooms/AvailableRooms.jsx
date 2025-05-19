import { useState } from "react"
import { Rows4,Grid3X3,FileSpreadsheet,FileText } from "lucide-react"
import GridAvailableRooms from "./GridAvailableRooms"
import RowsAvailableRooms from "./RowsAvailableRooms"


export default function AvailableRooms(){
    const allRooms =['Atelier PVB','Salle 1','Salle 2','Salle 3','Salle 4','Salle 5','Salle 6' , 'Salle 7' , 'Salle 8','Salle 9']
  const scheduleData = [
      { day: "Monday", start: "13:30", end: "16:00", teacher: "Mr. El-Gharrabi El-Hassan", room: "Atelier PVB" },
      { day: "Monday", start: "16:00", end: "18:30", teacher: "Mr. El-Gharrabi El-Hassan", room: "Atelier PVB" },
      { day: "Monday", start: "16:00", end: "18:30", teacher: "Mr. Ayoub Fikry", room: "Salle 1" },

      { day: "Wednesday", start: "13:30", end: "16:00", teacher: "Mr. El-Gharrabi El-Hassan", room: "Salle 1" },
      { day: "Wednesday", start: "11:00", end: "13:30", teacher: "Mr.Daaif", room: "Atelier PVB" },
      { day: "Wednesday", start: "11:00", end: "13:30", teacher: "Mr. El-Gharrabi El-Hassan", room: "Salle 2" },
      { day: "Wednesday", start: "11:00", end: "13:30", teacher: "Mr. Hafsa", room: "Salle 3" },
      { day: "Wednesday", start: "11:00", end: "13:30", teacher: "Mr. Ayoub", room: "Salle 4" },
      { day: "Wednesday", start: "11:00", end: "13:30", teacher: "Mr. Ayoub", room: "Salle 1" },

      { day: "Thursday", start: "16:00", end: "18:30", teacher: "Mr. El-Gharrabi El-Hassan", room: "Salle 2" },
      { day: "Friday", start: "19:30", end: "21:30", teacher: "Mr. El-Gharrabi El-Hassan", room: "Salle 3" },
      { day: "Friday", start: "8:30", end: "11:00", teacher: "Mr. El-Gharrabi El-Hassan", room: "Atelier PVB" },
      { day: "Friday", start: "11:00", end: "13:30", teacher: "Mr. El-Gharrabi El-Hassan", room: "Salle 4" },
      { day: "Saturday", start: "8:30", end: "11:30", teacher: "Mr. El-Gharrabi El-Hassan", room: "Atelier PVB" },
      { day: "Saturday", start: "8:30", end: "11:30", teacher: "Mr. Teacher1", room: "Salle 1" },
      { day: "Saturday", start: "8:30", end: "11:30", teacher: "Mr. Teacher2", room: "Salle 2" },
      { day: "Saturday", start: "8:30", end: "11:30", teacher: "Mr. Teacher3", room: "Salle 3" },
      { day: "Saturday", start: "8:30", end: "11:30", teacher: "Mr. Teacher4", room: "Salle 4" },
      
  ];
  
    const [displayMode,setDisplayMode] = useState('Rows')
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className='flex items-center justify-between mb-6'>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Available Rooms for this Week</h2>
          <div className="flex gap-2">
            <button 
              onClick={()=>setDisplayMode(displayMode === 'Grid' ? 'Rows' : 'Grid')}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-50 
                bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg 
                hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {displayMode === 'Grid' ? <Rows4 size={18}/> : <Grid3X3 size={18}/>}
            </button>
            <button
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-50 
                bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg 
                hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              title="Export to Excel"
            >
              <FileSpreadsheet size={18} />
              Excel
            </button>
            <button
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-50 
                bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg 
                hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              title="Export to PDF"
            >
              <FileText size={18} />
              PDF
            </button>
          </div>
        </div>
        
        {displayMode === 'Grid' ? 
        <GridAvailableRooms allRooms={allRooms} scheduleData={scheduleData} /> 
        : <RowsAvailableRooms allRooms={allRooms} scheduleData={scheduleData} />
        }
      </div>
    )
}