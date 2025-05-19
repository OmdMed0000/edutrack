import { ArrowLeft, Presentation } from "lucide-react";
import useForm from "../../../utils/Hooks/useForm";
import { TextField } from "../../../Components/form/Inputs";
import { RatioField } from "../../../Components/form/RatioField";
import { CustomSelect } from "../../../Components/form/CustomSelect";
import { useParams,useNavigate } from "react-router-dom";
import { filieres, groups } from "../../../Data/Users";
import {Form , FormContainer} from "../../../Components/form/GlobalComponents";

  
export default function EditGroup(){
     
     const {id} = useParams()
     const nv = useNavigate()
     const group = groups.find(group=> group.idGroup === Number(id))
     
     
     const initialValues = {
      libel : group.libel,
      year : group.year,
      filiere : group.filiere
    }
    const validations = {
      libel : {
        message  : 'The libel should not contain symbols',
        regex : /^[A-Za-z]+\d+$/
      }
    }

    const {values,errors,handleChange,handleFocus,handleSubmit ,isSubmitDisabled} = useForm(initialValues,validations,'edit')
    const onSubmit = () => {
      localStorage.setItem('toastMessage','Group bien Editer')
      nv(-1)
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
          <Presentation size={24} strokeWidth={2.5} />
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Edit Group</h1>
        </div>
      </div>
      <Form 
        submitBtnIsDisabled={isSubmitDisabled()}
        submitBtnTitle={'Edit Group'}
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
      </>
    );
}
