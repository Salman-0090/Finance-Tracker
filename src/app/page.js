import Image from "next/image";
import Link from "next/link";
import LoginButton from "./_components.js/LoginButton";
import { auth } from "./_lib/auth";

export default async function Home() {
  const session = await auth()
  return (
   <div>
        <h1>Welcome to Finance Tracker</h1>
        <p>A simple finance tracker that helps you record transactions, analyze spending habits, and manage your budget effectively.</p>
        {!session ? <LoginButton /> : ""}
   </div>
  );
}
