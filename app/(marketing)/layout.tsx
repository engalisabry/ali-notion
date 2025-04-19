"use client";

import { redirect } from "next/navigation";
import Navbar from "./_components/Navbar";
import { useConvexAuth } from "convex/react";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  if (isAuthenticated && !isLoading) redirect("/documents");

  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="h-full pt-40 dark:bg-[#1F1F1F]">{children}</main>
    </div>
  );
};

export default MarketingLayout;
