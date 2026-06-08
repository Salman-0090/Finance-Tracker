import Link from "next/link";

import Image from "next/image";


export default async function Navigation({session}) {
   
   
    return (
        <nav className="p-4 bg-blue-400">
            <ul className="flex justify-between align-items flex-wrap text-blue-50">
                <li><Link href="/">Home</Link></li>
                 <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/dashboard/transactions">Transactions</Link></li>
                <li><Link href="/dashboard/add">Add Transactions</Link></li>
                <li>{session?.user?.image ?<Link className="flex gap-2 items-center" href="/dashboard/profile">
                <span>Profile</span><Image className="rounded-full" width={25} height={25} src={session.user.image} alt="use-image" /></Link> : ""}
                </li>    
            </ul>
        </nav>
    )
}