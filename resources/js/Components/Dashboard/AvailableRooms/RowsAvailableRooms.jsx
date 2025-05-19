import { useState } from "react";
import { days, sessions } from "../../../Data/ScheduleData";
import { TabContainer,Tab} from "../../Common/Tab";



export default function RowsAvailableRooms({allRooms,scheduleData}) {

    const [daySelected, setDaySelected] = useState('Monday')
  
    const filtredSchedule = scheduleData.filter(session => session.day === daySelected)
    
  

    return (
        <div className="bg-white dark:bg-gray-800 py-2 px-4">
            <TabContainer >
                {days.map(day => <Tab key={day} section={day} activeSection={daySelected} setSection={setDaySelected} />)}
            </TabContainer>
            
            <div className="space-y-3">
                {sessions.map(session => {
                    const occupiedRooms = filtredSchedule.filter(s => s.start === session.start).map(s => s.room)
                    const availableRooms = allRooms.filter(room => !occupiedRooms.includes(room));

                    return (
                        <div key={session.start} className="flex items-center h-16 bg-indigo-50 dark:bg-gray-900 rounded-lg overflow-hidden">
                            <div className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 
                                min-w-28 h-full px-4 py-2 flex flex-col items-center justify-center text-sm font-medium">
                                <span>{session.start}</span>
                                <span className="text-xs text-indigo-500 dark:text-indigo-400">to</span>
                                <span>{session.end}</span>
                            </div>
                            <div className="flex-1 flex px-4 py-2 gap-2 h-full overflow-x-auto">
                                {availableRooms.map(availableRoom => (
                                    <div key={availableRoom} 
                                        className="flex items-center px-3 py-1.5 
                                            bg-purple-200 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 
                                            rounded-full text-sm font-medium whitespace-nowrap">
                                        <span>{availableRoom}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}