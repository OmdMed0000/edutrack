import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useModalContext } from "../../../../utils/Context/ModalContext"
import { filieres } from "../../../../Data/Users"
import { groupsAbsence, absenceDataByJystification, absenceDataByYear } from "../../../../Data/FiliereData"
import DonutCHart from "../../../../Components/Charts/DonutChart"
import HChart from "../../../../Components/Charts/HChart"
import TimeFilter from "../../../../Components/form/TimeFilter"
import BarChart from "../../../../Components/Charts/BarChart"
import DeleteModal from "../../../../Components/Modals/DeleteModal"
import { Cards } from "../../../../Components/Dashboard/newCards"
import ProfileComponents from "../../../../Components/Common/ProfileComponents"
import { BookOpen, GraduationCap, Users, ArrowLeft } from "lucide-react"

const newCardsData = [
    {
        label: 'Students',
        type: 'students',
        total: 120,
    },
    {
        label: 'Groups',
        type: 'groups',
        total: 4,
    },
    {
        label: 'Teachers',
        type: 'teachers',
        total: 15,
    },
    {
        label: 'Absences',
        type: 'absence',
        total: 45,
    }
]

export default function ProfileFiliere() {
    const nv = useNavigate()
    const { id } = useParams()
    const filiere = filieres.find(f => f.idFiliere === Number(id))
    const [absencebyJustification, setAbsenceByJustification] = useState('All Time')
    const [absenceByYear, setAbsenceByYear] = useState('All Time')
    const [absenceByGroup, setAbsenceByGroup] = useState('All Time')
    const { activeModal } = useModalContext()
    const [section, setSection] = useState('Filiere Info')

    const fields = [
        { name: 'libel', label: 'Libel', accessor: 'libel', icon: BookOpen },
        { name: 'niveau', label: 'Level', accessor: 'niveau', icon: GraduationCap },
        { name: 'numberGroup', label: 'Number of Groups', accessor: 'numberGroup', icon: Users }
    ]

    const activeStyle = 'border-b-2 border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 font-medium'
    const desactiveStyle = 'border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200'
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
                    <GraduationCap size={24} strokeWidth={2.5} />
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Welcome to {filiere?.libel}
                    </h1>
                </div>
            </div>

            <div className="select-none max-w-6xl mx-auto py-4 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {newCardsData.map((item) => (
                        <Cards
                            key={item.type}
                            type={item.type}
                            total={item.total}
                            label={item.label}
                        />
                    ))}
                </div>

                <div className="flex items-center gap-2 mb-3 border-b border-gray-200 dark:border-gray-700">
                    {['Filiere Info', 'Absence Statistics'].map(section => 
                        <Tab key={section} section={section} />
                    )}
                </div>

                {section === 'Filiere Info' && (
                    <ProfileComponents
                        item={filiere}
                        title="Filiere Information"
                        fields={fields}
                        editPath="/schoolResources/editFiliere"
                        type="filiere"
                    />
                )}

                {section === 'Absence Statistics' && (
                    <>
                        <div className="flex flex-col lg:flex-row min-w-full gap-5">
                            <div className="relative border border-gray-300 dark:border-gray-500 rounded-md min-h-56 px-3 py-auto pt-4 flex-1 bg-white dark:bg-gray-800">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-gray-700 dark:text-gray-50 px-2 py-1">Absence by Justification</h3>
                                    <TimeFilter selected={absencebyJustification} setNewTimeRange={setAbsenceByJustification} />
                                </div>
                                <HChart data={absenceDataByJystification[absencebyJustification]} />
                            </div>
                            <div className="border border-gray-300 dark:border-gray-500 rounded-md p-5 pt-4 flex-1 bg-white dark:bg-gray-800">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-gray-700 dark:text-gray-50 px-2 py-1">Absence by Year</h3>
                                    <TimeFilter selected={absenceByYear} setNewTimeRange={setAbsenceByYear} />
                                </div>
                                <DonutCHart style={null} data={absenceDataByYear[absenceByYear]} />
                            </div>
                        </div>

                        <div className="border border-gray-300 dark:border-gray-500 rounded-md p-5 pt-4 bg-white dark:bg-gray-800">
                            <div className="flex items-center justify-between">
                                <h3 className="text-gray-700 dark:text-gray-50 px-2 py-1">Groups Absence Overview</h3>
                                <TimeFilter selected={absenceByGroup} setNewTimeRange={setAbsenceByGroup} />
                            </div>
                            <BarChart data={groupsAbsence[absenceByGroup]} withModal={false} />
                        </div>
                    </>
                )}
            </div>

            {activeModal && <DeleteModal name={'filiere'} />}
        </>
    )
}









    