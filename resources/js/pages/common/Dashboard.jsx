import QuickActions from '../../Components/Dashboard/QiuckActions';
import AvailableRooms from '../../Components/Dashboard/AvailableRooms/AvailableRooms';
import AbsenceStatics from '../../Components/Dashboard/AbsenceStatics';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { successNotify } from '../../Components/Common/Toast';
import { Cards } from '../../Components/Dashboard/newCards';
import AbsenceByFilieres from '../../Components/Dashboard/AbsenceByFilieres';
import AbsenceRanking from '../../Components/Dashboard/AbsenceRnaking';
import Layout from '../../layouts/Layout';
export function CardsGrid() {
   const role = localStorage.getItem('userRole')
  const cardsItems ={
    'Admin' :  [

      {label : 'Absence Managers', type: 'absenceManagers', total: 7,  },
      {label : 'Teachers', type: 'teachers', total: 40,  },
      {label : 'Students', type: 'students', total: 1000,  },
      {label : 'Absence', type: 'absence', total: 3000,  },
      {label : 'Filieres', type: 'filieres', total: 12,  },
      {label : 'Groups', type: 'groups', total: 42,  },
      {label : 'Rooms', type: 'rooms', total: 19,  },
      {label : 'Schedules', type: 'schedules', total: 277  },
    ],
    'Absence Manager' : [
      {label : 'Students', type: 'students', total: 1000,  },
      {label : 'Groups', type: 'groups', total: 42,  },
      {label : 'Absence', type: 'absence', total: 300,  },
      {label : 'Late', type: 'late', total: 100,  },
      {label : 'Liste Absence', type: 'listeAbsence', total: 300,  },
      {label : 'Yesterdays Absence', type: 'yesterdaysAbsence', total: 30,  },
      {label : 'Schedules', type: 'schedules', total: 277  },
      {label : 'Pending Requests', type: 'pendingRequests', total: 10,  },
    ]
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cardsItems[role].map((card) => (
        <Cards
          key={card.type}
          type={card.type}
          total={card.total}
          label={card.label}
        />
      ))}
    </div>
  );
}

export default function Dashboard (){
  const role = localStorage.getItem('userRole')
  
  useEffect(()=>{
    const message = localStorage.getItem('toastMessage')
    
    if(message){
      successNotify(message)
      setTimeout(() => {
        localStorage.removeItem('toastMessage')
      }, 3000);
    }
  })
  return (
    <Layout>
     <div className='select-none max-w-7xl mx-auto space-y-6 pr-4 pl-10 py-6'>
      <ToastContainer pauseOnHover={false} closeButton={false} />
      <QuickActions />

      {/* <CardsGrid /> */}


      <AbsenceStatics/>

      <AbsenceByFilieres/>
      {
        role === 'Admin' && (
          <AvailableRooms/>
        )
      }

      <AbsenceRanking/>

    </div>

    </Layout>
   
  );
}      