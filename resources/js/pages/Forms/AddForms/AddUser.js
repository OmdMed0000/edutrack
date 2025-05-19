import { BriefcaseBusiness,  KeyRound, Mail, User, UserCog, UserPen, ArrowLeft } from "lucide-react";
import {  useNavigate, useParams } from "react-router-dom";
import {Form , FormContainer} from "../../../Components/form/GlobalComponents";
import useForm from "../../../utils/Hooks/useForm";
import {  RatioField } from "../../../Components/form/RatioField";
import {  SelectField } from "../../../Components/form/Select";
import { TextField } from "../../../Components/form/Inputs";
import { PasswordField } from "../../../Components/form/Inputs";
import { DateField } from "../../../Components/form/Fields";
import ConfirmAddModal from "../../../Components/Modals/ConfirmAdding";
import { useState } from "react";

import { userValidation } from "../../../utils/formsValidation";
const add = {
  'teacher' : {
   title : 'Teacher',
   icon : <UserPen size={20} strokeWidth={3} />
  },
  'absenceManger' : {
   title : 'Absence Manager',
   icon : <UserCog size={20} strokeWidth={3} />
  }
}
export default function AddUser(){
  const {role} = useParams()
  const nv= useNavigate()
  const [isConfirmAddingOpen, setIsConfirmAddingOpen] = useState(false);

  const initialValues = {
    fullName : '',
    birthdate : '',
    gender : 'Male',
    matricule : '',
    email : '',
    role : !role ? '' : add[role].title ,
    password : '',
    confirmPassword : ''
  }

  const roles = ['Absence Manager','Teacher'].map(role => ({value : role,option : role}))
  const {values,errors,handleChange,handleFocus,handleSubmit,isSubmitDisabled,resetForm}= useForm(initialValues,userValidation,'add')
  
  const onSubmit = ()=>{
    setIsConfirmAddingOpen(true)
  }
  const handleConfirm = ()=>{
    localStorage.setItem('toastMessage', 'user added seccussfully');
    resetForm()
    nv(-1)
  }

  const handleClose = ()=>{
    resetForm()
    setIsConfirmAddingOpen(false)
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
            {!role ? <User size={24} strokeWidth={2.5} /> : add[role].icon}
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Add new {!role ? 'User' : add[role].title}</h1>
          </div>
        </div>
    
        <Form
           submitBtnIsDisabled={isSubmitDisabled()}
           submitBtnTitle={'Add User'}
           submitFunction={handleSubmit(onSubmit)}
           maxWidth="md:max-w-3xl pb-4"
        >
          <div className="  w-full space-y-4">
            {/* personal info */}
            <FormContainer title="Personal Information" icon={User}>
                <TextField 
                  error={errors.fullName}
                  name={'fullName'}
                  label={'Full Name'}
                  value={values.fullName}
                  placeHolder={"user's full name"}
                  icon={User}
                  handleChange={handleChange}
                  handleFocus={handleFocus}
                />

                <DateField 
                  name={'birthdate'}
                  label={'Birth Date'}
                  handleChange={handleChange}
                  error={errors.birthdate}
                  value={values.birthdate}
                  placeholder={'Select user\'s birth date'}
                  handleFocus={handleFocus}
                />
                <RatioField 
                    name={'gender'}
                    label={'Gender'}
                    items={['Male','Female']}
                    handleChange={handleChange}
                    value={values.gender}
                />
               
            </FormContainer>

            {/* Professional info */}
            <FormContainer title="Professional Information" icon={BriefcaseBusiness}>
                
                <TextField 
                  type="email"
                  error={errors.email}
                  name={'email'}
                  label={'Professional Email'}
                  value={values.email}
                  handleChange={handleChange}
                  handleFocus={handleFocus}
                  placeHolder={"User's professional email"}
                  icon={Mail}
               
                />
                <div className=' flex  gap-2 w-full'>
                  <TextField 
                    error={errors.matricule}
                    name={'matricule'}
                    label={'Matricule'}
                    value={values.matricule}
                    handleChange={handleChange}
                    handleFocus={handleFocus}
                    placeHolder={"User's matricule"}
                    icon={KeyRound}
                
                  />
                  {
                    !role &&
                    <SelectField
                      label={'Role'}
                      name={'role'}
                      value={values.role}
                      placeholder={'Select user role'}
                      handleChange={handleChange}
                      items={roles}
                    />
                    }

                </div>
                <div className=' flex  gap-2 w-full'>
                <PasswordField 
                    error={errors.password}
                    name={'password'}
                    label={'Password'}
                    value={values.password}
                    handleChange={handleChange}
                    handleFocus={handleFocus}
                    placeHolder={"Enter users's password"}
                 
                 
                />
                <PasswordField 
                    error={errors.confirmPassword}
                    name={'confirmPassword'}
                    label={'Confirm Password '}
                    value={values.confirmPassword}
                    handleChange={handleChange}
                    handleFocus={handleFocus}
                    placeHolder={"Confirm user's password"} 
                />
                </div>
            </FormContainer>
          </div>
        </Form>
        
        <ConfirmAddModal 
          isOpen={isConfirmAddingOpen} 
          onClose={handleClose} 
          onConfirm={handleConfirm} 
          itemName={role ? (add[role].title || values.role) : 'User'}
          confirmText={`Add ${role ? (add[role].title || values.role) : 'User'}`}
          cancelText="Cancel"
        />
      </>
    );
}

