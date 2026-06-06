import { auth } from "./auth";
import { supabase } from "./supabase";

export async function getTransactions() {
    const session = await auth()
    const currentUser = await getUser(session.user.email)
    const {data, error} = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", currentUser.id)

    if(error) {
        console.error(error);
        throw new Error("Transactions could not be loaded")
    }

    return data;
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

