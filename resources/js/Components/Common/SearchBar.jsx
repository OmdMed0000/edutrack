import { Search,X } from "lucide-react"
export default function SearchBar({searchTerm,handleSearch}){
    return (
        
        <div className="relative min-w-64">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-purple-700 bg-white hover:bg-gray-50 dark:hover:bg-gray-700 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
          value={searchTerm}
          onChange={({target}) => handleSearch(target.value)}
        />
        <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
        {
            searchTerm &&
            <X 
                size={18} 
                onClick={()=>handleSearch("")} 
                className="absolute right-3 top-2.5 text-gray-400 hover:text-purple-700" 
            />
        }
       
      </div>
    )
}