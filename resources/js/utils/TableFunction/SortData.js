export const sortFunction = (data,sort)=>{
    if(!sort.field) return data;
    const sortedData = [...data].sort((a,b)=>sortList(a,b,sort.field,sort.order))
    return sortedData
}




function numberSorting (a,b,mode) {
    if (!mode) return 0;

    
    return mode === 'asc' ? a - b : b - a
  }
   function  stringsSotring (a,b,mode){
    if (!mode) return 0;

    const nameA = String(a).toLowerCase(); // ignore upper and lowercase
    const nameB = String(b).toLowerCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return mode === 'asc' ? -1 : 1;
    }
    if (nameA > nameB) {
      return mode === 'asc' ? 1 : -1;
    }
  
    // names must be equal
    return 0;
  }
export function sortList  (a,b ,field , order){
    return isNaN(a[field]) ? 
    stringsSotring(a[field],b[field],order)
    : numberSorting(a[field],b[field],order)
}
