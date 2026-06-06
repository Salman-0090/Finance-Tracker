import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";


export default async function Navigation() {
    const session = await auth()
   
    return (
        <nav className="p-4">
            <ul className="flex justify-between">
                <li><Link href="/">Dashboard</Link></li>
                <li><Link href="/transactions">Transactions</Link></li>
                <li><Link href="/add">Add Transactions</Link></li>
                <li>{session?.user?.image ?<Link href="/login"><Image width={40} height={40} src={session.user.image} alt="use-image" /></Link> : ""}</li>    
            </ul>
        </nav>
    )
}