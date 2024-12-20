'use client'
import { useGetCurrentUserFollowsQuery } from "@/redux/service/User"
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import '@/components/styles/style.css'


export default function Follows() {
  const {data: follows, isLoading} = useGetCurrentUserFollowsQuery(undefined, {
    refetchOnMountOrArgChange: false,
    refetchOnReconnect: false,
    refetchOnFocus: false,
  });

  return(
    <div className="follows px-8">
    {
      isLoading ? 
      (<p>Loading...</p>) : 
      (
        <div className='userfollows flex gap-4 px-4'>
            {follows && follows.map(follow => (
                <Link href={`/${follow['followed']['username']}`} key={follow['followed']['id']}>
                  <div className='flex flex-col items-center gap-1'>
                    <div className='bg-follow-image'>
                          <img src={`https://res.cloudinary.com/duoxbuhpw/${follow['followed']['profile_picture']}`}
                              alt="Profile Picture" className='rounded-full follow-image'/>
                      </div>
                    <p className='follow-username text-xs mx-auto'>{follow['followed']['username']}</p>
                  </div>
                </Link>
            ))}
        </div>
      )
    }
    </div>
  )

}
