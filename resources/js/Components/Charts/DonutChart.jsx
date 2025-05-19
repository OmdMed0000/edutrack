const size = 180; // Increased size for better visibility
const strokeWidth = 20; // Increased stroke width for better proportions
const center = size / 2;
const radius = center - strokeWidth / 2;
const circumference = 2 * Math.PI * radius;
const gap = 0.05; // Significantly increased gap size

export default function DonutCHart({ data, style }) {
  // Filter out zero values and calculate total
  const newData = data.filter(d => d.value !== 0);
  const total = newData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="h-full flex flex-col items-center gap-6">
      <div className="relative size-[180px] group">
        <svg className="w-full h-full transform -rotate-90 relative">
          {/* Background circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            className="stroke-gray-100 dark:stroke-gray-700/30"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
          />
          {/* Segment circles */}
          {newData.map((item, index) => (
            <circle
              key={index}
              cx={center}
              cy={center}
              r={radius}
              className={`${style?.[item.type]?.stroke} transition-all duration-500 ease-out hover:opacity-90`}
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              style={getSegmentProps(item.value, index, newData, total)}
            />
          ))}
        </svg>
        
        {/* Center content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center">
          <span className="text-4xl 2xl:text-6xl font-bold text-gray-900 dark:text-white">{total}</span>
          <span className="text-sm 2xl:text-base mt-1 font-medium text-gray-500 dark:text-gray-400">Total</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {data.map((d) => (
          <div 
            key={d.type} 
            className="flex items-center gap-2 px-3 py-1.5  text-sm 2xl:text-lg rounded-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
          >
            <span className={`size-3 2xl:size-5 rounded-full ${style?.[d.type]?.style}`}></span>
            <span className=" font-medium text-gray-700 dark:text-gray-300">{d.type}</span>
            <span className=" text-gray-500 dark:text-gray-400">({d.value})</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const getSegmentProps = (value, index, newData, total) => {
  const totalGaps = newData.length === 1 ? 0 : newData.length * gap;
  const availableCircumference = circumference * (1 - totalGaps);
  const prevSegments = newData.slice(0, index).reduce((acc, item) => acc + item.value, 0);
  
  const gapOffset = index * gap * circumference;
  const valueOffset = (prevSegments / total) * availableCircumference;
  const startAngle = gapOffset + valueOffset;
  const endAngle = startAngle + ((value / total) * availableCircumference);
  
  return {
    strokeDasharray: `${(endAngle - startAngle)} ${circumference}`,
    strokeDashoffset: -startAngle,
    transform: 'rotate(0deg)',
  };
};
