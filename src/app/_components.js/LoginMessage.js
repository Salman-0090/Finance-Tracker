import { auth } from "../_lib/auth";
import LoginButton from "./LoginButton";



export default async function LoginMessage() {
   const session = await auth()
    return (
        <div>
            <h1>Finance Tracker</h1>
            <p>
                Tracker your Income and Expenses securely in one place.
            </p>
           <LoginButton />
        </div>
    )
}