import { useState, useRef } from "react";
import SearchBar from "../../../../Components/Common/SearchBar";
import HalfDonutChart from "../../../../Components/Charts/HalfDonutChart";
import { progressData } from "../../../../Data/progressData";
import {  Users, ChevronDown, Filter } from 'lucide-react';
import { Tab,TabContainer } from "../../../../Components/Common/Tab";
import useClickOutSide from "../../../../utils/Hooks/useClickOutSide";

const years = ['All', 'First Year', 'Second Year', 'Third Year'];
const tabs = ['All', 'Not Started', 'Incomplited', 'Complited'];

export default function TrackProgress() {
    const [search, setSearch] = useState('');
    const dropDownRef = useRef(null);
    const [activeSection, setActiveSection] = useState('All');
    const [year, setYear] = useState('All');
    const [isYearFilterDropDownActive, setIsYearFilterDropDownActive] = useState(false);

    // Get current date
    const handleSearch = (value) => setSearch(value);

    const handleChangeYear = (Year) => {
        setYear(Year);
        setIsYearFilterDropDownActive(false);
    };

    const filtredData = progressData.filter(item => {
        const filterByStatus = activeSection === 'All' ? item : item.status === activeSection;
        const filtredBySearch = item.groupName.toLowerCase().startsWith(search);
        const filterByYear = year === 'All' ? item : item.year === year;
        return filterByStatus && filtredBySearch && filterByYear;
    });

    useClickOutSide(()=>setIsYearFilterDropDownActive(false),dropDownRef);

    return (
        <div className="max-w-7xl mx-auto space-y-8 px-8 py-4">
            {/* Header Section */}
            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                            <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                Mr.Daaif Progress
                            </h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Track and monitor group progress
                            </p>
                        </div>
                    </div>
                    
                </div>

                <div className="flex items-center justify-between">
                    <TabContainer>
                        {tabs.map((tab, index) => (
                            <Tab key={index} section={tab} activeSection={activeSection} setSection={setActiveSection} />
                        ))}
                       
                      
                    </TabContainer>
                    
                    <div className="flex items-center gap-3">
                        <SearchBar
                            searchTerm={search}
                            handleChange={handleSearch}
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
                    </div>
                </div>
            </div>

            {/* Content Section */}
            {filtredData.length ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtredData.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 shadow-sm hover:shadow-md transition-shadow">
                            <HalfDonutChart data={item} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400 font-medium">
                        No results found. Try adjusting your search or filter criteria.
                    </p>
                </div>
            )}
        </div>
    );
}

