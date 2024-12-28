import Image from 'next/image'
import {useGetProductsQuery} from "@/redux/service/Products";


const Product = ({product}) => {
    return (
<>
    <div className="product-card">
        <Image
            src={`https://res.cloudinary.com/duoxbuhpw/`}
            width={300}
            height={200}
            alt={'Product Image'}
        />
        <h2>Product Name</h2>
        <p>No of likes</p>
        <p>$99.99</p>
    </div>
</>
    )
}


export default function ProductCard() {
    const {data: products, isLoading, isError} = useGetProductsQuery();
    // you can map over the products object and get all the individual products
    // handle the display, i will handle the action that sends the user to the product's page

    return (
        isLoading ? <p>Loading...</p> :
        isError ? <p>Error fetching data</p> :

        <div className="product-card-container">
            {products.map((product) => (
                <Product key={product.id}  product={product}/>
            ))}
        </div>

    )
}

