"use client";

import React from "react";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <>
      <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Dashboard Page
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Hi, {session?.user.name}
          </p>
        </div>
      </div>
    </>
  );
}
