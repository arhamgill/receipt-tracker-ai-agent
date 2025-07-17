import { SignedOut, SignedIn, UserButton, SignInButton } from "@clerk/nextjs";
import { Shield } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
function Header() {
  return (
    <div className="flex items-center justify-between p-4">
      <Link href={"/"} className="flex items-center gap-2">
        <Shield className="h-6 w-6 text-blue-500" />
        <h1 className="text-xl font-semibold">Receipto</h1>
      </Link>
      <div className="flex items-center space-x-4">
        <SignedIn>
          <Link href={"/receipts"}>
            <Button variant={"outline"}>My Receipts</Button>
          </Link>
          <Link href={"/manage-plan"}>
            <Button>Manage Plan</Button>
          </Link>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant={"default"}>Sign In</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
}

export default Header;
