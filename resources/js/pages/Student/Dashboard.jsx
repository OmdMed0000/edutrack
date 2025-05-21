import { Link } from "@inertiajs/react"
export default function Dashboard(){
    return (
    <>
         <h1>Student Dashboard</h1>
         <Link href="/logout" method="post" as="button">Logout</Link>
    </>
   )
}