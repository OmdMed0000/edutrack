// import { FullSession } from "./FullSession";
// import { days, sessions } from "../Pages/AbsenceManager/Schedules";

// export const globalRenderCell = (day, dayIndex, session, sessionIndex,data,type) => {
//     const matchingSessions = data.find(s => s.day_of_week === day && session.start === s.start_time);

//     const isLastDay = dayIndex === days.length - 1;
//     const isOddSession = sessionIndex === 1 || sessionIndex === 3;
//     const isEvenSession = sessionIndex === 0 || sessionIndex === 2;
//     const isLastSession = sessionIndex === sessions.length - 1;
//     return (
//         <>
//         <div 
//         key={`${dayIndex}-${sessionIndex}`} 
//         className={`
//             col-start-${sessionIndex + 2} row-start-${dayIndex + 2} 
//             ${sessionIndex === 3 && type !== 'group'}  
//             ${isOddSession && 'mr-2'}
//             ${isLastDay && isOddSession && 'rounded-br-lg'}
//             ${isLastDay && isEvenSession && 'rounded-bl-lg'}
//             ${isLastDay && isLastSession && 'rounded-b-lg'}
//             bg-white dark:bg-gray-800
//             border border-gray-200 dark:border-gray-700    
//             cursor-pointer min-h-16 relative p-1 duration-300 transition-all  
//             hover:border-purple-500 dark:hover:border-purple-500
//             hover:shadow-sm
//         `}
//     >
//     </div>
//     <div 
//                             key={`${dayIndex}-${sessionIndex}`} 
//                             className={`col-start-${sessionIndex + 2} row-start-${dayIndex + 2} 
//                                 ${!matchingSessions?.start && 'hover:bg-gray-100 dark:hover:bg-gray-600'} 
//                                 bg-gray-50 dark:bg-gray-700/95 
//                                 border border-gray-300 dark:border-gray-500 
//                                 min-h-16 relative p-1 duration-300 transition-all 
//                                 ${isDisabled || isEmpty ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} 
//                                 ${isOddSession && 'mr-2'}   
//                                 ${isLastDay && isOddSession && 'rounded-br-lg'}
//                                 ${isLastDay && isEvenSession && 'rounded-bl-lg'}
//                                 ${isLastDay && isLastSession && 'rounded-b-lg'}
//                                `}
//                             onClick={() => !isDisabled && handleClick(matchingSessions, day)}
//                         >
//     </div>
//     <div 
//             key={`${dayIndex}-${sessionIndex}`} 
//             className={`
//                 col-start-${sessionIndex + 2} row-start-${dayIndex + 2} 
//                 ${!matchingSessions?.id && 'hover:bg-purple-50 dark:hover:bg-purple-900/20'}
//                 ${isOddSession && 'mr-2'}  
//                 ${isLastDay && isOddSession && 'rounded-br-lg'}
//                 ${isLastDay && isEvenSession && 'rounded-bl-lg'}
//                 ${isLastDay && isLastSession && 'rounded-b-lg'}
//                 bg-white dark:bg-gray-800
//                 border border-gray-200 dark:border-gray-700    
//                 cursor-pointer min-h-16 relative p-1 duration-300 transition-all  
//                 hover:border-purple-500 dark:hover:border-purple-500
//                 hover:shadow-sm
//             `}
//             onClick={() => handleClick(matchingSessions?.id ? matchingSessions : sessionData)}
//         >
//     </div>
//     <div 
//             key={`${dayIndex}-${sessionIndex}`} 
//             className={`
//                 col-start-${sessionIndex + 2} row-start-${dayIndex + 2} 
               
//                 ${isOddSession && 'mr-2'}  
//                 ${isLastDay && isOddSession && 'rounded-br-lg'}
//                 ${isLastDay && isEvenSession && 'rounded-bl-lg'}
//                 ${isLastDay && isLastSession && 'rounded-b-lg'}
//                 bg-white dark:bg-gray-800
//                 border border-gray-200 dark:border-gray-700    
//                 cursor-pointer min-h-16 relative p-1 duration-300 transition-all  
               
           
//             `}
//         >

//         </div>
//     </>
//     )
   
    
    
    
// }
// // display Schedule Renderer
// export const renderSessionCell = (day, dayIndex, session, sessionIndex,data,type) => {
//     const matchingSessions = data.find(s => s.day_of_week === day && session.start === s.start_time);
   
//     const isLastDay = dayIndex === days.length - 1;
//     const isOddSession = sessionIndex === 1 || sessionIndex === 3;
//     const isEvenSession = sessionIndex === 0 || sessionIndex === 2;
//     const isLastSession = sessionIndex === sessions.length - 1;
//     const roomName = matchingSessions?.room_name || 'A distance';
//     return (
//         <div 
//             key={`${dayIndex}-${sessionIndex}`} 
//             className={`
//                 col-start-${sessionIndex + 2} row-start-${dayIndex + 2} 
//                 ${sessionIndex === 3 && type !== 'group' && 'mr-2'}  
//                 ${sessionIndex === 1 && 'mr-2'}
//                 ${isLastDay && isOddSession && 'rounded-br-lg'}
//                 ${isLastDay && isEvenSession && 'rounded-bl-lg'}
//                 ${isLastDay && isLastSession && 'rounded-b-lg'}
//                 bg-white dark:bg-gray-800
//                 border border-gray-200 dark:border-gray-700    
//                 cursor-pointer min-h-14 relative p-1 
                
//             `}
//         >
//             {matchingSessions?.id && (
//                 <FullSession 
//                     name={type === 'teacher' ? matchingSessions.group_name :
//                           type === 'group' ? matchingSessions.teacher_name :
//                           matchingSessions.group_name}
//                     room={type === 'teacher' ? roomName :
//                           type === 'group' ? roomName :
//                           matchingSessions.teacher_name}
//                     status={matchingSessions.status}
//                 />
//             )}
//         </div>
//     );
// };

// // Teacher Schedule Renderer
// export const scheduleFunction =(day,dayIndex,session,sessionIndex,today,yesterday,getSubmissionStatus,handleClick,schedule)=>{
//     const matchingSessions = schedule.find(s => s.day === day && session.start === s.start);

//     const isDisabled = day !== today && day !== yesterday;
//     const isEmpty = !matchingSessions;
//     const isYesterday = day === yesterday;
//     const isToday = day === today ;
//     const isSubmitedToday = isToday && getSubmissionStatus(matchingSessions?.idg);

//     const isLastDay = dayIndex === days.length - 1;
//     const isOddSession = sessionIndex === 1 || sessionIndex === 3;
//     const isEvenSession = sessionIndex === 0 || sessionIndex === 2;
//     const isLastSession = sessionIndex === sessions.length - 1;
//     return (
//                         <div 
//                             key={`${dayIndex}-${sessionIndex}`} 
//                             className={`col-start-${sessionIndex + 2} row-start-${dayIndex + 2} 
//                                 ${!matchingSessions?.start && 'hover:bg-gray-100 dark:hover:bg-gray-600'} 
//                                 bg-gray-50 dark:bg-gray-700/95 
//                                 border border-gray-300 dark:border-gray-500 
//                                 min-h-16 relative p-1 duration-300 transition-all 
//                                 ${isDisabled || isEmpty ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} 
//                                 ${isOddSession && 'mr-2'}   
//                                 ${isLastDay && isOddSession && 'rounded-br-lg'}
//                                 ${isLastDay && isEvenSession && 'rounded-bl-lg'}
//                                 ${isLastDay && isLastSession && 'rounded-b-lg'}
//                                `}
//                             onClick={() => !isDisabled && handleClick(matchingSessions, day)}
//                         >
//                             {matchingSessions?.start ? (
//                                 <div
//                                     className={`h-full w-full 
//                                         ${isSubmitedToday
//                                             ? "bg-green-100 hover:bg-green-200 text-green-700 dark:bg-green-700 dark:text-green-50 dark:hover:bg-green-600 border border-green-600"
//                                             : isYesterday 
//                                             ? "bg-yellow-100 hover:bg-yellow-200 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-50 dark:hover:bg-yellow-600 border border-yellow-600"
//                                             : "bg-purple-100 border border-purple-600 hover:bg-purple-200 text-purple-700 dark:bg-purple-700 dark:text-purple-50 dark:hover:bg-purple-600"
//                                         }
//                                         flex px-2 py-1 flex-col items-center justify-center gap-3 rounded-lg transition-all duration-300`}>
//                                     <span className="text-sm font-bold">{matchingSessions?.group}</span>
//                                     <span className="text-xs font-medium">{matchingSessions?.room}</span>
//                                 </div>
//                             ) : null}
//                         </div>
//                     );
// }

// // Generate a session cell for the schedule grid
// export const renderSessionCell2 = (day, dayIndex, session, sessionIndex,schedule,initialValues,handleClick) => {
//     const matchingSessions = schedule.find(s => 
//         s.day_of_week === day && session.start === s.start_time
//     );
    
//     const sessionData = {
//         ...initialValues,
//         id: new Date().getTime(),
//         day_of_week: day,
//         start_time: session.start,
//         end_time: session.end, 
//     };
    
//     const isLastDay = dayIndex === days.length - 1;
//     const isOddSession = sessionIndex === 1 || sessionIndex === 3;
//     const isEvenSession = sessionIndex === 0 || sessionIndex === 2;
//     const isLastSession = sessionIndex === sessions.length - 1;

//     // const isLastDay = dayIndex === days.length - 1;
//     // const isOddSession = sessionIndex === 1 || sessionIndex === 3;
//     // const isEvenSession = sessionIndex === 0 || sessionIndex === 2;
//     // const isLastSession = sessionIndex === sessions.length - 1;

        
//     // const isLastDay = dayIndex === days.length - 1;
//     // const isOddSession = sessionIndex === 1 || sessionIndex === 3;
//     // const isEvenSession = sessionIndex === 0 || sessionIndex === 2;
//     // const isLastSession = sessionIndex === sessions.length - 1;
    
//     return (
//         <div 
//             key={`${dayIndex}-${sessionIndex}`} 
//             className={`
//                 col-start-${sessionIndex + 2} row-start-${dayIndex + 2} 
//                 ${!matchingSessions?.id && 'hover:bg-purple-50 dark:hover:bg-purple-900/20'}
//                 ${isOddSession && 'mr-2'}  
//                 ${isLastDay && isOddSession && 'rounded-br-lg'}
//                 ${isLastDay && isEvenSession && 'rounded-bl-lg'}
//                 ${isLastDay && isLastSession && 'rounded-b-lg'}
//                 bg-white dark:bg-gray-800
//                 border border-gray-200 dark:border-gray-700    
//                 cursor-pointer min-h-16 relative p-1 duration-300 transition-all  
//                 hover:border-purple-500 dark:hover:border-purple-500
//                 hover:shadow-sm
//             `}
//             onClick={() => handleClick(matchingSessions?.id ? matchingSessions : sessionData)}
//         >
//             {matchingSessions?.id && (
//                 <FullSession 
//                     name={matchingSessions?.group_name} 
//                     room={matchingSessions?.type === 'Presentiel' ? matchingSessions?.room_name : 'A distance'} 
//                     status={matchingSessions.status}
//                 />
//             )}
//         </div>
//     );
// };

// // history Schedule Renderer
// export const renderSessionCell3 = (day, dayIndex, session, sessionIndex,data) => {
        
//     const matchingSessions = data.find(s => 
//         s.day_of_week === day && session.start === s.start_time
//     );
    
//     const isLastDay = dayIndex === days.length - 1;
//     const isOddSession = sessionIndex === 1 || sessionIndex === 3;
//     const isEvenSession = sessionIndex === 0 || sessionIndex === 2;
//     const isLastSession = sessionIndex === sessions.length - 1;
    
//     return (
//         <div 
//             key={`${dayIndex}-${sessionIndex}`} 
//             className={`
//                 col-start-${sessionIndex + 2} row-start-${dayIndex + 2} 
               
//                 ${isOddSession && 'mr-2'}  
//                 ${isLastDay && isOddSession && 'rounded-br-lg'}
//                 ${isLastDay && isEvenSession && 'rounded-bl-lg'}
//                 ${isLastDay && isLastSession && 'rounded-b-lg'}
//                 bg-white dark:bg-gray-800
//                 border border-gray-200 dark:border-gray-700    
//                 cursor-pointer min-h-16 relative p-1 duration-300 transition-all  
               
           
//             `}
//         >
//             {matchingSessions?.id && (
//                 <FullSession 
//                     name={matchingSessions?.group_name} 
//                     room={matchingSessions?.room_name} 
//                     status={matchingSessions.status}
//                 />
//             )}
//         </div>
//     );
// };
