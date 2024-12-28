

import Navbar from "@/components/custom/navbar";
import React from "react";

export default function Header() {
    return (
        <header className="flex justify-between items-center py-4 px-12 bg-white">
            <div>
                <h1>SnapCart</h1>
            </div>
            <Navbar/>
        </header>
    )

}