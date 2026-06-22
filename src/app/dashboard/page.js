
import MonthlyChart from "../_components.js/MonthlyChart";
import CategoryChart from "../_components.js/CategoryChart";
import { getCategoryBreakdown, getMonthlySummary, getTransactions } from "../_lib/data-service";


export default async function DashboardPage({searchParams}) {
    const currentPage = Number(searchParams.page) || 1
    const {transactions} = await getTransactions(currentPage);

    const monthlySummary = getMonthlySummary(transactions);
    const categoryBreakdown = getCategoryBreakdown(transactions);

    const totalIncome = transactions.filter(t => t.type === "Income").reduce((s, t) => s + t.amount, 0);
    const totalExpense = transactions.filter(t => t.type === "Expense").reduce((s, t) => s + t.amount, 0);
    const balance = totalIncome - totalExpense;

    return (
        <div className="flex flex-col gap-6 p-4 max-w-2xl mx-auto">

            {/* Summary cards */}
            <div className="grid grid-cols-3 gap-3">
                <div className="bg-green-50 rounded-xl p-3 border border-green-200 text-center">
                    <p className="text-xs text-stone-500">Income</p>
                    <p className="font-bold text-green-600">${totalIncome}</p>
                </div>
                <div className="bg-red-50 rounded-xl p-3 border border-red-200 text-center">
                    <p className="text-xs text-stone-500">Expense</p>
                    <p className="font-bold text-red-500">${totalExpense}</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-3 border border-blue-200 text-center">
                    <p className="text-xs text-stone-500">Balance</p>
                    <p className="font-bold text-blue-600">${balance}</p>
                </div>
            </div>

            {/* Charts */}
            <MonthlyChart data={monthlySummary} />
            <CategoryChart data={categoryBreakdown} />

        </div>
    );
}