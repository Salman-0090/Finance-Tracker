
import { redirect } from "next/navigation";
import TransactionForm from "../_components.js/TransactionForm";
import { auth } from "../_lib/auth";

export default async function page() {
      const session = await auth()
        if(!session) redirect("/")
    return (
    <div>
        <TransactionForm />
    </div>
    )
}