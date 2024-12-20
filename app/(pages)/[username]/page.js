'use client'

import {useParams} from "next/navigation";
import { useGetUserProfileQuery } from "@/redux/service/User";
import Image from 'next/image';

export default function ProfilePage() {
  const { username } = useParams();
  const { data: user } = useGetUserProfileQuery(username);
  if (!user) return <div>Loading...</div>;

  return (
    <div className="profile-page ">
      <div className="profile">
                  <div className='flex'>
                    <Image className='rounded-full profile-img'
                          width={150}
                          height={150}
                         src={`https://res.cloudinary.com/duoxbuhpw/${user['profile_picture']}`}
                         alt={`Profile Picture of ${user['username']}`}/>

                    <div className='flex justify-evenly items-center flex-auto w-2/3'>
                      <div className='flex flex-col items-center'>
                          <p className='text-sm'>{user['number_of_follows']}</p>
                          <p className='text-sm'>following</p>
                      </div>
                      <div className='flex flex-col items-center'>
                          <p className='text-sm'>{user['number_of_followers']}</p>
                          <p className='text-sm'>followers</p>
                      </div>
                      <div className='flex flex-col items-center'>
                          <p className='text-sm'>{user['number_of_products']}</p>
                          <p className='text-sm'>products</p>
                      </div>
                    </div>
                </div> 

                <div className='p-2'>
                  <p className='text-sm font-medium'>{user['full_name']}</p>
                  <p className='text-xs'>{user['bio']}</p>
                </div>
      </div>
   
    </div>
  );
}