import { supabase } from "../_lib/supabase";
import Button from "./Button";

export default function TransactionForm () {
    async function createTransaction(formData) {
        "use server";
        const transaction = {
            type: formData.get("type"),
            description: formData.get("description"),
            category: formData.get("category"),
            amount: Number(formData.get("amount"))
        }
        const {data, error } = await supabase
        .from("transactions")
        .insert([transaction])
        .select();

        if (error) {   
            console.log(error)
            throw error
        }
        console.log(data)
    }

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