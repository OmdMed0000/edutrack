import { useState } from 'react';
import { TrendingUp, GraduationCap, ArrowUpDown, PencilRuler, Presentation } from 'lucide-react';

const AbsenceRanking = () => {
  // Example data - replace with your actual data
  const rankeData = {
    'groups' : [
      { name: 'Group A', absences: 45, percentage: 15 },
      { name: 'Group B', absences: 38, percentage: 12 },
      { name: 'Group C', absences: 32, percentage: 10 },
      { name: 'Group D', absences: 28, percentage: 9 },
      { name: 'Group E', absences: 25, percentage: 8 },
    ],
    'filieres':[
      { name: 'Computer Science', absences: 120, percentage: 18 },
      { name: 'Engineering', absences: 95, percentage: 15 },
      { name: 'Business', absences: 85, percentage: 13 },
      { name: 'Arts', absences: 75, percentage: 11 },
      { name: 'Science', absences: 65, percentage: 10 },
    ],
    'students':[
      { name: 'Ayoub Fikry', absences: 20, percentage: 18 },
      { name: 'Mohammed ', absences: 14, percentage: 15 },
      { name: 'Khadija', absences: 10, percentage: 13 },
      { name: 'Jawad', absences: 8, percentage: 11 },
      { name: 'Raja', absences: 7, percentage: 10 },
    ]
  }
  const [activeTab, setActiveTab] = useState('groups');
  const [showMostAbsent, setShowMostAbsent] = useState(true);

  const toggleAbsenceType = () => {
    setShowMostAbsent(!showMostAbsent);
  };

  const displayData = showMostAbsent 
    ? rankeData[activeTab]
    : [...rankeData[activeTab]].reverse();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
            <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Absence Rankings
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Top 5 {showMostAbsent ? 'most' : 'least'} absent {activeTab}
            </p>
          </div>
        </div>
        <button
          onClick={toggleAbsenceType}
          className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
        >
          <ArrowUpDown className="w-4 h-4" />
          {showMostAbsent ? 'Most Absent' : 'Least Absent'}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('groups')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'groups'
              ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
              : 'text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400'
          }`}
        >
          <Presentation className="w-4 h-4 inline-block mr-1" />
          Groups
        </button>
        <button
          onClick={() => setActiveTab('filieres')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'filieres'
              ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
              : 'text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400'
          }`}
        >
          <PencilRuler className="w-4 h-4 inline-block mr-1" />
          Filieres
        </button>
        <button
          onClick={() => setActiveTab('students')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'students'
              ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
              : 'text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400'
          }`}
        >
          <GraduationCap className="w-4 h-4 inline-block mr-1" />
          Students
        </button>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div className="space-y-3">
          {displayData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.absences} absences</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                  {item.percentage}%
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400">absence rate</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AbsenceRanking;