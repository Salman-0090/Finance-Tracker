import Image from "next/image";
import Link from "next/link";
import LoginButton from "./_components.js/LoginButton";
import { auth } from "./_lib/auth";
import LogoutButton from "./_components.js/LogoutButton";
import Button from "./_components.js/Button";

export default async function Home() {
  const session = await auth()
  return (
   <div className="min-h-screen flex justify-center items-center">
        {session ? (
  <div className="flex flex-col items-center">
    <h2>Welcome {(session.user.name).split(" ").map(word=> word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}</h2>

    <Link href="/dashboard">
      <Button>Go to Dashboard</Button>
    </Link>
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
