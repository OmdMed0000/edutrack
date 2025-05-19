import { useState } from "react";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { groups } from "../../../../Data/Users";
import AddOneStudent from "./AddOneStudent";
import ImportStudents from "./ImprotStudents";
import { Tab,TabContainer } from "../../../../Components/Common/Tab";

export default function AddStudent(){
    const nv= useNavigate()
    const [addMethod,setAddMethod] = useState('Add one Student')
    
    return (
        <div className=" px-8 min-h-screen">
        <div className="mb-2 mt-4 ">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => nv(-1)}
              className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <ArrowLeft size={20} strokeWidth={2.5} />
              <span className="text-sm font-medium">Back</span>
            </button>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <GraduationCap size={24} strokeWidth={2.5} />
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Add new Student</h1>
          </div>
        </div>
        {/* form */}
        <TabContainer>
        {['Add one Student','Import many Students'].map((item,index)=>(
                <Tab key={index} section={item} activeSection={addMethod} setSection={setAddMethod}/>
            ))}

        </TabContainer>
            
      
        {
          addMethod === 'Add one Student' ? <AddOneStudent groups={groups}/> : <ImportStudents groups={groups}/>
        }
        </div>
    )
}