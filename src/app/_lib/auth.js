import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUser } from "./data-service";

const authConfig = {
    providers: [
        Google({
            clientId:process.env.AUTH_GOOGLE_ID,
            clientSecret:process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        authorized({auth, request}) {
             return !!auth?.user;
        },
         async signIn({user, account, profile}) {
        try {
        const existingUser =  await getUser(user.email);
        if(!existingUser) 
            await createUser({email:user.email, user_name:user.name});
        return true;
        } catch (error) {
              console.error("SIGNIN ERROR:", error);

            return false;
        }
    }
    },
  
};

export const {auth, handlers: {GET, POST}, signIn, signOut} = NextAuth(authConfig);