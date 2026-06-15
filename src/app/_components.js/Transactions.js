import { getTransactions } from "../_lib/data-service"
import Pagination from "./Pagination";
import Transaction from "./Transaction"

export default async function Transactions({searchParams}) {
    const currentPage = Number(searchParams.page) || 1;
    const {transactions, totalPages} = await getTransactions(currentPage)
  
    return (
        <div>
            {transactions.map((transaction)=> <Transaction  transaction={transaction} key={transaction.id}/> )}
            <Pagination  currentPage={currentPage} totalPages={totalPages}/>
        </div>
    )
} 