import { createTransaction } from "../_lib/action";
import { auth } from "../_lib/auth";

import Button from "./Button";

export default function TransactionForm () {
          

    return (
        <form className="flex flex-col items-center gap-6" action={createTransaction}> 

            <div className="flex gap-3">
            <label>Type</label>
            <select name="type">
                <option>Income</option>
                <option>Expense</option>
            </select>
            </div>

            <div className="flex gap-3">
            <label>Description</label>
            <input type="text" name="description" placeholder="your description" required/>
            </div>

            <div>
            <label>Category</label>
            <select name="category">
                <option>Food</option>
                <option>Transport</option>
                <option>Shopping</option>
                <option>Salary</option>
                <option>Entertainment</option>
            </select>
            </div>

            <div className="flex gap-3">
            <label>Amount</label>
            <input className="border border-stone-500" type="number" placeholder="3455" name="amount"  required/>
            </div>

            <Button className="px-2 py-1 bg-blue-500 cursor-pointer self-center">Submit</Button>
        </form>
    )
}