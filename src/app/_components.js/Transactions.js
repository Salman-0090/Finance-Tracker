import { Suspense } from "react";
import { getTransactions } from "../_lib/data-service"
import Pagination from "./Pagination";
import Transaction from "./Transaction"
import TransactionFilters from "./TransactionsFilter";

export default async function Transactions({searchParams}) {
    const currentPage = Number(searchParams.page) || 1;
    const category = searchParams?.category || "all";
  const startDate = searchParams?.startDate || null;
  const endDate = searchParams?.endDate || null;
    const {transactions, totalPages} = await getTransactions(currentPage, category, startDate, endDate)
  
    return (
        <div>
            <Suspense fallback={null}>
                <TransactionFilters currentCategory={category} startDate={startDate} endDate={endDate}/>
            </Suspense>
            {transactions.map((transaction)=> <Transaction  transaction={transaction} key={transaction.id}/> )}
            <Suspense fallback={null}>
            <Pagination  currentPage={currentPage} totalPages={totalPages}/>
            </Suspense>
        </div>
    )
} 