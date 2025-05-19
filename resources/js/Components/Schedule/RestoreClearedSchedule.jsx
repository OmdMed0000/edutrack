import { Calendar } from "lucide-react";
export default function RestoreClearedSchedule({entityName,isScheduleClearedTemporarly,restoreSchedule}) {
    const {idSession ,start_date, end_date} = isScheduleClearedTemporarly;
    return (
        <div className="flex flex-col items-center justify-center gap-6 py-8">
        <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
            <Calendar className="w-6 h-6 text-red-600 dark:text-red-400" />
        </div>
        <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
               {entityName} Schedule is temporarily Deleted 
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
                From {start_date} to {end_date}
            </p>
        </div>
        <button
            onClick={()=>restoreSchedule(idSession)}
            className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 
                rounded-lg hover:bg-blue-700 focus:ring-2 focus:outline-none 
                focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 
                transition-colors"
        >
            Restore Schedule
        </button>
</div>
    )
}
