
import { redirect } from "next/navigation";
import Transactions from "../_components.js/Transactions";
import { auth } from "../_lib/auth";

export default async function Page() {
    const session = await auth()
    if(!session) redirect("/")
        return (<div>
            <Transactions />
        </div>)
}