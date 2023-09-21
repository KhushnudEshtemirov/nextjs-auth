"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  console.log(session);

  return (
    <main>
      <h2>Home Page</h2>
    </main>
  );
}
