import QuickActions from '../../Components/Dashboard/QiuckActions';
import AvailableRooms from '../../Components/Dashboard/AvailableRooms/AvailableRooms';
import AbsenceStatics from '../../Components/Dashboard/AbsenceStatics';
import { useEffect } from 'react';
// import { ToastContainer } from 'react-toastify';
import { successNotify } from '../../Components/Common/Toast';
import { CardsGrid } from '../../Components/Dashboard/Cards';
import AbsenceByFilieres from '../../Components/Dashboard/AbsenceByFilieres';
import AbsenceRanking from '../../Components/Dashboard/AbsenceRnaking';
import Layout from '../../layouts/Layout';


export default function Dashboard ({cardsInfo}){
 
  
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
        {/* <ToastContainer pauseOnHover={false} closeButton={false} /> */}
        <QuickActions />

        <CardsGrid  cardsInfo={cardsInfo}/>


        <AbsenceStatics/>

        <AbsenceByFilieres/>
        
        <AvailableRooms/>
        
        <AbsenceRanking/>

      </div>

    </Layout>
   
  );
}      