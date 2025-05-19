import { CalendarFold, Clock, Users, AlertCircle, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Historiques() {
  // Example data - replace with actual data from your backend
  const stats = {
    totalSchedules: 156,
    totalAbsences: 89,
    activeSchedules: 12,
    pendingAbsences: 5,
    scheduleTrend: "+12%",
    absenceTrend: "-5%"
  };

  return (
    <div className="p-6 space-y-6">
      

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Schedules Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <CalendarFold size={20} className="text-purple-500" />
            </div>
            <span className="text-sm font-medium text-green-500 flex items-center gap-1">
              <ArrowUpRight size={16} />
              {stats.scheduleTrend}
            </span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
            {stats.totalSchedules}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Total Schedules
          </p>
        </div>

        {/* Total Absences Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <AlertCircle size={20} className="text-red-500" />
            </div>
            <span className="text-sm font-medium text-red-500 flex items-center gap-1">
              <ArrowDownRight size={16} />
              {stats.absenceTrend}
            </span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
            {stats.totalAbsences}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Total Absences
          </p>
        </div>

        {/* Active Schedules Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Clock size={20} className="text-blue-500" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
            {stats.activeSchedules}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Active Schedules
          </p>
        </div>

        {/* Pending Absences Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <Users size={20} className="text-yellow-500" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
            {stats.pendingAbsences}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pending Absences
          </p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {/* Example activity items - replace with actual data */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
              <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <CalendarFold size={20} className="text-purple-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  New schedule created for Class A
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  2 hours ago
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
              <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <AlertCircle size={20} className="text-red-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Absence recorded for John Doe
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  4 hours ago
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Clock size={20} className="text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Schedule updated for Class B
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  5 hours ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 