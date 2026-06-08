

import Image from "next/image";
import { signInAction } from "../_lib/action";

export default function LoginButton() {
    return(
         <form action={signInAction}>
      <button className="flex items-center gap-4 text-lg border border-primary-300 px-3 py-2 font-medium">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="20"
          width="20"
        />
        <span>Continue with Google</span>
      </button>
    </form>
    )
}   