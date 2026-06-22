import Image from "next/image";
import Link from "next/link";
import LoginButton from "./_components.js/LoginButton";
import { auth } from "./_lib/auth";
import LogoutButton from "./_components.js/LogoutButton";
import Button from "./_components.js/Button";
import { getTransactions } from "./_lib/data-service";


export default async function Home() {
  const session = await auth()
  const {transactions} = await getTransactions()
  return (
   <div className="min-h-screen flex justify-center items-center">
        {session ? (
  <div className="flex flex-col items-center">
    <h2 className="text-xl font-semibold">Welcome back, {(session.user.name).split(" ").map(word=> word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}</h2>
    {transactions.length > 0 ?  <p>Your finances are ready to review.</p> : <p><span className="font-bold">No Transactions:</span> Add a transaction to begin managing your finances.</p>}

   {transactions.length !== 0 ?  <Link href="/dashboard">
      <Button>Go to Dashboard</Button>
    </Link> :  <Link href="/dashboard/add">
      <Button>Add Transactions</Button>
    </Link>}
  </div>
) : (
  <div className="flex flex-col items-center gap-2">
    
    <h2>Sign in to access your Account</h2>
    <LoginButton />
  </div>
)}
   </div>
  );
}
