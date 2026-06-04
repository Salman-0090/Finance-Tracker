import Button from "./Button";

export default function TransactionForm () {
    return (
        <form>
            <label>type</label>
            <select>
                <option>Income</option>
                <option>Expense</option>
            </select>
            <input type="number" placeholder="3455"  required/>
            <Button className="">Submit</Button>
        </form>
    )
}