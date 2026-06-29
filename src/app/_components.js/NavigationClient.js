"use client"
import Link from "next/link";
import Image from "next/image";
import HamburgerNavigation from "./HamburgerNavigation";
import { useState } from "react";

export default  function NavigationClient({session}) {
      const [isOpen, setIsOpen] = useState(false)
        
    return (
        <nav className="p-4 bg-blue-400">
            <ul className="sm:flex sm:justify-between sm:align-items text-blue-50 hidden">
                <li className="hover:text-blue-100"><Link href="/">Home</Link></li>
                 <li className="hover:text-blue-100"><Link href="/dashboard">Dashboard</Link></li>
                <li className="hover:text-blue-100"><Link href="/dashboard/transactions">Transactions</Link></li>
                <li className="hover:text-blue-100"><Link href="/dashboard/add">Add Transactions</Link></li>
                <li className="hover:text-blue-100">{session?.user?.image ?<Link className="flex gap-2 items-center" href="/dashboard/profile">
                <span>Profile</span><Image className="rounded-full" width={25} height={25} src={session.user.image} alt="use-image" /></Link> : ""}
                </li>    
            </ul>
                    <div className="sm:hidden">
                        <HamburgerNavigation isOpen={isOpen} setIsOpen={setIsOpen}/>
                    </div>
           {
            isOpen &&  
             <ul className="text-blue-50 block sm:hidden space-y-2 p-3 z-50 ">
                <li className="hover:text-blue-100"><Link href="/">Home</Link></li>
                 <li className="hover:text-blue-100"><Link href="/dashboard">Dashboard</Link></li>
                <li className="hover:text-blue-100"><Link href="/dashboard/transactions">Transactions</Link></li>
                <li className="hover:text-blue-100"><Link href="/dashboard/add">Add Transactions</Link></li>
                <li className="hover:text-blue-100">{session?.user?.image ?<Link className="flex gap-2 items-center" href="/dashboard/profile">
                <span>Profile</span><Image className="rounded-full" width={25} height={25} src={session.user.image} alt="use-image" /></Link> : ""}
                </li>    
            </ul>
           }
        </nav>
    )
}