import Navbar from "@/components/Navbar";
import React from "react";

export default async function UserLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
       <div className="flex min-h-screen relative ">
            <div className="w-full h-10 z-10">
                <Navbar /> 
                {children}
            </div>
       </div>
    )
}