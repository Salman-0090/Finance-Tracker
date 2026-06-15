
import { revalidatePath } from "next/cache";
import { auth } from "./auth";
import { supabase } from "./supabase";


export async function getTransactions(page=1) {
    const PAGE_SIZE = 6;
   const from = (page - 1) * PAGE_SIZE;
   const to = from + PAGE_SIZE - 1;
    const session = await auth()
    const currentUser = await getUser(session.user.email)
    const {data, count, error} = await supabase
    .from("transactions")
    .select("*", {count: "exact"})
    .eq("user_id", currentUser.id)
    .order("created_at", {ascending:false})
    .range(from, to)
    if(error) {
        console.error(error);
        throw new Error("Transactions could not be loaded")
    }
    
    return {
        transactions: data,
        totalCount: count ?? 0,
        totalPages:Math.ceil((count??0)/PAGE_SIZE),
    }   
}


export async function getUser(email) {
    const {data, error} = await supabase
    .from("user")
    .select("*")
    .eq("email", email)
    .maybeSingle();
    return data;
}

export async function createUser(newUser) {
    const {data, error} = await supabase
    .from("user").insert([newUser]);

    if(error) {
        console.error(error)
        throw new Error("User could not be created")
    }
}

 

export  function getMonthlySummary(transactions) {
    const map = {};

    transactions.forEach(({ date, type, amount }) => {
             if (!date) return; 
        const month = date.slice(0, 7); // "2024-03"
        if (!map[month]) map[month] = { month, income: 0, expense: 0 };
        if (type === "Income") map[month].income += amount;
        else map[month].expense += amount;
    });

    return Object.values(map).sort((a, b) => a.month.localeCompare(b.month));
}


export  function getCategoryBreakdown(transactions) {
    const map = {};

    transactions.forEach(({ category, amount, type }) => {
        if (type !== "Expense") return; // only expenses
        if (!map[category]) map[category] = { category, total: 0 };
        map[category].total += amount;
    });

    return Object.values(map);
}