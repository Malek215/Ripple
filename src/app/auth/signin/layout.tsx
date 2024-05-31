import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerAuthSession();
  if (session?.user) {
    redirect("/");
  }
  return children;
};

export default Layout;
