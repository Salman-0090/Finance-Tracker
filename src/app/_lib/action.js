"use server";

import { revalidatePath } from "next/cache";
import { signOut, signIn, auth } from "./auth";
import { getUser } from "./data-service";

import { supabase } from "./supabase";


  export async function createTransaction(formData) {
        const session = await auth()
        const currentUser = await getUser(session.user.email)
        const transaction = {
            type: formData.get("type"),
            date:formData.get("date"),
            user_id:currentUser.id,
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

    export async function signInAction() {
  await signIn("google", { callbackUrl: "/transactions" });
}

export async function signOutAction() {
  await signOut({ redirect: "/", callbackUrl: "/" });
}


export async function deleteTransaction(id) {
     console.log("1. deleteTransaction called with id:", id);

     const session = await auth();
    const currentUser = await getUser(session.user.email);
    if(!currentUser) throw new Error("Unauthorized");
    const {error, data} = await supabase
    .from("transactions")
    .delete()
    .eq("id", id)
    .eq("user_id", currentUser.id)
    console.log('Deleteddata', data)
    console.log("5. error:", error);
    if (error) throw new Error(error.message);
   revalidatePath("/dashboard")
    
}
