import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return redirect("/");
  }
  return (
    <div className="mt-10 text-center">
      <h1 className="text-2xl font-bold underline">Welcome to dashboard</h1>

      <ul>
        <li>Name: {session.user.name}</li>
        <li>Email: {session.user.email}</li>
      </ul>
    </div>
  );
};

export default Dashboard;
