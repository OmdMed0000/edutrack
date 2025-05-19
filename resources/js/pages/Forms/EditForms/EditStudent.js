import {  ArrowLeft,GraduationCap,PencilRuler, User } from "lucide-react";
import { useParams,useNavigate } from "react-router-dom";
import { students,groups } from "../../../Data/Users";
import useForm from "../../../utils/Hooks/useForm";
import { TextField } from "../../../Components/form/Inputs";
import { CustomSelect } from "../../../Components/form/CustomSelect";
import { RatioField } from "../../../Components/form/RatioField";
import CustomDatePicker from "../../../Components/form/CustomDatePicker";
import { ToastContainer } from "react-toastify";
import {Form , FormContainer} from "../../../Components/form/GlobalComponents";

export default function EditStudent(){
    const {cef} = useParams()
    const nv = useNavigate()
    const student = students.find(student => student.cef === cef)
    const initValues = {
      cef : student.cef,
      fullName : student.fullName,
      birthDate : student.birthDate,
      gender : student.gender,
      group : student.group
    }
    const validation = {
      cef : {
        message : 'The cef should not contain symbols or letters',
        regex : /^\d+$/
      },
      fullName : {
        message : 'The name should not contain symbols or numbers',
        regex : /^[A-Za-z]+(\s[A-Za-z]+)*$/
      },
      birthDate : {
        message : 'The age should be between 18 and 33',
        validateFunc: (value) => {
          const age = Number(value);
          return age >= 18 && age <= 60;
        },
      }
     }
    const {values,errors,handleChange,handleFocus,handleSubmit,isFormValid} = useForm(initValues,validation,'edit')
    const onSubmit = () => {
      console.log('filiere bien Editer');
    }
   
    return (
      <>
       <div className="mb-8 mt-6 px-8">
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
          <PencilRuler size={24} strokeWidth={2.5} />
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Edit Filiere</h1>
        </div>
      </div>
      <ToastContainer pauseOnHover={false} closeButton={false} />
      <Form 
        submitBtnIsDisabled={!isFormValid} 
        submitFunction={handleSubmit(onSubmit)} 
        submitBtnTitle={'Edit Student'}
        maxWidth="md:max-w-3xl"
      >
        <FormContainer title="Student Information" icon={GraduationCap}>
          
          <TextField 
            error={errors.fullName}
            name={'fullName'}
            label={'Full Name'}
            value={values.fullName}
            placeHolder={"Enter student full name"}
            icon={User}
            handleChange={handleChange}
            handleFocus={handleFocus}
          />
          <CustomDatePicker 
            error={errors.birthday}
            name={'birthday'}
            label={'Birthday'}
            value={values.birthday}
            onChange={handleChange}
            placeholder="Enter student birthday"
          />
           <RatioField 
            name={'gender'}
            label={'Gender'}
            items={['Male','Female']}
            handleChange={handleChange}
            value={values.gender}
          />
          <CustomSelect 
            name={'group'}
            label={'Group'}
            placeholder={'Select student group'}
            handleChange={handleChange}
            items={groups}
            value={values.group}
          />
        </FormContainer>
      </Form>
      </>
    );
}



