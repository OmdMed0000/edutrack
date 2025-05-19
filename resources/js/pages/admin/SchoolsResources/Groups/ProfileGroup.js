import {  useParams,useNavigate } from "react-router-dom"
import { groups } from "../../../../Data/Users"
import { absenceDataByGender } from "../../../../Data/AbsenceData"
import TimeFilter from "../../../../Components/form/TimeFilter"
import HChart from "../../../../Components/Charts/HChart"
import VerticaleChart from "../../../../Components/Charts/VerticaleChart"
import { useState } from "react"
import GroupSchedule from "../../../../Components/Schedule/GroupSchedule"
import DeleteModal from "../../../../Components/Modals/DeleteModal"
import { useModalContext } from "../../../../utils/Context/ModalContext"
import { Cards } from "../../../../Components/Dashboard/newCards"
import ProfileComponents from "../../../../Components/Common/ProfileComponents"
import { LeafyGreen, PencilRuler, Presentation,ArrowLeft } from "lucide-react"

const dataa = [
 
    {
        name : 'Absences',
        total : 31,
        justified : 5,
        notJustified : 26
    },
    {
        name : 'retards',
        total : 5,
        justified : 1,
        notJustified : 4
    }
 
]

const newCardsData = [
    {
        label : 'Students',
        type : 'students',
        total : 23,
    },
    {
        label : 'Absences',
        type : 'absence',
        total : 31,
    },
    {
        label : 'Lates',
        type : 'lates',
        total : 50,
    },
    {
        label : 'Teachers',
        type : 'teachers',
        total : 10,
    },
    {
        label : 'Schedules',
        type : 'schedules',
        total : 10,
    },
    {
        label : 'Listes Absence',
        type : 'filieres',
        total : 30,
    },
    {
        label : 'Modules',
        type : 'modules',
        total : 10,
    }
]

export default function ProfileGroup(){
    const [absenceByGender,setAbsenceByGender]= useState('All Time')
    const nv = useNavigate()
    const {id} =useParams()
    const group = groups.find(student => student.idGroup === Number(id))
    const {activeModal} = useModalContext()
    const [section,setSection] = useState('Group Info')
    
    
    const fields = [
        { name: 'libel', label: 'Libel', accessor: 'libel',icon : Presentation  },
        { name: 'filiere', label: 'Filiere', accessor: 'filiere',icon : PencilRuler  },
        { name: 'year', label: 'Year', accessor: 'year',icon : LeafyGreen  }
    ]
    const activeStyle = 'border-b-2 border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 font-medium';
    const desactiveStyle = 'border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200';
    const getTheStyle = (s) => s === section ? activeStyle : desactiveStyle
       const Tab = ({ section }) => {
          return (
              <button
                  onClick={() => setSection(section)}
                  className={`px-4 py-2 text-sm ${getTheStyle(section)}`}
              >
                  {section}
              </button>
          )
      }

    return (
        <>
        <div className="mb-8 mt-6 px-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => nv(-1)}
            className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <ArrowLeft size={20} strokeWidth={2.5} />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <PencilRuler size={24} strokeWidth={2.5} />
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Welcome to {group.libel} Group</h1>
        </div>
      </div>

          
                <div className=" select-none max-w-6xl mx-auto py-4 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {newCardsData.map((absence) => (
                        <Cards
                        key={absence.type}
                        type={absence.type}
                        total={absence.total}
                        label={absence.label}
                        />
                    ))}
                </div>
                <div className="flex items-center gap-2 mb-3 border-b border-gray-200 dark:border-gray-700">
                    {['Group Info', 'Group Absence Info', 'Group Schedule'].map(section => <Tab key={section} section={section} />)}
                </div>
                {
                    section === 'Group Info' && (
                        <ProfileComponents
                    item={group}
                    title="Group Information"
                    fields={fields}
                    editPath="/schoolResources/editGroup"
                    type="group"
                />
                    )
                }
                {
                    section === 'Group Absence Info' && (
                        <div className="flex flex-col lg:flex-row min-w-full gap-5">
                            <div className="relative border border-gray-300 dark:border-gray-500 rounded-md  min-h-56 px-3 py-auto pt-4 flex-1 bg-white dark:bg-gray-800 ">
                                <div className="flex items-center justify-between">
                                    <h3 className=" text-gray-700 dark:text-gray-50 px-2 py-1 ">Group Absence Info</h3>
                                    <TimeFilter />
                                </div>
                              
                                <HChart data={dataa} />
                            </div>
                            <div className=" border border-gray-300 dark:border-gray-500 rounded-md    p-5   pt-4 flex-1 bg-white dark:bg-gray-800  w-full">
                                <div className="flex items-center justify-between">
                                    <h3 className=" text-gray-700 dark:text-gray-50 px-2 py-1 ">Group Absence by gender</h3>
                                    <TimeFilter selected={absenceByGender} setNewTimeRange={setAbsenceByGender}/>
                                </div>
                                <VerticaleChart dataa2={absenceDataByGender[absenceByGender]} />
                            </div>
                        </div>
                    )
                }
                {
                    section === 'Group Schedule' && (
                      

                    <div className="relative border border-gray-300 dark:border-gray-500 rounded-md   min-h-72 px-5  pt-8 pb-4 flex-1 bg-gray-50 dark:bg-gray-900 mt-6 w-full">
                        <h3 className="absolute text-gray-700 dark:text-gray-50 px-2 py-1 border border-gray-300 dark:border-gray-500 z-30 -top-4 bg-gray-50 dark:bg-gray-800 left-4 rounded-md">Group Schedule</h3>
                        <GroupSchedule />   
                    </div>
                    )
                }
            </div>
                {
                    activeModal && <DeleteModal name='group' />
                }
 
          
           
        </>
        
      
    )
}









    