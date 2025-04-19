"use client";

import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Spinner } from "./Spinner";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4 text-center">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">AliNotion.</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium ">
        AliNotion is the connected workspace where <br /> better, faster work
        happens.
      </h3>
      {
        isLoading && (
          <div className="w-full flex justify-center items-center">
            <Spinner size="lg" />
          </div>
        )
      }
      {isAuthenticated && !isLoading && (
        <Button>
          <Link href="/documents">Enter App</Link>
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Ali Notion free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
