
import { redirect } from "next/navigation";
import { auth } from "../_lib/auth";
import Navigation from "../_components.js/Navigation";

export default async function Layout({ children }) {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
    <Navigation session={session} />
    {children}
    </>
  )
}