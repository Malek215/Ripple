import LoginOption from "@/app/_components/auth/login-option";
import { getProviders } from "next-auth/react";

export default async function SignInPage() {
  const providers = await getProviders();
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-orange-400">
      <div className="flex flex-col items-center justify-center rounded-lg bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold">Sign in</h1>
        <div className="mt-4">
          <LoginOption provider={providers?.google!} />
        </div>
      </div>
    </main>
  );
}
