'use client'
import {cn} from '@/lib/utils'
import {useState} from "react";
import CartItems from '@/components/custom/cartitems';

export default function CartPage() {
  const [tab, setTab] = useState("my-cart");

  return (
    <div className="flex flex-col">
    <div className="flex justify-center border-b border-gray-200">
        <button
            className={cn(
                "px-4 py-2 text-sm font-semibold",
                tab === "my-cart"
                    ? "border-b-2 border-purple-500 text-purple-500"
                    : "text-gray-500 hover:text-gray-700"
            )}
            onClick={() => setTab("my-cart")}
        >
            My Cart
        </button>
        <button
            className={cn(
                "px-4 py-2 text-sm font-semibold",
                tab === "group-cart"
                    ? "border-b-2 border-purple-500 text-purple-500"
                    : "text-gray-500 hover:text-gray-700"
            )}
            onClick={() => setTab("group-cart")}
        >
            Group Carts
        </button>

    </div>
    {tab === "my-cart" && <CartItems /> }
    {tab === "group-cart" && <p> products</p>}
    {tab === "targets" && <p>targets</p>}
</div>  );
}