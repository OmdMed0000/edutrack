import { usePage } from "@inertiajs/react"
export default function Profile (){
    const user = usePage().props.auth.user;
    const role = usePage().props.auth.role;
    console.log(usePage());
    
   
    
    return (
        <h1>The {role.role_name} {user.gender === 'Male' ? 'Mr.' : 'Mme.'} {user.full_name} </h1>
    )
}