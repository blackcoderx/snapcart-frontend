'use client'
import {useState} from "react";
import {useLikeProductMutation, useUnLikeProductMutation} from "@/redux/service/Products";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
// import CustomShoppingCart from "@/components/custom/addtocart";
import {Button} from "@/components/ui/button";
import {Heart, MessageCircle} from "lucide-react";
import '@/components/styles/style.css'
import ProductOptions from "./productoptions";

export function ProductPostCard({product}) {
    const [liked, setLiked] = useState(() => {
        const storedLiked = localStorage.getItem(`liked-${product.id}`);
        return storedLiked === 'true';
    })
    const [likes, setLikes] = useState(() => {
        const storedLikes = localStorage.getItem(`likes-${product.id}`);
        return storedLikes ? parseInt(storedLikes) : product['number_of_likes'];
    })
    const [like] = useLikeProductMutation()
    const [unlike] = useUnLikeProductMutation()
    const handleLike = () => {
        if (liked) {
            setLikes(likes - 1)
            unlike(product.id);
        } else {
            setLikes(likes + 1)
            like(product.id);
        }
        setLiked(!liked)
        localStorage.setItem(`liked-${product.id}`, !liked);
        localStorage.setItem(`likes-${product.id}`, (liked ? likes - 1 : likes + 1).toString());
    }


    return (
        <div className='mx-auto post-card mb-8 flex flex-col gap-0.5 '>
            <div className='flex justify-between items-center mb-2'>
                <div className='flex gap-2'>
                    <Avatar>
                        <AvatarImage
                            src={`https://res.cloudinary.com/duoxbuhpw/${product['seller']['profile_picture']}`}
                            alt={product['seller']['username']}/>
                        <AvatarFallback>{product['seller']['username'][0]}</AvatarFallback>
                    </Avatar>

                    <div>
                        <p className='username font-semibold'>{product['seller']['username']}</p>
                        <p className='seller_location text-xs'>Tema</p>
                    </div>
                </div>

              <ProductOptions productId={product['id']} sellerId={product['seller']['id']}/>
            </div>


            <div className='image-cat'>
                {product['images'].map((image) => (
                    <img key={image.id} src={`https://res.cloudinary.com/duoxbuhpw/${image.image}`}
                         alt={product.name} className='product-img'/>
                ))}
                {/* <CustomShoppingCart id={product['id']}/> */}
            </div>

            <div className='flex gap-1 justify-between items-center '>

                <div className='flex '>
                    <div className='flex items-center'>
                        <Button variant="ghost" size="icon" className='rounded-full flex ' onClick={handleLike}>
                            <Heart
                                className={`h-5 w-5 transition-all duration-200 ${liked ? 'fill-purple-500 text-purple-500 scale-125' : 'scale-100'}`}/>
                        </Button>
                        <p className="font-semibold text-xs number-likes pt-0.5"> {likes} likes</p>
                    </div>

                    <Button variant="ghost" size="icon" className='rounded-full'>
                        <MessageCircle className="h-5 w-5"/>
                    </Button>
                </div>


                <p className='text-xs font-semibold'>Ghc {product['price']}</p>

            </div>

            <div>
                <p className='text-xs font-semibold'>{product['name']} -
                    <span className='font-normal'>{product['description']}</span></p>
            </div>
        </div>
    )


}