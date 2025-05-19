export const Switch = ({ checked, handleChange, label ,name}) => {
    return (
      <label className="flex items-center space-x-3 cursor-pointer ">
     
      <div
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
          checked ? "bg-purple-600" : "bg-gray-300 dark:bg-gray-600"
        }`}
      
      >
        <div
          className={`absolute top-1 left-1 size-4 bg-white rounded-full shadow-md transition-transform duration-300 ${
            checked ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </div>
      <span className=" text-sm font-semibold select-none">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={()=>handleChange(name , !checked)}
        className="hidden"
      />
    </label>
    );
  }