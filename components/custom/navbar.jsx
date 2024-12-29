// this component is a navbar that contains links to home, explore, cart, and chat
// I want to display the user's name on the navbar when he is logged in but a login and sign up button when he is logged out

import {useSelector} from "react-redux";
import Link from 'next/link'
const links = ['Home', 'Explore', 'Cart', 'Chat']

// const NotLogIn = () => {
//
//     // you can design these links the once from the design i sent you
//     return (
//         <ul className='flex gap-4'>
//             <li key='login'>
//                 <Link href='/login'>Login</Link>
//             </li>
//             <li key='signup'>
//                 <Link href='/signup'>Sign Up</Link>
//             </li>
//         </ul>
//     )
// }
//
// const LogIn = ({username, profile_pic}) => {
//     return (
//         <div>
//             <Image
//                 src={`https://res.cloudinary.com/duoxbuhpw/${profile_pic}`}
//                 alt={user_name}
//                 width={40}
//                 height={40}
//                 className="rounded-full" />
//
//             <p> {username} </p>
//         </div>
//
//     )
// }

export default function Navbar() {
    const {isAuthenticated, user_name, profile_pic} = useSelector(state => state.auth);

    return (
        <nav className="navbar flex">
            <ul className='flex gap-4'>
                {links.map(link => (
                    <li key={link}>
                        <Link href={`/${link.toLowerCase()}`}>{link}</Link>
                    </li>
                ))}
            </ul>

        </nav>

    )
}


