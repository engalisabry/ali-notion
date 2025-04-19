"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";


const Error = ()=> {
    return (
        <div className="h-full space-y-4 flex flex-col items-center justify-center">
            <Image 
                src="/404-page.svg"
                alt="404 page"
                width="300"
                height="300"
                className="dark:hidden"
            />
            <Image 
                src="/404-page-dark.svg"
                alt="404 page"
                width="300"
                height="300"
                className="hidden dark:block"
            />
            <h2 className="text-xl font-medium">Something went wrong!</h2>
            <Button asChild>
                <Link href="/documents">
                    Go Back
                </Link>
            </Button>
        </div>
    )
};

export default Error;