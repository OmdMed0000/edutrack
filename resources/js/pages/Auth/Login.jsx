import { Select } from '../../Components/form/Select';

import {PasswordField , TextField} from '../../Components/form/Inputs'
import {Form ,FormContainer} from '../../Components/form/GlobalComponents'

import { ClipboardList, User,Mail } from "lucide-react";
import { useForm , usePage} from '@inertiajs/react'

export default function Login(){
    
    const { csrf } = usePage().props
    const { data, setData, post, processing, errors, reset } = useForm({
        user_name: '',
        password: '',
      
      })
      const handleSubmit = (e) => {
        e.preventDefault()
    
        post('/login',{
             onSuccess: () => {
            // handle successful login
            reset('password')
          },
          onError: (errors) => {
            console.log('Login errors:', errors)
          }})
      }
      
      const handleChange =(name,value)=>setData(name,value);
    
   
    return (
        <div className="w-full flex justify-center items-center min-h-screen ">
            <div className="  w-1/2">
                <div className="flex items-center justify-center gap-3 text-gray-700 dark:text-gray-50 mb-10">
                    <ClipboardList size={32}/>
                    <h2 className="text-2xl font-bold">EduTrack</h2>
                </div>
                <Form
                submitBtnIsDisabled={processing}
                submitBtnTitle={'Login'}
                submitFunction={handleSubmit}
                >
                    <input type="hidden" name="_token" value={csrf} />
                    <FormContainer title={'Login to your Account'} icon={User} >
                         <TextField 
                            error={errors.user_name}
                            name={'user_name'}
                            label={'User Name'}
                            value={data.user_name}
                            handleChange={handleChange}
                            handleFocus={()=>{}}
                            placeHolder={"User's user name"}
                            icon={User}
                    
                        />
                        <PasswordField 
                            error={errors.password}
                            name={'password'}
                            label={'Password'}
                            value={data.password}
                            handleChange={handleChange}
                            handleFocus={()=>{}}
                            placeHolder={"Enter users's password"}
                        />  
                    </FormContainer>
                </Form>
            </div> 
        </div>
    )
}