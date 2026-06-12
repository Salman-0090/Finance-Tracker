"use client";

import { deleteTransaction } from "../_lib/action";
import Button from "./Button";

export default function Transaction({transaction}) {
    if (!transaction) {
        return <p>Transaction is undefined</p>;
    }
    async function handleDelete() {
        await deleteTransaction(transaction.id)
    }
    return (
   <ul className="flex flex-col gap-3 mt-6 px-4 max-w-3xl mx-auto">
  <li className="
    flex flex-col gap-2 px-4 py-2 bg-blue-100 rounded-lg border border-stone-200 shadow-sm hover:shadow-md transition-shadow
    sm:grid sm:grid-cols-[100px_80px_1fr_100px_100px_60px] sm:items-center sm:gap-4
  ">
 
    <div className="flex items-center justify-between sm:contents">
      <span className="text-stone-500 text-sm">{transaction.date}</span>

      <span className={`text-sm font-semibold px-2 py-1 rounded-full text-center
        ${transaction.type === "Income" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
        {transaction.type}
      </span>
    </div>

   
    <span className="text-stone-700 truncate">{transaction.description}</span>

   
    <div className="flex items-center justify-between sm:contents">
      <span className={`font-bold
        ${transaction.type === "Income" ? "text-green-600" : "text-red-500"}`}>
        {transaction.type === "Income" ? "+" : "-"}${transaction.amount}
      </span>

      <span className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-full text-center">
        {transaction.category}
      </span>
    </div>

    <Button variant="delete" onClick={handleDelete} className="w-full sm:w-auto">
      Delete
    </Button>
  </li>
</ul>)
}