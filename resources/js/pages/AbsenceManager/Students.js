import {students} from '../../Data/Users'
import TableContainer from '../../Components/table/TableContainer'
import { ModalProvider } from "../../utils/Context/ModalContext";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { successNotify } from "../../Components/Common/Toast";
import { TableProvider } from '../../utils/Context/TableContext';
import { Link } from 'react-router-dom';
export default function Teachers(){
    useEffect(()=>{
      const message = localStorage.getItem('toastMessage')
      if(message){
        successNotify(message)
        setTimeout(() => {
          localStorage.removeItem('toastMessage')
        }, 3000);
        
      }
    })
    const config = {
     name : 'student',
     actions :true,
     selectabel : false,
     columns : [
       { 
         field: 'cef', 
         header: 'Cef',
       },
       { 
         field: 'fullName', 
         header: 'Full Name'
       },
       { 
         field: 'age', 
         header: 'Age',
         width : '70px'
       },
       { 
         field: 'gender', 
         header: 'Gender',
         width : '100px'
       },
       
       { 
         field: 'email', 
         header: 'Email',
         
       },
       { 
         field: 'group', 
         header: 'Group',
       },
       {
        field : 'totalAbsence',
        header : 'Total Absence'
       },
       {
        field : 'successiveAbsence',
        header : 'Successive Absence',
        width : '2fr'
       }
     ],
     searchBy : ['cef','fullName','email'],
     filterBy : ['gender','age','totalAbsence','group','successiveAbsence'],
     path : '/students',
     links:{
       edit:'editStudent',
       profile:'student'
     },
     modals : ['resetPassword','delete'],
     primaryKey : 'cef'
    }
   
  
   return (
    <div className="py-6 px-8">
      <ToastContainer pauseOnHover={false} closeButton={false} />
        <div className='flex items-center justify-between'>
            <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-50 mb-6">
                Students
            </h1>
            <Link to={`/students/addStudent`} className="px-4 py-2 rounded-lg font-medium text-sm
                        bg-purple-600 text-white hover:bg-purple-700
                        dark:bg-purple-500 dark:hover:bg-purple-600
                        transition-colors duration-200">
                        Add New Student
            </Link>

        </div>
       
        <TableProvider>
          <ModalProvider> 
            <TableContainer 
              data={students}
              tableConfig = {config}
              title={'Students'}
            />
          </ModalProvider>
        </TableProvider>
     </div>
   );
  };

