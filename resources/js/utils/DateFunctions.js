export function getActiveWeek(weeks) {
    const currentDate = new Date();
    
    
    for (let week of weeks) {
        
        
      const weekFrom = new Date(week.from);
      const weekTo = new Date(week.to);
      console.log(currentDate >= weekFrom , currentDate <= weekTo);
      

  
      if (currentDate >= weekFrom && currentDate <= weekTo) {
        return week;
      }
    }
    return null;
  }
  
export const getActiveDay = () => {
    const daysOfWeek = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
  
    return daysOfWeek[currentDate.getDay()] === 'Sunday' ? false : daysOfWeek[currentDate.getDay()];
  }
  
  
export function getWeekDates(startDate) {
    const daysOfWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const start = new Date(startDate); // Convert start date to Date object
    let weekDates = [];
  
    for (let i = 0; i < 7; i++) {
        let currentDate = new Date(start);
        currentDate.setDate(start.getDate() + i); // Add days incrementally
        if(daysOfWeek[currentDate.getDay()] === 'Sunday'){
          continue;
        }
  
        weekDates.push({
            day: daysOfWeek[currentDate.getDay()], // Get the day name
            date: currentDate.toISOString().split("T")[0] // Format YYYY-MM-DD
        });
    }
  
    return weekDates;
  }

  