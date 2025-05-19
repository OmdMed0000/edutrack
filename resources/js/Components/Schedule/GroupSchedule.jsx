import { days } from "../../Data/ScheduleData";
import ScheduleContainer from "./ScheduleContainer";

const sessions = [
    {
        start : '8:30',
        end:'11:00'
    },
    {
        start : '11:00',
        end:'13:30'
    },
    {
        start : '13:30',
        end:'16:00'
    },
    {
        start : '16:00',
        end:'18:30'
    },
   

]
const scheduleData = [
    {idSession:1, day: "Saturday", start: "8:30", end: "11:30", teacher: "Daaif", room: "Atelier PVB" },
    {idSession:2, day: "Monday", start: "13:30", end: "16:00", teacher: "Zergo", room: "INFO" },
    {idSession:3, day: "Monday", start: "16:00", end: "18:30", teacher: "Himish", room: "INFO" },
    {idSession:4, day: "Wednesday", start: "13:30", end: "16:00", teacher: "Hafsa", room: "Atelier PVB" },
    {idSession:5, day: "Wednesday", start: "11:00", end: "13:30", teacher: "Mohhammed", room: "Atelier PVB" },
    {idSession:6, day: "Thursday", start: "16:00", end: "18:30", teacher: "Mustapha", room: "Atelier PVB" },
  
    {idSession:8, day: "Friday", start: "8:30", end: "11:00", teacher: "Hafsa", room: "Atelier PVB" },
    {idSession:9, day: "Friday", start: "11:00", end: "13:30", teacher: "Ayoub", room: "Atelier PVB" },
    
    {idSession:10, day: "Monday", start: "8:30", end: "11:00", teacher: "Khadija", room: "TFI" },
];

export default function GroupSchedule() {
    // Function to merge consecutive sessions in a copy of scheduleData
    // const mergeConsecutiveSessions = (data) => {
    //     const mergedSchedule = [];
    //     let currentSession = null;

    //     data.forEach((session) => {
    //         if (!currentSession) {
    //             currentSession = { ...session };
    //             return;
    //         }

    //         // Check if the current session can be merged with the previous one
    //         if (
    //             session.day === currentSession.day &&
    //             session.room === currentSession.room &&
    //             session.teacher === currentSession.teacher &&
    //             ((currentSession.start === "8:30" && session.start === "11:00") ||
    //              (currentSession.start === "13:30" && session.start === "16:00"))
    //         ) {
    //             currentSession.end = session.end; // Merge sessions
    //         } else {
    //             mergedSchedule.push(currentSession); // Push the current session
    //             currentSession = { ...session }; // Start a new session
    //         }
    //     });

    //     if (currentSession) mergedSchedule.push(currentSession); // Push the last session
    //     return mergedSchedule;
    // };

    // Create a copy of scheduleData and merge consecutive sessions
    // const updatedSchedule = mergeConsecutiveSessions([...scheduleData]);

    return (
        <ScheduleContainer days={days} sessions={sessions} >
           {days.map((day,dayIndex)=>
                sessions.map((session,sessionIndex)=> scheduleFuntion(day,dayIndex,session,sessionIndex))
           )}
        </ScheduleContainer>

    );
}

const scheduleFuntion = (day,dayIndex,session,sessionIndex)=>{
    const matchingSessions = scheduleData.find(s => s.day === day && session.start === s.start);
                    
    return (
        <div 
            key={`${dayIndex}-${sessionIndex}`} 
            className={`
                col-start-${sessionIndex + 2} row-start-${dayIndex + 2} 
                ${((matchingSessions?.start === '13:30' && matchingSessions?.end === '18:30') || (matchingSessions?.start === '8:30' && matchingSessions?.end === '13:30')) && ' col-span-2 h-full relative z-50 '} 
                ${!matchingSessions?.start && 'hover:bg-gray-100 dark:hover:bg-gray-600'}
              bg-gray-50 ${sessionIndex === 1 && 'mr-2 '}  border  border-gray-300  dark:border-gray-500 dark:bg-gray-700/95  min-h-16 relative  p-1 duration-300 transition-all  
                ${dayIndex === days.length -1 && (sessionIndex === 0 || sessionIndex === 2) && 'rounded-bl-lg'}
                ${dayIndex === days.length -1 && (sessionIndex === 3 || sessionIndex === 1) && 'rounded-br-lg'}              
            `}               
        >
            {
                matchingSessions?.start ?
                    <div
                        className={`
                            h-full w-full 
                          bg-purple-100 border  border-purple-600 hover:bg-purple-200 text-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600  dark:border-purple-600 dark:text-purple-50 flex
                            px-2 py-1 flex-col items-center justify-center gap-3 rounded-lg  transition-all duration-300
                        `}
                    >
                        <span className="text-sm font-bold">{matchingSessions?.teacher}</span>
                        <span className="text-xs font-medium">{matchingSessions?.room}</span>
                    </div>
                    : null
            }
        </div>
    )
}