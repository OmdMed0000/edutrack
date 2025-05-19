import { useNavigate, useParams } from "react-router-dom";
import { BriefcaseBusiness, KeyRound, Mail, User, ArrowLeft } from "lucide-react";
import { users } from "../../../Data/Users";
import {Form , FormContainer} from "../../../Components/form/GlobalComponents";
import { TextField } from "../../../Components/form/Inputs";
import { RatioField } from "../../../Components/form/RatioField";
import { DateField } from "../../../Components/form/Fields";
import { Select } from "../../../Components/form/Select";
import useForm from "../../../utils/Hooks/useForm";
import { userValidation } from "../../../utils/formsValidation";

export default function EditUser() {
    const { id } = useParams()
    const nv = useNavigate()
    const user = users.find(user => user.matricule === id)
    const initialValues = {
        fullName: user.fullName,
        birthDate: user.birthDate,
        gender: user.gender,
        matricule: user.matricule,
        email: user.email,
        role: user.role,
        password: '12020',
        confirmPassword: '12020'
    }
    const  {email ,fullName,birthDate,matricule} = userValidation
    const validation = {email ,fullName,birthDate,matricule} 
    // const validation = {
    //     fullName: {
    //         message: 'The name should not contain symbols or numbers',
    //         regex: /^[A-Za-z]+(\s[A-Za-z]+)*$/
    //     },
    //     birthDate: {
    //         message: 'The age should be between 18 and 65',
    //         validateFunc: (birthDate) => {
    //             const age = calculateAge(birthDate);
    //             return age >= 18 && age <= 65;
    //         },
    //     },
    //     matricule: {
    //         message: '',
    //         regex: ''
    //     },
    //     email: {
    //         regex: /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@ofppt\.ma$/ ,
    //         message: 'invalid email , enter profetionnal email'
    //     },
      
    // }

    const { values, errors, handleChange, handleFocus, handleSubmit, isSubmitDisabled } = useForm(initialValues, validation, 'edit')

    const onSubmit = () => {
        localStorage.setItem('toastMessage', 'User updated successfully')
        nv(-1)
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
                    <User size={24} strokeWidth={2.5} />
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Edit {user.role} info</h1>
                </div>
            </div>

            <Form
                submitBtnIsDisabled={isSubmitDisabled()}
                submitBtnTitle={'Edit User'}
                submitFunction={handleSubmit(onSubmit)}
                maxWidth="md:max-w-3xl pb-4"
            >
                <div className="space-y-4 w-full">
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
                        <div className='flex gap-10 w-full'>
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
                                items={['Male', 'Female']}
                                handleChange={handleChange}
                                value={values.gender}
                            />
                        </div>
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
                        <div className='flex gap-10 w-full'>
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
                                !values.role &&
                                <Select 
                                    label={'Role'}
                                    name={'role'}
                                    value={values.role}
                                    placeholder={'Select user role'}
                                    handleChange={handleChange}
                                    items={['Absence Manager', 'Teacher']}
                                />
                            }
                        </div>
                    </FormContainer>
                </div>
            </Form>
        </>
    )
}