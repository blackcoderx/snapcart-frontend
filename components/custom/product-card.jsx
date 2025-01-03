import '@/components/styles/style.css'


export default function ProductCard({product}) {
    return (
        <>
            <div className="product-card">
                <img
                    src={`https://res.cloudinary.com/duoxbuhpw/${product.images[0].image}`}
                    alt={'Product Image'}
                    className='product-image'
                />
                <div>
                    <h2 className='font-medium text-center uppercase'>{product.name}</h2>
                        <p>{product.number_of_likes} likes</p>
                        <p className='font-semibold'>${product.price}</p>
                </div>
            </div>
        </>
    )
}


