
import ProductCard from "@/components/custom/product-card";
import {useGetProductsQuery} from "@/redux/service/Products";
import '@/components/styles/style.css';
import Link from "next/link";

export default function Feed() {
    const {data: products, isLoading, isError} = useGetProductsQuery();

    return (
        isLoading && <p>Loading...</p>,
        isError && <p>Error loading products</p>,
        <div className='feed'>
            {products ? (
                products.map((product) => (
                    <Link key={product.id} href={`/product/${product.id}`}>
                    <ProductCard  product={product} />
                     </Link>
                ))
            ) : (
                <p>No products found</p>
            )}
        </div>
    )
}