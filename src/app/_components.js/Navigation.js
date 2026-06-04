import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="p-4">
            <ul className="flex justify-between">
                <li><Link href="/">Dashboard</Link></li>
                <li><Link href="/transactions">Transactions</Link></li>
                <li><Link href="/add">Add Transactions</Link></li>
            </ul>
        </nav>
    )
}