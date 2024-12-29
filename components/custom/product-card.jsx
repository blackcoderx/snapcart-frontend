import Image from 'next/image'
import '@/components/styles/style.css'




export default function ProductCard({product}) {
    console.log(product)
    return (
        <>
            <div className="product-card">
                <img
                    src={`https://res.cloudinary.com/duoxbuhpw/${product.images[0].image}`}
                    alt={'Product Image'}
                    className='product-image'
                />
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.number_of_likes} likes</p>
                    <p>${product.price}</p>
                </div>
            </div>
        </>
    )
}


