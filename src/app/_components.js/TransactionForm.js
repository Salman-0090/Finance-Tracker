import { createTransaction } from "../_lib/action";
import { auth } from "../_lib/auth";

import Button from "./Button";

export default function TransactionForm () {
          

    return (
        <form className="flex flex-col gap-4 mt-6 w-full max-w-md mx-auto px-4" action={createTransaction}>
    
    <div className="grid grid-cols-[120px_1fr] items-center gap-3">
        <label className="text-right font-medium">Date</label>
        <input name="date" type="date" className="border border-stone-500 rounded bg-blue-100 px-2 py-1 w-full" required/>
    </div>

    <div className="grid grid-cols-[120px_1fr] items-center gap-3">
        <label className="text-right font-medium">Type</label>
        <select name="type" className="border border-stone-500 rounded bg-blue-100 px-2 py-1 w-full">
            <option>Income</option>
            <option>Expense</option>
        </select>
    </div>

    <div className="grid grid-cols-[120px_1fr] items-center gap-3">
        <label className="text-right font-medium">Description</label>
        <input type="text" name="description" placeholder="your description" className="border border-stone-500 rounded bg-blue-100 px-2 py-1 w-full" required/>
    </div>

    <div className="grid grid-cols-[120px_1fr] items-center gap-3">
        <label className="text-right font-medium">Category</label>
        <select name="category" className="border border-stone-500 rounded bg-blue-100 px-2 py-1 w-full">
            <option>Food</option>
            <option>Transport</option>
            <option>Shopping</option>
            <option>Salary</option>
            <option>Entertainment</option>
        </select>
    </div>

    <div className="grid grid-cols-[120px_1fr] items-center gap-3">
        <label className="text-right font-medium">Amount</label>
        <input type="number" name="amount" placeholder="3455" className="border border-stone-500 rounded bg-blue-100 px-2 py-1 w-full" required/>
    </div>

    <Button variant="primary">Submit</Button>
</form>
    )
}