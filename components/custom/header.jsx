
import '@/components/styles/style.css'
import Navbar from "@/components/custom/navbar";
import React from "react";


export default function Header() {


    return (
        <header className="flex  align-center ">
            <div>
                <a href='/' className='app-name'>SNAPCART</a>
            </div>
            <Navbar className="flex justify-center"/>
        </header>
    )

}