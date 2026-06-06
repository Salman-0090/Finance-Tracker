import { getTransactions } from "../_lib/data-service"
import Transaction from "./Transaction"

export default async function Transactions() {
    const transactions = await getTransactions()
    return (
        <div>
            {transactions.map((transaction)=> <Transaction  transaction={transaction} key={transaction.id}/> )}
        </div>
    )
}