"use client";
import Link from "next/link";

export default function Error({ error }: { error: string }) {
  return (
    <div className="m-auto size-fit font-mono p-8 items-center text-center">
      <h1 className="text-[236px] text-primary">OOPS!</h1>
      <p className="text-[50px] mt-[-70px] m-auto w-fit bg-opacity-70 text-center">{error}</p>
      <Link href="/" className="bg-primary  rounded-md text-white p-1">Go to Influencers Page</Link>
    </div>
  );
}
