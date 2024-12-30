'use client'
import Header from "@/components/custom/header";
import {Button} from "@/components/ui/button";
import {useParams} from "next/navigation";
import {useGetProductByIdQuery} from "@/redux/service/Products";
import Image from "next/image";
import '@/components/styles/style.css'
import React from "react";

export default function ProductPage() {
    const {id} = useParams();
    const {data: product, isLoading, isError} = useGetProductByIdQuery(id);

    console.log(product)
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading product</p>;

  return (
      <>
        <Header />
        <main className="cart-page">
            <section className='flex product-details-section'>
                <div className='product-img-cont'>
                    <img
                        src={`https://res.cloudinary.com/duoxbuhpw/${product.images[0].image}`}
                        alt='Product Image'
                        className='product-image'
                    />
                </div>

                <div className='product-details p-4'>
                    <div className='flex items-center gap-2'>
                        <Image
                            src={`https://res.cloudinary.com/duoxbuhpw/${product.seller.profile_picture}`}
                            alt={'Seller Profile Picture'}
                            width={30}
                            height={20}
                            className='rounded-full'
                        />
                        <p>{product.seller.username}</p>
                    </div>


                    <div className='w-11/12'>
                        <h2 className='text-xl font-semibold uppercase'>{product.name}</h2>
                        <p>Quantity: {product.quantity}</p>
                        <p>{product.description}</p>
                    </div>

                    <div className='flex gap-1 items-center justify-between w-11/12'>
                        <p className='text-xl font-semibold'>Ghc {product.price}</p>
                        <Button className=' w-1/2 bg-purple-600 hover:bg-purple-800 font-semibold'>Add to Cart</Button>
                    </div>
                </div>
            </section>
        </main>
      </>
  );
}

const obj = {
    "id": 4,
    "name": "Air Force 1",
    "price": "2327.00",
    "images": [
        {
            "id": 3,
            "image": "image/upload/v1734097622/nouptgxhsbotxfasyxvz.jpg"
        }
    ],
    "number_of_likes": 1,
    "description": "Air force 1 Low '07 Black White 2023.",
    "category": {
        "id": 3,
        "name": "Shoes"
    },
    "seller": {
        "id": "981c3701-b160-4f17-9ec6-26e6d632cb57",
        "username": "daavi",
        "profile_picture": "image/upload/v1734126247/dbliu1p4nrwkejryo2yy.jpg",
        "is_seller": true,
        "locations": []
    },
    "comments": [],
    "quantity": 9
}