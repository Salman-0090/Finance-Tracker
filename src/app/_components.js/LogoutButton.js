import { signOutAction } from "../_lib/action";
import Button from "./Button";

export default function LogoutButton() {
    return (
       <form action={signOutAction}>
      <Button variant="primary">Sign Out</Button>
    </form>
    )
}