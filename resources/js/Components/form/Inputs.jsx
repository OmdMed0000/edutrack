import { FieldContainer } from "./GlobalComponents"
import { useState } from "react"
import { AlertCircle, Lock, Eye, EyeOff } from 'lucide-react';

export const TextField = ({error,disabled, handleChange ,handleFocus ,value , name , placeHolder ,label ,type = 'text',icon:Icon})=>{
    return (
       <FieldContainer label={label} error={error}>
           <div className="relative">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 <Icon className={`h-5 w-5 ${error ? 'text-red-600' : 'text-gray-300 dark:text-gray-600  '} `} />
               </div>
               <input
                   type={type}
                   name={name}
                   value={value}
                   disabled={disabled}
                   placeholder={placeHolder}
                   onChange={({ target }) => handleChange(name, target.value)}
                   onFocus={() => handleFocus(name)}
                   className={`
                   bg-gray-50 dark:bg-gray-800/70 
                         block pl-10 px-4 py-2 w-full   appearance-none   rounded-lg 
                          
                         border ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600  '} 
                         focus:outline-none focus:ring-0 dark:focus:border-purple-600 focus:border-purple-600
                         placeholder:text-gray-300 dark:placeholder:text-gray-600 
                         disabled:opacity-50 disabled:cursor-not-allowed dark:disabled:opacity-45
                         
                     `}
                   
               />
               
               <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                   { error && <AlertCircle className="h-5 w-5 text-red-500" /> }
               </div>
           </div>
       </FieldContainer>
    )
}

export const PasswordField = ({error, handleChange ,handleFocus ,value , name , placeHolder ,label,})=>{
 const [showPassword, setShowPassword] = useState(false);
 return (
    <FieldContainer label={label} error={error}>
            <div className="relative">
 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
   <Lock className={`h-5 w-5 ${error ? 'text-red-600' : 'text-gray-300 dark:text-gray-600  '}`} />
 </div>
        <input
            type={showPassword ? 'text':'password'}
            name={name}
            value={value}
            className={`
            bg-gray-50 dark:bg-gray-800/70 
                  block pl-10 pr-14 py-2 w-full   appearance-none   rounded-lg 
                  text-gray-700 dark:text-gray-50 
                  border ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600  '}
                  focus:outline-none focus:ring-0 dark:focus:border-purple-600 focus:border-purple-600
                  placeholder:text-gray-300 dark:placeholder:text-gray-600
              `}
            placeholder={placeHolder}
            onChange={({ target }) => handleChange(name, target.value)}
            onFocus={() => handleFocus(name)}
          />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
              <button
     type="button"
     onClick={() => setShowPassword(!showPassword)}
     className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-300 hover:text-gray-700 dark:text-gray-600 dark:hover:text-gray-50 transition-colors duration-200"
   >
   {
     !value ? null : showPassword   ? 
       <EyeOff className="h-5 w-5" />
      : 
       <Eye className="h-5 w-5" />
     
   }
     
   </button>
   </div>

     </div>

    </FieldContainer>
 )
}


export const NumberField = ({name,value,handleChange,handleFocus,placeholder,error,label})=>{
    return (
      <FieldContainer label={label} error={error}>
         <input
                    type="number"
                    name={name}
                    value={value}
                    className={`
                      bg-gray-50 dark:bg-gray-800/70 
                        block px-4 py-2 w-full rounded-lg appearance-none
                      text-gray-700 dark:text-gray-50 
                        border ${error ? 'border-red-600' : 'border-gray-300 dark:border-gray-600  '}
                        focus:outline-none focus:ring-0 dark:focus:border-purple-600 focus:border-purple-600
                      placeholder:text-gray-300 dark:placeholder:text-gray-600
                    `}
                    placeholder={placeholder}
                    onChange={({ target }) => handleChange("age", target.value)}
                    onFocus={() => handleFocus("age")}
                    onKeyDown={(e) => {
                      if (e.key === "e" || e.key === "E" || e.key === ".") {
                        e.preventDefault();
                      }
                    }}
                  />
      </FieldContainer>
    )
  }