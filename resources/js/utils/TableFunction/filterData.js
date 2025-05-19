export const filterFunction = (data,searchBy,searchQuery,activeFilters)=>{
    const filtredData =     data.filter(row => {
      // Search functionality
      const matchesSearch = searchBy?.some(field => 
        String(row[field] || '').toLowerCase().startsWith(searchQuery.toLowerCase())
      ) || searchQuery === '';
  
      // Filter functionality
      const matchesFilters = Object.entries(activeFilters).every(([field, value]) => {
        if (!value) return true;
  
        // Handle range filters (age, totalAbsence)
        if (field === 'minAge') return row.age >= value;
        if (field === 'maxAge') return row.age <= value;
        if (field === 'minTotalAbsence') return row.totalAbsence >= value;
        if (field === 'maxTotalAbsence') return row.totalAbsence <= value;
        if (field === 'minNumberStudents') return row.numberStudents >= value;
        if (field === 'maxNumberStudents') return row.numberStudents <= value;
  
        // Handle date range filters
        if (field === 'from') {
          const fromDate = new Date(value);
          const rowDate = new Date(row.date);
          return rowDate >= fromDate;
        }
        if (field === 'to') {
          const toDate = new Date(value);
          const rowDate = new Date(row.date);
          return rowDate <= toDate;
        }
  
        // Handle exact match filters (gender, status, justified)
        if (['gender', 'status', 'justified'].includes(field)) {
          return String(row[field]) === String(value);
        }
  
        // Handle select filters (filiere, year, niveau, group)
        if (['filiere', 'year', 'niveau', 'group'].includes(field)) {
          return String(row[field]) === String(value);
        }
  
        // Default string includes filter for other fields
        return String(row[field] || '').toLowerCase().startsWith(String(value).toLowerCase());
      });
  
      return matchesSearch && matchesFilters;
    });
    return filtredData

}
