'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "../ui/button";
import {Ellipsis} from 'lucide-react'
import { useAddToCartMutation } from "@/redux/service/Cart";
import {useToast} from "@/hooks/use-toast"
import { useState } from "react";

export default function ProductOptions({productId, sellerId}) {
  const [addToCart] = useAddToCartMutation();
  const { toast } = useToast();
  const [inCart, setInCart] = useState(() => {
    const storedInCart = localStorage.getItem(`inCart-${productId}`);
    return storedInCart === 'true';
  })

  const handleAddToCart = async (productId) => {
    try {
      await addToCart(productId);
      toast({
        title: "Product added to cart",
        description: "Product has been added to your cart",
        status: "success",
        duration: 3000,
      });
      setInCart(true)
      localStorage.setItem(`inCart-${productId}`, 'true');
    } catch (error) {
      console.error("Error adding product to cart:", error);
    } };

  return (
    <Popover>
      <PopoverTrigger><Ellipsis /></PopoverTrigger>
      <PopoverContent className="flex flex-col gap-2">
        {inCart ? (
          <Button className="w-full" disabled>
            Product In Cart
          </Button>
        ) : (
          <Button className="w-full" onClick={() => handleAddToCart(productId)}>
            Add to Cart
          </Button>
        )}
        <Button className="w-full">Follow Seller</Button>
        <Button className="w-full">Add to Targets</Button>
      </PopoverContent>
    </Popover>
  );
  }