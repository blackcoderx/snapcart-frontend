'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useSelector } from 'react-redux'
import { Home, Compass, ShoppingCart, Send, User, LayoutDashboard, CirclePlus } from 'lucide-react'
import '@/components/styles/style.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setDetails } from '@/redux/features/authSlice'
import { useFetchUserQuery } from '@/redux/service/User'

export default function Sidebar() {
  const { is_seller, user_name} = useSelector((state) => state.auth)

  const dispatch = useDispatch();
  const { data: userData } = useFetchUserQuery();

  useEffect(() => {
    const fetchData = async () => {
      if (userData) {
        const { username, full_name, email, id, profile_pic, is_seller } = userData;
        dispatch(
          setDetails({
            userID: id,
            full_name: full_name,
            user_name: username,
            email: email,
            profile_pic: profile_pic,
            is_seller: is_seller,
          })
        );
      }
    };

    fetchData();
  }, [dispatch, userData]);

  const links = [
    { title: 'Home', url: '/', icon: Home },
    { title: 'Explore', url: '/explore', icon: Compass },
    { title: 'Cart', url: '/cart', icon: ShoppingCart },
    { title: 'Chat', url: '/chat', icon: Send },
  ]

  const seller_links = [
    { title: 'Create', url: '/create', icon: CirclePlus },
    { title: 'Dashboard', url: '/dashboard',icon: LayoutDashboard },
  ]

  return (
    <div className='sidebar'>

      <div className='flex flex-col gap-4'>
        <div className='logo-container'>
          <p className='logo'>SnapCart</p>
        </div>

        <div className='flex flex-col gap-3 '>
          {links.map((link) => (  
          <Link key={link.title} href={link.url} className='link-name w-full'>
            <Button className="link w-full" variant='ghost'>
              <link.icon size={24} />
              <p className='font-normal'>{link.title}</p>
            </Button>
          </Link>
          ))}

          {is_seller && (
            <div className='flex flex-col gap-3'>
              {seller_links.map((seller_link) => (
              <Link  key={seller_link.title} href={seller_link.url} className=' link-name'>
                <Button className="link w-full" variant='ghost'>
                  <seller_link.icon size={32} />
                  <p className='font-normal'>{seller_link.title}</p>
                </Button>
              </Link>
              ))}
            </div>
          )}
        </div>
      </div>



        <Link href={`/${user_name}`}  className='link-name'>
          <Button className="link w-full" variant="ghost">
              <User size={24}  />
              {user_name}
          </Button>
        </Link>
    </div>
  )
}

export function SidebarDisplay() {
  const { isAuthenticated } = useSelector((state) => state.auth)

  return(
    isAuthenticated? <Sidebar /> :<></>
  )
}