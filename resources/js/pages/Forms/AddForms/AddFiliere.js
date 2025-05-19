import { PencilRuler, Ruler, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useForm from "../../../utils/Hooks/useForm";
import { TextField } from "../../../Components/form/Inputs";
import { SelectField } from "../../../Components/form/Select";
import {Form , FormContainer} from "../../../Components/form/GlobalComponents";
import { useState } from "react";
import ConfirmAddModal from "../../../Components/Modals/ConfirmAdding";
const niveaux = ['Technicien Specialise', 'Technicien', 'Qualification', 'Specialisation']
const niveauxOptions = niveaux.map(item => ({option: item, value: item}))
export default function AddFiliere() {
  const [isConfirmAddingOpen,setIsConfirmAddingOpen] = useState(false)
  const nv = useNavigate();
  const initValues = {
    niveau: '',
    libel: ''
  }
  const validations = {
    'libel': {
      message: 'the libel shouldn\'t contain symbols or numbers ',
      regex: /^[A-Za-z]+$/
    }
  }
  const { values, errors, handleChange, handleFocus, handleSubmit, isSubmitDisabled,resetForm } = useForm(initValues, validations,'add')

  const onSubmit = ()=>{
    setIsConfirmAddingOpen(true)
  }
  const handleConfirm = ()=>{
    localStorage.setItem('toastMessage', 'filiere added seccussfully');
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
          <PencilRuler size={24} strokeWidth={2.5} />
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Add new Filiere</h1>
        </div>
      </div>
      <ToastContainer pauseOnHover={false} closeButton={false} />
      <Form 
        submitBtnIsDisabled={isSubmitDisabled()} 
        submitFunction={handleSubmit(onSubmit)} 
        submitBtnTitle={'Add Filiere'}
        maxWidth="md:max-w-3xl"
      >
        <FormContainer title="Filiere Information" icon={PencilRuler}>
          <SelectField 
            label={'Niveau'}
            name={'niveau'}
            value={values.niveau}
            placeholder={'Select niveau'}
            handleChange={handleChange}
            items={niveauxOptions}

          />
          
          <TextField 
            error={errors.libel}
            name={'libel'}
            label={'Filiere Libel'}
            value={values.libel}
            placeHolder={"Enter filiere libel"}
            icon={Ruler}
            handleChange={handleChange}
            handleFocus={handleFocus}
          />
        </FormContainer>
      </Form>
      <ConfirmAddModal 
        isOpen={isConfirmAddingOpen} 
        onConfirm={handleConfirm} 
        onClose={handleClose} 
        itemName={'filiere'}
        confirmText="Confirm filiere adding"
        cancelText="Cancel adding" 
      />
    </>
  );
}