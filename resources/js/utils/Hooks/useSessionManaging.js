
// useSessionManagement.js
import { useState } from 'react';
import { successNotify } from '../../Components/Common/Toast'; // Adjust import path as needed

export const useSessionManagement = (initialSchedule = [],modal, versioning ) => {
    const {closeModal,closeAllModals} = modal;
    const {addVersion,resetScheduleVersions} = versioning;
  const [schedule, setSchedule] = useState(initialSchedule);
  const [selectedSession, setSelectedSession] = useState(null);
  const [selectedSessionToCopy, setSelectedSessionToCopy] = useState(null);
  const [isScheduleClearedTemporarly, setIsScheduleClearedTemporarly] = useState({
    is_temporary: false,
    start_date: null,
    end_date: null
});
   

  
  // Add or update a session
  const addSession = (e ,sessionState) => {
    e.preventDefault();

    const updatedSession = {
      ...sessionState,
      idSession: sessionState.idSession ? sessionState.idSession : new Date().getTime(),
      status: sessionState.is_temporary ? 'temporary' : 'active',
      original_group_name: sessionState.is_temporary && selectedSession ? selectedSession.group_name : null,
      original_room_name: sessionState.is_temporary && selectedSession ? selectedSession.room_name : null,
      original_type: sessionState.is_temporary && selectedSession ? selectedSession.type : null,
      start_date: !sessionState.is_temporary ? null : sessionState.start_date,
      end_date: !sessionState.is_temporary ? null : sessionState.end_date
    };

    const newSchedule = [
      ...schedule.filter(session => session.idSession !== updatedSession.idSession), 
      updatedSession
    ];
    
    setSchedule(newSchedule);
    addVersion(newSchedule);
    
    setSelectedSession(null);
    successNotify('Session added successfully');
    handleCancel();

    return newSchedule;
  };

  // Delete a session
  const deleteSession = (e,sessionDeleteState = {}) => {
    e.preventDefault();

    if (!selectedSession) return schedule;
    
    let newSchedule;
    
    if (sessionDeleteState?.is_temporary && selectedSession?.status === 'active') {
      const updatedSession = {
        ...selectedSession,
        status: 'deleted',
        is_temporary: sessionDeleteState.is_temporary,
        start_date: sessionDeleteState.start_date,
        end_date: sessionDeleteState.end_date
      };
      newSchedule = [
        ...schedule.filter(session => session.idSession !== updatedSession.idSession), 
        updatedSession
      ];
    } else {
      newSchedule = schedule.filter(session => session.idSession !== selectedSession.idSession);
    }
    
    setSchedule(newSchedule);
    addVersion(newSchedule);
    setSelectedSession(null);
    successNotify('Session deleted successfully');
    closeAllModals();
    return newSchedule;
  };

  // Restore a session to its original state
  const restoreToOriginal = (idSession) => {
    const sessionToRestore = schedule.find(session => session.idSession === idSession);
    
    if (!sessionToRestore) return schedule;
    
    const updatedSession = {
      ...sessionToRestore,
      group_name: sessionToRestore.original_group_name,
      room_name: sessionToRestore.original_room_name,
      type: sessionToRestore.original_type,
      status: 'active',
      start_date: null,
      end_date: null,
      is_temporary: false,
      original_group_name: null,
      original_room_name: null,
      original_type: null
    };

    const newSchedule = [
      ...schedule.filter(session => session.idSession !== idSession),
      updatedSession
    ];
    
    setSchedule(newSchedule);
    versioning.addVersion(newSchedule);
    successNotify('Session restored successfully');
    closeAllModals();
    return newSchedule;
  };

  // Restore a temporary session to active
  const restoreSession = (idSession) => {
    const sessionToRestore = schedule.find(session => session.idSession === idSession);
    
    if (!sessionToRestore) return schedule;
    
    const updatedSession = {
      ...sessionToRestore,
      status: 'active',
      start_date: null,
      end_date: null,
      is_temporary: false
    };

    const newSchedule = [
      ...schedule.filter(session => session.idSession !== idSession),
      updatedSession
    ];
    
    setSchedule(newSchedule);
    addVersion(newSchedule);
    successNotify('Session restored successfully');
    closeAllModals();
    return newSchedule;
  };

  // Copy a session
  const copySession = () => {
    if (!selectedSession) return;
    setSelectedSessionToCopy(selectedSession);
    successNotify('Session copied successfully');
    closeModal('contextMenu');
  };

  // Cut a session
  const cutSession = () => {
    if (!selectedSession) return;
    
    const newSchedule = schedule.filter(session => session.idSession !== selectedSession.idSession);
    setSchedule(newSchedule);
    addVersion(newSchedule);
    setSelectedSessionToCopy(selectedSession);
    setSelectedSession(null);
    successNotify('Session cut successfully');
    closeModal('contextMenu');
    return newSchedule;
  };

  // Paste a session
  const pasteSession = () => {
    if (!selectedSessionToCopy) return schedule;
    
    
    if (!selectedSession) return schedule;
    
    const newSession = {
      ...selectedSessionToCopy,
      day_of_week: selectedSession.day_of_week,
      start_time: selectedSession.start_time,
      end_time: selectedSession.end_time,
      idSession: new Date().getTime(),
    };

    const newSchedule = [...schedule, newSession];
    setSchedule(newSchedule);
    addVersion(newSchedule);
    setSelectedSessionToCopy(null);
    successNotify('Session pasted successfully');
    closeModal('contextMenu');
    return newSchedule;
  };

  // Replace a session
  const replaceSession = () => {
    if (!selectedSession || !selectedSessionToCopy) return schedule;
    
    const filteredSchedule = schedule.filter(session => session.idSession !== selectedSession.idSession);
    const newSession = {
      ...selectedSessionToCopy,
      day_of_week: selectedSession.day_of_week,
      start_time: selectedSession.start_time,
      end_time: selectedSession.end_time,
      idSession: new Date().getTime(),
    };
    
    const newSchedule = [...filteredSchedule, newSession];
    setSchedule(newSchedule);
    versioning.addVersion(newSchedule);
    setSelectedSessionToCopy(null);
    successNotify('Session replaced successfully');
    closeModal('contextMenu');
    return newSchedule;
  };

  // Clear the entire schedule
  const clearSchedule = (e,scheduleDeleteState = {}) => {
    e.preventDefault();
    const { is_temporary, start_date, end_date } = scheduleDeleteState;
    
    if (is_temporary) {
      setIsScheduleClearedTemporarly({
        is_temporary: true,
        start_date,
        end_date
      });
      const newSchedule = schedule.map(session => ({
        ...session, 
        status: 'deleted', 
        start_date, 
        end_date,
        is_temporary: true
      }));
      
      setSchedule(newSchedule);
      addVersion(newSchedule);
      successNotify('Schedule cleared temporarly successfully');
      closeAllModals();
      return newSchedule;
    }
    
    setSchedule([]);
    resetScheduleVersions([]);
    successNotify('Schedule cleared successfully');
    closeAllModals();
    return [];
  };

  // Restore the entire schedule
  const restoreSchedule = () => {
    const newSchedule = schedule.map(session => ({
      ...session, 
      status: 'active', 
      start_date: null, 
      end_date: null, 
      is_temporary: false
    }));

    setIsScheduleClearedTemporarly({
      is_temporary: false,
      start_date: null,
      end_date: null
    });
    
    setSchedule(newSchedule);
    resetScheduleVersions(newSchedule);
    successNotify('Schedule restored successfully');
    return newSchedule;
  };

   // Handle cancel action
    const handleCancel = () => {
        setSelectedSession(null);
       
        closeAllModals();
    };

    
  
  return {
    schedule,
    setSchedule,
    selectedSession,
    setSelectedSession,
    selectedSessionToCopy,
    setSelectedSessionToCopy,
    isScheduleClearedTemporarly,
    setIsScheduleClearedTemporarly,
    addSession,
    deleteSession,
    restoreToOriginal,
    restoreSession,
    copySession,
    cutSession,
    pasteSession,
    replaceSession,
    clearSchedule,
    restoreSchedule,
    handleCancel,
  };

}   

export default  useSessionManagement;
