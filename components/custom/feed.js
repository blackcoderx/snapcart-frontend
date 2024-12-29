
import ProductCard from "@/components/custom/product-card";
import {useGetProductsQuery} from "@/redux/service/Products";
import '@/components/styles/style.css';

export default function Feed() {
    const {data: products, isLoading, isError} = useGetProductsQuery();

    return (
        isLoading && <p>Loading...</p>,
        isError && <p>Error loading products</p>,
        <div className='feed'>
            {products ? (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <p>No products found</p>
            )}
        </div>
    )
}