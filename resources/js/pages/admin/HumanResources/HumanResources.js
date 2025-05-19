import React from 'react';
import { Users, UserCheck, UserX,  FileText, Settings, UserPlus, UserPen, UserCog } from 'lucide-react';
import { Link } from 'react-router-dom';
const HumanResources = () => {
  // Mock data - replace with actual data from your backend
  const stats = {
    totalTeachers: 45,
    totalAbsenceManagers: 8,
    activeTeachers: 42,
    activeAbsenceManagers: 8,
    absentToday: 3,
    pendingRequests: 5,
    // Gender distribution data
    teachers: {
      total: 45,
      male: 28,
      female: 17
    },
    absenceManagers: {
      total: 8,
      male: 5,
      female: 3
    }
  };

  // Card configuration for gender distribution
  const genderCards = [
    {
      type: 'Teachers',
      stats: {
        total: stats.teachers.total,
        male: stats.teachers.male,
        female: stats.teachers.female
      },
      icon: UserPen,
      bgColor: 'bg-cyan-100 dark:bg-cyan-900/30',
      iconColor: 'text-cyan-600 dark:text-cyan-400'
    },
    {
      type: 'Absence Managers',
      stats: {
        total: stats.absenceManagers.total,
        male: stats.absenceManagers.male,
        female: stats.absenceManagers.female
      },
      icon: UserCog,
      bgColor: 'bg-amber-100 dark:bg-amber-900/30',
      iconColor: 'text-amber-600 dark:text-amber-400'
    }
  ];

  return (
    <div className="py-6 px-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Human Resources</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage your staff and personnel</p>
        </div>
        
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Teachers Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Teachers</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stats.totalTeachers}</h3>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 dark:text-green-400">↑ 2 new this month</span>
            <span className="mx-2 text-gray-300 dark:text-gray-600">|</span>
            <span className="text-gray-500 dark:text-gray-400">{stats.activeTeachers} active</span>
          </div>
        </div>

        {/* Absence Managers Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Absence Managers</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stats.totalAbsenceManagers}</h3>
            </div>
            <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
              <UserCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 dark:text-green-400">All active</span>
            <span className="mx-2 text-gray-300 dark:text-gray-600">|</span>
            <span className="text-gray-500 dark:text-gray-400">{stats.activeAbsenceManagers} available</span>
          </div>
        </div>

        {/* Absences Today Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Absences Today</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stats.absentToday}</h3>
            </div>
            <div className="p-3 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
              <UserX className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-red-500 dark:text-red-400">{stats.pendingRequests} pending requests</span>
            <span className="mx-2 text-gray-300 dark:text-gray-600">|</span>
            <span className="text-gray-500 dark:text-gray-400">Need attention</span>
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/humanResources/addUser/" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/50">
              <UserPlus className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
              <div >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add New Staff</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Add a new teacher or absence manager</p>
            </div>
          </div>
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/50">
              <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Staff Reports</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">View detailed staff reports</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-orange-100 dark:bg-orange-900/50">
              <Settings className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Staff Settings</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Configure staff permissions</p>
            </div>
          </div>
        </div>
      </div>
       {/* Gender Distribution Section */}
       <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Gender Distribution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {genderCards.map((card) => (
            <div key={card.type} className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${card.bgColor}`}>
                    <card.icon className={`w-5 h-5 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{card.type}</h3>
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{card.stats.total}</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-300">Male</span>
                    <span className="text-gray-900 dark:text-white font-medium">{card.stats.male}</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${(card.stats.male / card.stats.total) * 100}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-300">Female</span>
                    <span className="text-gray-900 dark:text-white font-medium">{card.stats.female}</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-pink-500 h-2 rounded-full" 
                      style={{ width: `${(card.stats.female / card.stats.total) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Staff Analytics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Staff Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className='flex items-center justify-between mb-2'>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Staff Distribution</h2>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalTeachers + stats.totalAbsenceManagers}</span>
        </div>
         
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 dark:text-gray-300">Teachers</span>
                <span className="text-gray-900 dark:text-white font-medium">{stats.totalTeachers}</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: `${(stats.totalTeachers / (stats.totalTeachers + stats.totalAbsenceManagers)) * 100}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 dark:text-gray-300">Absence Managers</span>
                <span className="text-gray-900 dark:text-white font-medium">{stats.totalAbsenceManagers}</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-purple-500 h-2 rounded-full" 
                  style={{ width: `${(stats.totalAbsenceManagers / (stats.totalTeachers + stats.totalAbsenceManagers)) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Staff Status */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Staff Status</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-300">Active Staff</span>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  {stats.activeTeachers + stats.activeAbsenceManagers} members
                </span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: '94%' }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-300">Staff Attendance Rate</span>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">98%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: '98%' }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-300">Response Time</span>
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">95%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-purple-500 h-2 rounded-full" 
                  style={{ width: '95%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default HumanResources; 