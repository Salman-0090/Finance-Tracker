"use server";

import { supabase } from "./supabase";

  export async function createTransaction(formData) {
      
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