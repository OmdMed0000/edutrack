import { Presentation, School, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { filieres } from "../../../Data/Users";
import { ToastContainer } from "react-toastify";
import { CustomSelect } from "../../../Components/form/CustomSelect";
import { RatioField } from "../../../Components/form/RatioField";
import { TextField } from "../../../Components/form/Inputs";
import {Form , FormContainer} from "../../../Components/form/GlobalComponents";
import useForm from "../../../utils/Hooks/useForm";
import ConfirmAddModal from "../../../Components/Modals/ConfirmAdding";
import { useState } from "react";

export default function AddGroup() {
  const [isConfirmAddingOpen,setIsConfirmAddingOpen] = useState(false)
  const nv = useNavigate();
  const initialValues = {
    libel: '',
    year: '',
    filiere: ''
  }
  const validations = {
    libel: {
      message: 'The libel should not contain symbols',
      regex: /^[A-Za-z]+\d*$/
    }
  }

  const { values, errors, handleChange, handleFocus, handleSubmit, resetForm,isSubmitDisabled } = useForm(initialValues, validations,'add')

  const onSubmit = ()=>{
    setIsConfirmAddingOpen(true)
  }
  const handleConfirm = ()=>{
    localStorage.setItem('toastMessage', 'group added seccussfully');
    resetForm()
    nv(-1)
  }

  const handleClose = ()=>{
    resetForm()
    setIsConfirmAddingOpen(false)
  }
  return (
    <>
      <div className="mb-4 mt-4 px-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => nv(-1)}
            className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <ArrowLeft size={20} strokeWidth={2.5} />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>
        <div className="mt-2 flex items-center gap-3">
          <School size={24} strokeWidth={2.5} />
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Add new Group</h1>
        </div>
      </div>
      <ToastContainer pauseOnHover={false} closeButton={false} />
      <Form 
        submitBtnIsDisabled={isSubmitDisabled()}
        submitBtnTitle={'Add Group'}
        submitFunction={handleSubmit(onSubmit)}
        maxWidth="md:max-w-3xl pb-4"
      >
        <FormContainer title={'Group Information'} icon={Presentation}>
          <TextField 
            error={errors.libel}
            name={'libel'}
            label={'Libel'}
            value={values.libel}
            handleChange={handleChange}
            handleFocus={handleFocus}
            placeHolder={'Group Libel'}
            icon={Presentation}
          />
          <CustomSelect 
            name={'filiere'}
            label={'Filiere'}
            placeholder={'Select filiere'}
            handleChange={handleChange}
            items={filieres}
            value={values.filiere}
          />
          <RatioField 
            name={'year'}
            label={'Year'}
            items={['First Year', 'Second Year', 'Third Year']}
            handleChange={handleChange}
            value={values.year}
          />
        </FormContainer>
      </Form>
      <ConfirmAddModal 
        isOpen={isConfirmAddingOpen} 
        onConfirm={handleConfirm} 
        onClose={handleClose} 
        itemName={'group'}
        confirmText="Confirm group adding"
        cancelText="Cancel adding" 
      />
    </>
  );
}
