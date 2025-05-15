import { Link } from "@inertiajs/react";
import { route } from 'ziggy-js';
export default function Welcome() {
   

    return (
        <div>
<h1>Hello</h1>
<Link href={route('hi')}>GO to HII</Link>
        </div>
        
    );
}
