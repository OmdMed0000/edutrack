import { School, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {Form , FormContainer} from "../../../Components/form/GlobalComponents";
import useForm from "../../../utils/Hooks/useForm";
import { TextField } from "../../../Components/form/Inputs";
import ConfirmAddModal from "../../../Components/Modals/ConfirmAdding";
import { useState } from "react";


export default function AddRoom() {
  const [isConfirmAddingOpen,setIsConfirmAddingOpen] = useState(false)
  const nv = useNavigate();
  const initialValues = {
    roomName: ''
  }
  const validation = {
    roomName: {
      message: 'The room name should not contain symbols ',
      regex: /^[A-Za-z0-9]+(?:\s[A-Za-z0-9]+)*$/,
    }
  }
  const { values, errors, handleChange, handleFocus, handleSubmit, resetForm,isSubmitDisabled } = useForm(initialValues, validation,'add')

  const onSubmit = ()=>{
    setIsConfirmAddingOpen(true)
  }
  const handleConfirm = ()=>{
    localStorage.setItem('toastMessage', 'room added seccussfully');
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
          <School size={24} strokeWidth={2.5} />
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Add new Room</h1>
        </div>
      </div>
      <ToastContainer pauseOnHover={false} closeButton={false} />
      <Form 
        submitBtnIsDisabled={isSubmitDisabled()}
        submitBtnTitle={'Add Room'}
        submitFunction={handleSubmit(onSubmit)}
      >
        <FormContainer title={'Room Information'} icon={School}>
          <TextField 
            error={errors.roomName}
            name={'roomName'}
            label={'Room Name'}
            value={values.roomName}
            handleChange={handleChange}
            handleFocus={handleFocus}
            placeHolder={"room's name"}
            icon={School}
          />
        </FormContainer>
      </Form>
      <ConfirmAddModal 
        isOpen={isConfirmAddingOpen} 
        onConfirm={handleConfirm} 
        onClose={handleClose} 
        itemName={'room'}
        confirmText="Confirm room adding"
        cancelText="Cancel adding" 
      />
    </>
  );
}