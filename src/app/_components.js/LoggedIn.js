import { getTransactions } from "../_lib/data-service"

export default async function LoggedIn() {
    const transactions = await getTransactions()
    const income = transactions.filter(t => t.type === "Income").reduce((acc, crr)=> acc+crr.amount, 0)
    const expense = transactions.filter(t=> t.type === "Expense").reduce((acc, crr)=> acc + crr.amount, 0)
    const balance = income - expense
    return (
        <div className="flex p-4 flex-wrap gap-6">
            <p> {`Total Income: ${income}`}</p>
           <p> {`Total Expense: ${expense}`}</p>
           <p> {`Balance: ${balance}`}</p>
        </div>
    )
}