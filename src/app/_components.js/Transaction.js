"use client";
import { deleteTransaction } from "../_lib/data-service";
import Button from "./Button";

export default function Transaction({transaction}) {
    if (!transaction) {
        return <p>Transaction is undefined</p>;
    }
    async function handleDelete() {
        await deleteTransaction(transaction.id)
    }
    return (
    <ul className="flex gap-4 justify-center mt-6">
          
          <li className="grid grid-cols-[100px_80px_1fr_100px_100px_60px] items-center gap-4 px-4 py-3 bg-blue-100 rounded-lg border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
    
    <span className="text-stone-500 text-sm">{transaction.date}</span>
    
    <span className={`text-sm font-semibold px-2 py-1 rounded-full text-center
        ${transaction.type === "Income" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
        {transaction.type}
    </span>

    <span className="text-stone-700 truncate">{transaction.description}</span>

    <span className={`font-bold text-right
        ${transaction.type === "Income" ? "text-green-600" : "text-red-500"}`}>
        {transaction.type === "Income" ? "+" : "-"}${transaction.amount}
    </span>

    <span className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-full text-center">
        {transaction.category}
    </span>

    <Button className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200 cursor-pointer" onClick={handleDelete}>
        Delete
    </Button>
</li>

    </ul>)
}