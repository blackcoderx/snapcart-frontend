import {useSelector} from "react-redux";
import Link from 'next/link'
import Image from 'next/image'

const links = [
    {title: 'Home', url: '/'},
    {title: 'Explore', url: '/explore'},
]
const logINLinks = [
    {title: 'Home', url: '/'},
    {title: 'Explore', url: '/explore'},
    {title: 'Chat', url: '/chat'},
    {title: 'Cart', url: '/cart'},
]
import {Button} from '@/components/ui/button'
import '@/components/styles/style.css'

const NotLogIn = () => {

    return (
        <div>
            <ul className='flex items-center gap-4'>
                {links.map(link => (
                    <li key={link.title}>
                        <Link href={link.url} className='link uppercase'>{link.title}</Link>
                    </li>
                ))}
                <li key='login'>
                    <Link href='/register' className='link uppercase'>sign up</Link>
                </li>
                <li key='signup' >
                    <Button>
                    <Link href='/login' className='uppercase'>Login</Link>
                    </Button>
                </li>
            </ul>
        </div>

    )
}



export default function Navbar() {
    const {isAuthenticated, user_name, profile_pic} = useSelector(state => state.auth);
    console.log(profile_pic);

    return (
        <nav className="navbar flex gap-4 justify-center">

        {isAuthenticated ? (
            <div className="flex items-center gap-10">
                <ul className='flex items-center gap-8'>
                    {logINLinks.map(link => (
                        <li key={link.title}>
                            <Link href={link.url} className='uppercase link'>{link.title}</Link>
                        </li>
                    ))}
                </ul>

                <div className=' profile-box flex items-center gap-2'>
                    <Image
                        src={`https://res.cloudinary.com/duoxbuhpw/${profile_pic}`}
                        alt='user profile' width={24} height={24}
                        className='rounded-full'
                    />
                    <p className='uppercase font-semibold'>{user_name}</p>
                </div>
            </div>
        ) : (
            <NotLogIn />
        )}
        </nav>

    )
}


