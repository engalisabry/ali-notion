"use client";

import { cn } from "@/lib/utils";
import Logo from "./Logo";
import useScrollTop from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/ModeToggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "./Spinner";
import Link from "next/link";

const Navbar = () => {
  const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 bg-background dark:bg-[#1F1F1F] flex items-center w-full py-1 px-6 ease-in",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="hidden md:block w-[150px]">
        <Logo />
      </div>
      <div className="w-full flex items-center gap-x-2 md:ml-auto md:justify-end">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button variant="default" size="sm">
                Get Ali Notion Free
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm">
              <Link href="/documents">
                Enter App
              </Link>  
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
