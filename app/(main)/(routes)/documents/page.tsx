"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { useMutation } from "convex/react"; 
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const Documents = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = ()=> {
    const promise = create({title: "Untitled"});

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created! 🎉",
      error: "Failed to create a new note."
    });
  }

  return (
    <div className="flex flex-col justify-center items-center h-full space-y-4">
      <Image
        src="/document-reading.svg"
        alt="document-reading"
        width="300"
        height="300"
        className="dark:hidden"
      />
      <Image
        src="/document-reading-dark.svg"
        alt="document-reading"
        width="300"
        height="300"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome{" "}
        {user?.firstName && (
          <span className="text-md  underline pb-2">
            {user.firstName} {user.lastName}
          </span>
        )}{" "}
        to Ali Notion 📝
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="w-4 h-4 mr-2" />
        Create A Note
      </Button>
    </div>
  );
};

export default Documents;
