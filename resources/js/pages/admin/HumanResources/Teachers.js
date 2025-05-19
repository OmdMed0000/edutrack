import {users} from '../../../Data/Users'
import TableContainer from '../../../Components/table/TableContainer'
import { ModalProvider } from "../../../utils/Context/ModalContext";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { successNotify } from "../../../Components/Common/Toast";
import { TableProvider } from '../../../utils/Context/TableContext';
import { calculateAge } from '../../../utils/formsValidation';
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
     name : 'teacher',
     actions :true,
     selectabel : false,
     columns : [
       { 
         field: 'matricule', 
         header: 'Matricule',
       },
       { 
         field: 'fullName', 
         header: 'Full Name'
       },
       { 
         field: 'age', 
         header: 'Age',
         render : (row) => calculateAge(row.birthDate)
       },
       { 
         field: 'gender', 
         header: 'Gender',
       },
       { 
         field: 'email', 
         header: 'Email',
         width : '2fr'
       }
     ],
     searchBy : ['matricule','fullName'],
     filterBy : ['gender','age'],
     path : '/humanResources',
     links:{
       edit:'editUser'
     },
     modals : ['schedule','resetPassword','delete'],
     primaryKey : 'matricule'
    }
    const teachers = users.filter(user => user.role === 'teacher')
  
   return (
    <div className="py-6 px-8">
      <ToastContainer pauseOnHover={false} closeButton={false} />
        <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-50 mb-6">
          Teachers
        </h1>
        <TableProvider>
          <ModalProvider> 
            <TableContainer 
              data={teachers}
              tableConfig = {config}
              title={'Teachers'}
            />
          </ModalProvider>
        </TableProvider>
     </div>
   );
  };
