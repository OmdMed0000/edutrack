const strokeWidth = 15;

const HalfDonutChart = ({ data }) => {
  const percentage = Math.round(data.currentValue * 100 / data.maxValue);

  // Calculate the arc path for the progress
  const calculateProgressArc = (value, maxValue) => {
    if (value === 0) {
      return {
        display: "none"
      };
    }

    const radius = 80;
    const circumference = Math.PI * radius;
    const dashLength = circumference * (value * 100 / maxValue) / 100;

    return {
      strokeDasharray: `${dashLength} ${circumference}`,
      strokeDashoffset: 0,
      display: "block"
    };
  };

  const arcProgress = calculateProgressArc(data.currentValue, data.maxValue);

  return (
    <div className="flex flex-col w-full space-y-4">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
            <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400"></div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {data.groupName}
          </h3>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
            {data.currentValue}
          </span>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            / {data.maxValue} Hours
          </span>
        </div>
      </div>

      {/* Chart Section */}
      <div className="relative w-full h-32 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 200 110">
          {/* Background arc */}
          <path
            d="M20 100 A80 80 0 0 1 180 100"
            fill="none"
            className="stroke-gray-100 dark:stroke-gray-700"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          
          {/* Progress arc */}
          <path
            d="M20 100 A80 80 0 0 1 180 100"
            fill="none"
            className="stroke-purple-600 dark:stroke-purple-500"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={arcProgress}
          />
        </svg>

        {/* Percentage Display */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {percentage}%
          </span>
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
            Progress
          </span>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400"></div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Hours per week
          </span>
        </div>
        <span className="text-sm font-semibold text-gray-900 dark:text-white">
          {data.hoursPerWeek}
        </span>
      </div>
    </div>
  );
};

export default HalfDonutChart;
