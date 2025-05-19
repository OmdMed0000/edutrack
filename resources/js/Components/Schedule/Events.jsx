import { Pen,Trash2 } from "lucide-react"
import useEventManagement from "../../utils/Hooks/useEventManagement"
import { useModalState } from "../../utils/Hooks/useModalState"
import EventManaging from "../../Pages/admin/SchoolsResources/Schedules/modals/EventManagingModal"
import DeleteModal from "../Modals/DeleteModal"
import { useState } from "react"
export default function Events ({name}) { 
    const {events, handleClearAllEvents, handleModifyEvent,handleRemoveEvent} = useEventManagement([])
    const { closeModal,openModal,getModalState} = useModalState()

    const [selectedEvent,setSelectedEvent] = useState(null)
   
    const isEventsNotEmpty = events.length > 0

    const cancelDeleteModal = ()=>{
        closeModal('delete item')
        setSelectedEvent(null)
    }
    const deleteAll = ()=>{
        handleClearAllEvents()
        cancelDeleteModal()
    }
    const deleteEvent = () =>{
        handleRemoveEvent(selectedEvent?.id)
        cancelDeleteModal()
    }
    return (
    <>
        <EventManaging 
            handleSubmit={handleModifyEvent}
            value = {selectedEvent}
            setEvent = {setSelectedEvent}
        />
        <div className='w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 mt-4'>
            <div className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div>
                    <h1 className='text-lg text-gray-700 dark:text-gray-50 font-bold '>{name} Events</h1> 
                    <p className='text-sm font-medium text-gray-300 dark:text-gray-600'>Manage upcoming events</p>
                </div>
                <div className="flex items-center gap-2">
                    
                    {
                        isEventsNotEmpty &&
                        <button
                            onClick={()=>openModal('delete item')}
                            className="px-2 py-1 flex items-center gap-2 rounded-lg bg-red-100 dark:bg-red-900/50 
                                            text-red-600 dark:text-red-400 
                                            hover:bg-red-200 dark:hover:bg-red-900"
                        >
                            <Trash2 size={18}/>
                            Remove All Events
                        </button>
                    }
                    

                </div>
                
            
            </div>
            {
                isEventsNotEmpty ?
                <div className='grid grid-cols-1 gap-3 p-6'>
                    {
                        events.map (
                            event => <Event key={event.id} event={event} modal={openModal} setEvent={setSelectedEvent}/>
                        )
                    }
                </div>
                :
                <p className=" text-center font-medium text-gray-300 dark:text-gray-600 py-3">No upcoming Events</p>
                
            }
        </div>
        {
            getModalState('delete item') &&  (
                selectedEvent?.id ?
                <DeleteModal 
                    name={'event'}
                    resetModal={cancelDeleteModal}
                    itemName={selectedEvent?.eventName}
                    handleDelete={deleteAll}
                />
                :
                <DeleteModal 
                    name={'events'}
                    resetModal={cancelDeleteModal}
                    itemName={'all events'}
                    handleDelete={deleteEvent}
                />
            )
        }
                
        

    </>
    )
}


const Event = ({event,setEvent,modal}) =>{
    const {eventName,fromDate , toDate} = event
    const manageRemove = () => {
        setEvent(event)
         modal('delete item')

    }
    return (
        <div className='p-2 rounded-lg flex items-center justify-between gap-3 min-w-20 border text-gray-700 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 dark:border-gray-600 dark:hover:border-purple-700 hover:border-purple-500 '>
                <div>
                    <span className=' font-medium mr-3'>{eventName}</span>
                    <span className=" text-sm font-medium text-gray-400 dark:text-gray-500"> {fromDate} - {toDate}</span>

                </div>
            
                <div className="flex items-center gap-2">
                    <button
                        onClick={()=>setEvent(event)}
                        className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/50 
                            text-purple-600 dark:text-purple-400 
                            hover:bg-purple-200 dark:hover:bg-purple-900"
                    >
                        <Pen size={18} />
                    </button>
                    
                    <button
                        onClick={manageRemove}
                        className="p-2 rounded-full bg-red-100 dark:bg-red-900/50 
                            text-red-600 dark:text-red-400 
                            hover:bg-red-200 dark:hover:bg-red-900"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>

        </div>
    )
}