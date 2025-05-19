import { Days, Sessions } from "../../Schedule/ScheduleComponents";
import { sessions,days } from "../../../Data/ScheduleData";
export default function GridAvailableRooms ({allRooms,scheduleData}){

 


 
  return (
      <div className="bg-white dark:bg-gray-800 py-2 px-4">
        <div className="grid grid-cols-[140px_repeat(5,1fr)] grid-rows-[50px_repeat(6,auto)] mt-4 grid-flow-row-dense auto-cols-max gap-1">

          {/* Session Headers */}
          <Sessions sessions={sessions}/>
          <Days days={days} />

        

          {/* Schedule with Available Rooms */}
          {days.map((day, dayIndex) =>
            sessions.map((session, sessionIndex) => {
              const occupiedRooms = scheduleData
                .filter(s => s.start === session.start && s.day === day)
                .map(s => s.room);

              const availableRooms = allRooms.filter(room => !occupiedRooms.includes(room));

              return (
                <div
                  key={`${dayIndex}-${sessionIndex}`}
                  className={`
                    col-start-${sessionIndex + 2} row-start-${dayIndex + 2} 
                    ${(sessionIndex === 1 || sessionIndex === 3) && 'mr-2'}  
                    ${dayIndex === days.length - 1 && (sessionIndex === 1 || sessionIndex === 3) && 'rounded-br-lg'}
                    ${dayIndex === days.length - 1 && (sessionIndex === 0 || sessionIndex === 2) && 'rounded-bl-lg'}
                    ${dayIndex === days.length - 1 && sessionIndex === sessions.length - 1 && 'rounded-b-lg'}
                    bg-gray-50 dark:bg-gray-900 
                    border border-gray-200 dark:border-gray-700
                    cursor-pointer min-h-16 relative p-3 
                    transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800
                  `}
                >
                  {availableRooms.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {availableRooms.length === allRooms.length ? (
                        <span className="w-full text-center text-sm font-medium text-purple-700 dark:text-purple-400">
                          All rooms are Available
                        </span>
                      ) : (
                        availableRooms.map(room => (
                          <span
                            key={room}
                            className="px-3 py-1.5 bg-purple-200 dark:bg-purple-900/50 
                              text-purple-700 dark:text-purple-300 
                              rounded-full text-sm font-medium 
                              hover:bg-purple-200 dark:hover:bg-purple-800/50 
                              transition-colors duration-200"
                          >
                            {room}
                          </span>
                        ))
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
  )
}




