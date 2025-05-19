import { useState,useRef } from "react"
import SearchBar from "../../../Components/Common/SearchBar"
import {users,groups,filieres} from '../../../Data/Users'
import { Link } from "react-router-dom"
import { Filter,ChevronDown } from "lucide-react"
import {Select} from "../../../Components/form/Select"
import {Tab,TabContainer} from "../../../Components/Common/Tab"
const years = ['All Years', 'First Year', 'Second Year', 'Third Year'];
export default function AbsencesHistorique (){
    const [search,setSearch] = useState('')
    const teachers =  users.filter(user => user.role === 'teacher')
    const [list,setList] = useState(teachers)
    const [activeSection, setActiveSection] = useState('Teachers')
    const dropDownRef = useRef(null);
    const [year, setYear] = useState('All Years');
    const [selectedFiliere,setSelectedFiliere] = useState('All Filieres')
    const [isYearFilterDropDownActive, setIsYearFilterDropDownActive] = useState(false);
    const handleChangeYear = (Year) => {
        setYear(Year);
        setIsYearFilterDropDownActive(false);
    };
    
    const handleSearch = (value) => setSearch(value)
    const handleChangeFiliere = (filiere) => setSelectedFiliere(filiere)
    const filteredData = list.filter(item => {
        const filterByStatus = activeSection === 'Teachers' ? 'fullName' : 'libel';
        const filtredBySearch = item[filterByStatus].toLowerCase().startsWith(search.toLowerCase())
        const filterByYear = year === 'All Years' ? item : item.year === year;
        const filterByFiliere = selectedFiliere === 'All Filieres' ? item : item.filiere === selectedFiliere;
        return filtredBySearch && filterByYear && filterByFiliere;
    })
    
    const handleFilter = (section)=>{
        setSearch('')
        setActiveSection(section)
        setList(section === 'Teachers' ? teachers : groups)
        setYear('All Years')
    }
    
    return (
        <div className='select-none max-w-6xl mx-auto space-y-7 min-h-screen'>
            <h1 className="font-semibold text-2xl">Absence Historique</h1>
            <div className="w-full flex items-center justify-between gap-4">
                
                <TabContainer>
                    <Tab section={'Teachers'} activeSection={activeSection} setSection={handleFilter} />
                    <Tab section={'Groups'} activeSection={activeSection} setSection={handleFilter} />
                </TabContainer>
                <div className='flex items-center gap-4'>
                   
                    <SearchBar searchTerm={search} handleSearch={handleSearch} />
                   
                    {
                        activeSection === 'Groups' && (
                            <>
                            <Select 
                                config={{
                                    name: 'filiere',
                                    onChange: handleChangeFiliere,
                                    defaultValue: selectedFiliere,
                                    placeholder: 'Select Filiere',
                                    items: filieres
                                }}
                            />
                            <div className="relative z-50 min-w-32" ref={dropDownRef}>
                            <button
                                onClick={() => setIsYearFilterDropDownActive(!isYearFilterDropDownActive)}
                                className="flex items-center w-full justify-between gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                <div className="flex items-center gap-2">
                                    <Filter className="w-4 h-4" />
                                    {year}
                                </div>
                                <ChevronDown className={`w-4 h-4 duration-500 ${isYearFilterDropDownActive ? 'rotate-180' : ''}`} />
                            </button>
                            {isYearFilterDropDownActive && (
                                <div
                                    
                                    className="absolute right-0 mt-2 w-full border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
                                >
                                    {years.filter(item => item !== year).map((el , index) => (
                                        <button
                                            key={el}
                                            onClick={() => handleChangeYear(el)}
                                            className={`w-full px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${index === 0 ? 'rounded-t-lg' : ''} ${index === years.length - 2 ? 'rounded-b-lg' : ''}`}
                                        >
                                            {el}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                            </>
                        )
                    }
                </div>
            </div>
                    
            <div className='grid grid-cols-3 md:grid-cols-5 gap-4'>
                {
                    filteredData.map(data =>
                        <div
                        key={data.matricule || data.idGroup}
                        className='group flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 
                            border border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-500 
                            dark:hover:border-purple-500 transition-all duration-200'
                    >
                        <Link
                            to={ activeSection === 'Teachers' ? `/schoolResources/progress/teacher/${data.matricule}` : `/schoolResources/progress/group/${data.idGroup}`}
                            className='flex-1 text-gray-700 dark:text-gray-50 hover:text-purple-600 
                                dark:hover:text-purple-400 transition-colors'
                        >
                            <span className="font-medium">{data?.fullName || data?.libel}</span>
                        </Link>
                      
                    </div>
                    )
                }
            </div>
        </div>
    )
}