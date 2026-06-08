import { signOutAction } from "../_lib/action";

export default function LogoutButton() {
    return (
       <form action={signOutAction}>
      <button className="py-1 px-2 mt-2 bg-blue-500 rounded text-blue-100">
        Sign out
      </button>
    </form>
    )
}