import LogoutButton from "@/app/_components.js/LogoutButton";
import { auth } from "@/app/_lib/auth";


export const metadata = {
  title: "Login",
};
export default async function Page() {
  const session= await auth()
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <p>{ `Name: ${session.user.name}`}</p>
       <p>{ `Email: ${session.user.email}`}</p>
       <LogoutButton />
    </div>
  );
}