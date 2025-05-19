import { BriefcaseBusiness,  KeyRound, Mail, User, Wand  } from "lucide-react";
import {  useNavigate, } from "react-router-dom";
import {Form , FormContainer} from "../../../../Components/form/GlobalComponents";
import useForm from "../../../../utils/Hooks/useForm";
import {  RatioField } from "../../../../Components/form/RatioField";
import { CustomSelect } from "../../../../Components/form/CustomSelect";
import { DateField } from "../../../../Components/form/Fields";
import {  TextField,PasswordField } from "../../../../Components/form/Inputs";
import ConfirmAddModal from "../../../../Components/Modals/ConfirmAdding";
import { useState } from "react";
import { calculateAge } from "../../../../utils/calcAge";
import { generateStrongPassword } from "../../../../utils/generatePassword";

export default function AddOneStudent({groups}){
  const [isConfirmAddingOpen,setIsConfirmAddingOpen] = useState(false)
  const nv= useNavigate()
  const initialValues = {
    fullName : '',
    birthDate : '',
    gender : '',
    cef : '',
    email : '',
    group : '',
    password : '',
    confirmPassword : ''
  }
  const validation = {
    fullName : {
      message : 'The name should not contain symbols or numbers',
      regex : /^[A-Za-z]+(\s[A-Za-z]+)*$/
    },
    birthDate : {
      message : 'The age should be between 18 and 65',
      validateFunc: (birthDate) => {
        const age = calculateAge(birthDate);
        return age >= 18 && age <= 65;
      },
    },
    cef : {
      message : 'The cef should not contain symbold',
      regex : /^\d+$/
    },
    email : {
      regex : /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@ofppt-edu\.ma$/ ,
      message : 'invalid email , enter profetionnal email'
    },
    password : {
      message : 'Your password must be at least 8 characters long, and include lowercase and uppercase letters, numbers and symbols',
      regex : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,}$/
    },
    confirmPassword : {
      message : 'The passwords do not match. Please make sure both password fields are identical.',
      check : 'password'
    }
  }
 
  const {values,errors,handleChange,handleFocus,handleSubmit,resetForm,isSubmitDisabled}= useForm(initialValues,validation,'add')
  const onSubmit = ()=>{
    setIsConfirmAddingOpen(true)
  }

  const handleConfirm = ()=>{
    localStorage.setItem('toastMessage', 'student added seccussfully');
    resetForm()
    nv(-1) 
  }
  const handleClose = ()=>{
    resetForm()
    setIsConfirmAddingOpen(false)
  }
  
    return (
      <> 
        
    
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
                       name={'birthDate'}
                       label={'Birth Date'}
                       handleChange={handleChange}
                       error={errors.birthDate}
                       value={values.birthDate}
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
            <div className=' flex  gap-2 w-full'>
                  <TextField 
                    error={errors.cef}
                    name={'cef'}
                    label={'Cef'}
                    value={values.cef}
                    handleChange={handleChange}
                    handleFocus={handleFocus}
                    placeHolder={"Student's cef"}
                    icon={KeyRound}
                
                  />
                   <TextField 
                  type="email"
                  error={errors.email}
                  name={'email'}
                  label={'Professional Email'}
                  value={values.email}
                  handleChange={handleChange}
                  handleFocus={handleFocus}
                  placeHolder={"Student's professional email"}
                  icon={Mail}
               
                />
               
                 

                </div>
              <CustomSelect 
                name={'group'}
                label={'Group'}
                placeholder={'Select student group'}
                handleChange={handleChange}
                items={groups}
                value={values.group}
                position={'top'}
              />
                
               
                <div className=' flex  gap-2 w-full items-center'>
                 
                <PasswordField 
                    error={errors.password}
                    name={'password'}
                    label={'Password'}
                    value={values.password}
                    handleChange={handleChange}
                    handleFocus={handleFocus}
                    placeHolder={"Enter student's password"}
                 
                 
                />
                
                  <button 
                      type="button" 
                      className=" px-4 py-2.5 rounded-md flex items-center flex-1 w-full min-w-56 h-10 gap-2 text-sm font-medium translate-y-5 dark:bg-purple-950/50 dark:hover:bg-purple-900 dark:text-gray-50 dark:border-purple-600 border"
                      onClick={()=>handleChange('password',generateStrongPassword())}
                  >
                    <Wand size={18} className="dark:text-purple-500 " />
                    Generate Password

                  </button>

                </div>
  
            </FormContainer>
          </div>
        </Form>
        <ConfirmAddModal 
        isOpen={isConfirmAddingOpen} 
        onConfirm={handleConfirm} 
        onClose={handleClose} 
        itemName={'student'}
        confirmText="Confirm student adding"
        cancelText="Cancel adding" 
      />
      </>
    );
}

