'use client'
import { SidebarDisplay } from "@/components/custom/sidebar";
import Feed from "@/components/custom/feed";
// import { useGetProductsQuery } from "@/redux/service/Products";
import Notifications from "@/components/custom/notifications";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import{ setDetails } from "@/redux/features/authSlice";
// import { useFetchUserQuery } from "@/redux/service/User";

export default function HomePage() {
  // const { data: products } = useGetProductsQuery();
  
  return (
    <>
    <SidebarDisplay />
      <main className="layout home">
        <Feed />
        <Notifications />
      </main>
    </>

  );
}
