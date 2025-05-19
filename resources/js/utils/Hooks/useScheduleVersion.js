import { useState } from "react";

const useScheduleVersions = (initialSchedule) => {
    const [activeScheduleVersion, setActiveScheduleVersion] = useState(1);
    const [scheduleVersions, setScheduleVersions] = useState([
      { id: 1, schedule: initialSchedule }
    ]);
  
    const addVersion = (schedule) => {
      const newScheduleVersion = {
        id: scheduleVersions.length + 1,
        schedule: schedule
      };
      setScheduleVersions([...scheduleVersions, newScheduleVersion]);
      setActiveScheduleVersion(newScheduleVersion.id);
    };

    const resetScheduleVersions = () => {
      setScheduleVersions([{id: 1, schedule: initialSchedule}]);
      setActiveScheduleVersion(1);
    }
  
    const goToPreviousVersion = () => {
        setActiveScheduleVersion(activeScheduleVersion - 1);
        return scheduleVersions.find(v => v.id === activeScheduleVersion - 1).schedule;
    };
  
    const goToNextVersion = () => {
        setActiveScheduleVersion(activeScheduleVersion + 1);
        return scheduleVersions.find(v => v.id === activeScheduleVersion + 1).schedule;
    };
  
    const getCurrentSchedule = () => {
      return scheduleVersions.find(v => v.id === activeScheduleVersion)?.schedule || [];
    };
    
    return {
        activeScheduleVersion,
        scheduleVersions,
        addVersion,
        goToPreviousVersion,
        goToNextVersion,
        getCurrentSchedule,
        resetScheduleVersions
      };
    }

export default useScheduleVersions;
