import { File, Upload, } from "lucide-react"
import { ToastContainer } from "react-toastify"
import {Form , FormContainer} from "../../../../Components/form/GlobalComponents"
import useForm from "../../../../utils/Hooks/useForm"
import { CustomSelect } from "../../../../Components/form/CustomSelect";
import { TextField } from "../../../../Components/form/Inputs";
import ConfirmAddModal from "../../../../Components/Modals/ConfirmAdding";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function ImportStudents({ groups }) {
  const nv = useNavigate()
  const [isConfirmAddingOpen,setIsConfirmAddingOpen] = useState(false)
  const initialValues = {
    file : '',
    group : ''
  }

  const {values,errors,handleChange,handleSubmit,resetForm,isSubmitDisabled}= useForm(initialValues,{},'add')

    const onSubmit = () => {
      setIsConfirmAddingOpen(true)
    };

  const handleConfirm = ()=>{
    localStorage.setItem('toastMessage', 'students imported seccussfully');
    resetForm()
    nv(-1)
  }
  const handleClose = ()=>{
    resetForm()
    setIsConfirmAddingOpen(false)
  }

  return (
    <>
      <ToastContainer pauseOnHover={false} closeButton={false} />
      <Form
           submitBtnIsDisabled={isSubmitDisabled()}
           submitBtnTitle={'Import Students'}
           submitFunction={handleSubmit(onSubmit)}
           maxWidth="md:max-w-3xl pb-4"
        >
          <div className="  w-full space-y-4">
            {/* personal info */}
            <FormContainer title="Import Students" icon={Upload}>
                <TextField 
                  error={errors.file}
                  name={'file'}
                  label={'File'}
                  value={values.file}
                  placeHolder={"file"}
                  icon={File}

                  handleChange={handleChange}
                  handleFocus={()=>{}}
            
                 
                  
                />
                <CustomSelect 
                  name={'group'}
                  label={'Group'}
                  placeholder={'Select students group'}
                  handleChange={handleChange}
                  items={groups}
                  value={values.group}
                  position={'top'}
                />
                    

               
            </FormContainer>


          </div>
        </Form>
        <ConfirmAddModal 
        isOpen={isConfirmAddingOpen} 
        onConfirm={handleConfirm} 
        onClose={handleClose} 
        itemName={'students'}
        confirmText="Confirm students importing"
        cancelText="Cancel importing" 
      />
    </>
  );
}