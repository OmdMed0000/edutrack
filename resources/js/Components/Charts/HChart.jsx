export default function HChart({data}){
    return (
        <>
            <div className=" p-3  space-y-4 rounded-xl w-full pt-12  min-h-64">
                {data.map((d, index) => (
                    <div key={index} className=" flex flex-row gap-1  justify-end items-center  h-full w-full " >
                        <span className=" uppercase  text-gray-700 font-semibold text-sm dark:text-gray-50 min-w-24">{d.total} {d.name}</span>
                        <div className=" flex gap-2 duration-150 h-16 w-full"  >
                            {d.justified !== 0 && 
                                <div className=" items-center justify-center flex bg-emerald-300 duration-500 rounded-md h-full text-lg font-bold text-emerald-900" style={{ width: `${d.justified * 100 / d.total}%`}} >
                                    {d.justified && d.justified}
                                </div>
                            }
                            {d.notJustified !== 0 && 
                                <div className="bg-yellow-300 flex items-center justify-center  duration-500 rounded-md h-full text-lg font-bold text-yellow-900" style={{ width: `${d.notJustified * 100 / d.total}%`}} >
                                    {d.notJustified }
                                </div>
                            }
                        </div>             
                    </div>            
                ))}
            </div>
            {/* Updated Legend Design */}
            <div className="flex flex-wrap justify-center gap-4 px-4 mb-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                    <span className="size-3 rounded-full bg-emerald-300 dark:bg-green-300"></span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Justified</span>
    
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                    <span className="size-3 rounded-full bg-yellow-300"></span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Unjustified</span>
 
                </div>
            </div>
        </>
    )
}