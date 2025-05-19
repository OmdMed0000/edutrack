import { days, sessions } from "../../Data/ScheduleData"
import ScheduleContainer from "./ScheduleContainer"
import { FullSession } from "./ScheduleComponents"

const info = {
    'teacher' : {
        titleKey : 'group_name',
        sousTitleKey : 'room_name',
        key :'teacher_name'
    },
    'group' : {
        titleKey : 'teacher_name',
        sousTitleKey : 'room_name',
        key :'group_name'
    },
    'room' : {
        titleKey : 'teacher_name',
        sousTitleKey : 'group_name',
        key : 'roomName'
    }
}

export default function DisplaySchedule({data,type}) {
    const {titleKey,sousTitleKey} = info[type]
    // Filter sessions based on type
    const filteredSessions = type === 'group' ? sessions.filter(s => s.start !== '19:30') : sessions;

    return (
            <div className="bg-white dark:bg-gray-800 ">
                <ScheduleContainer sessions={filteredSessions} days={days}>
                    {days.map((day, dayIndex) =>
                        filteredSessions.map((session, sessionIndex) =>{
                            const matchingSessions = data.find(s => 
                                s.day_of_week === day && session.start === s.start_time
                            );

                            return (
                                <RenderCell 
                                    session = {matchingSessions}
                                    sessionIndex={sessionIndex} 
                                    dayIndex={dayIndex} 
                                    type={type} 
                                    titleKey={titleKey} 
                                    sousTitleKey={sousTitleKey} 
                                />

                            )
                        }
                            
                           
                        )
                    )}
                </ScheduleContainer>
            </div>
        
    );
} 

const RenderCell = ({session,dayIndex,sessionIndex,type,titleKey,sousTitleKey}) =>{

    const isPresentiel = session?.type === 'Presentiel' 
    const idSession = session?.idSession
   
    return (
        <div 
            key={`${dayIndex}-${sessionIndex}`} 
            className = {getClassName(sessionIndex,dayIndex,idSession,type)}
        >
            {idSession && (
                <FullSession 
                    title  = {session[titleKey]}
                    sousTitle = {(type === 'room' || isPresentiel) ? session[sousTitleKey] : 'A distance' }
                    status={session.status}
                />
            )}
        </div>
    );

}
   
const getClassName = (sessionIndex , dayIndex ,idSession,entity) => {
    const isLastDay = dayIndex === days.length - 1;
    const isOddSession = sessionIndex === 1 || sessionIndex === 3;
    const isEvenSession = sessionIndex === 0 || sessionIndex === 2;
    const isLastSession = sessionIndex === sessions.length - 1;
    return (
        `
        col-start-${sessionIndex + 2} row-start-${dayIndex + 2} 
                ${!idSession && 'hover:bg-purple-50 dark:hover:bg-purple-900/20'}
                ${(sessionIndex === 1 || ( entity !== 'group' && sessionIndex === 3 )) && 'mr-2'}  
                ${isLastDay && isOddSession && 'rounded-br-lg'}
                ${isLastDay && isEvenSession && 'rounded-bl-lg'}
                ${isLastDay && isLastSession && 'rounded-b-lg'}
                bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700    
                cursor-pointer min-h-16 relative p-1 duration-300 transition-all  
                hover:border-purple-500 dark:hover:border-purple-500
                hover:shadow-sm
        `
    )

}