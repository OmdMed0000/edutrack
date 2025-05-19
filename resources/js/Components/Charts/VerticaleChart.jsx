export default function VerticaleChart({dataa2}){
    const totalAbsence = dataa2.reduce((acc,val)=> acc + val.absence , 0)
    const totalRetard = dataa2.reduce((acc,val)=> acc + val.retard , 0)
    
    return (
        <div className="w-full h-full flex flex-col">
            {/* Chart Area */}
            <div className="flex-1 p-3 flex justify-center gap-6 w-full min-h-44">
                {dataa2.map((d, index) => {
                    const absenceSegmentHeight = `${d.absence * 100 / totalAbsence}%`
                    const lateSegmentHeight = `${d.retard * 100 / totalRetard}%`
                    return ( 
                        <div key={index} className="flex flex-col items-center min-w-16">
                            <div className="flex items-end gap-2 duration-150 h-44">
                                <div 
                                    className="bg-red-500 items-center justify-center flex dark:bg-red-300 duration-500 rounded-md w-12 text-base font-bold text-red-50 dark:text-red-700 min-h-4 transition-all hover:opacity-90" 
                                    style={{height: absenceSegmentHeight}}
                                >
                                    {d.absence}
                                </div>
                                <div 
                                    className="bg-orange-400 flex items-center justify-center duration-500 dark:bg-orange-300 rounded-md w-12 text-base font-bold text-orange-50 dark:text-orange-700 min-h-4 transition-all hover:opacity-90" 
                                    style={{height: lateSegmentHeight}}
                                >
                                    {d.retard}
                                </div>
                            </div>
                            <div className="h-7 flex justify-center items-center mt-2">
                                <span className="text-center uppercase text-sm font-semibold text-gray-700 dark:text-gray-50">
                                    {d.name}
                                </span>
                            </div> 
                        </div>  
                    )
                })}      
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4 px-4 -translate-y-9">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                    <span className="size-3 rounded-full bg-red-500"></span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Absence</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">({totalAbsence})</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                    <span className="size-3 rounded-full bg-orange-400"></span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Retard</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">({totalRetard})</span>
                </div>
            </div>
        </div>
    )
}