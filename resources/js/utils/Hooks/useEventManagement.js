import { useState } from "react";
import { successNotify } from "../../Components/Common/Toast";

export default function useEventManagement(initEvents){
    const [events,setEvents] = useState(initEvents)
    const [selectedEventId,setSelectedEventId] = useState(null)

    const handleRemoveEvent = (eventId) => {
        setEvents(filterEvents(eventId))
        successNotify('event deleted successfuly')
    }
    const filterEvents = (eventId) => {
        const newEvents = events.filter(event => event.id !== eventId)
        return newEvents
    }
    const handleClearAllEvents = () =>{
        setEvents([])
        successNotify('events deleted successfuly')
    }

    const handleModifyEvent = (e,eventState) => {
        e.preventDefault()
        const isEventAlreadyExist = events.find(event => event.id === eventState.id)
        if (isEventAlreadyExist) {
            const newEvents = [...filterEvents(isEventAlreadyExist.id) , eventState]
            setEvents(newEvents)
            successNotify('Event edited successfuly')
            return false
        }
        setEvents(prev => [eventState,...prev])
        successNotify('Event added successfuly')
    }

    return {
        events,
        handleRemoveEvent,
        handleClearAllEvents,
        handleModifyEvent
    }
}