'use client'
import {useGetCartQuery} from '@/redux/service/Cart'
import Image from 'next/image'
import '@/components/styles/style.css'

export default function CartItems(){
    const { data: cart } = useGetCartQuery()

    return (
        <div className='grid cart grid-cols-3 gap-1 h-full px-4 pt-4'>
            {cart?.cart_items?.map((item) => (
                    <div key={item.id} >
                        {item.product.images.map((image) => (
                            <img key={image.id} alt='product image' src={`https://res.cloudinary.com/duoxbuhpw/${image.image}`}
                                className='w-full h-full cart-item-img'/>
                        ))}
                    </div>



            ))}
        </div>
    )

}