import Follows from "./userfollows";
import { ProductPostCard } from "./productpostcard";
import { useGetProductsQuery } from "@/redux/service/Products";
import '@/components/styles/style.css'

export default function Feed() {
  const { data: products } = useGetProductsQuery();

  return (
    <div className="feed">
      <Follows />
      <div className='products'>
        {products && products.map((product) => (
          <ProductPostCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}