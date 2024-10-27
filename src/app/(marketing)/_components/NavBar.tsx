import BrandLogo from "@/components/BrandLogo";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const navElements = [
    { href: "/", classname: "mr-auto", content: <BrandLogo /> },
    { href: "#", classname: "text-lg", content: "Features" },
    { href: "/#pricing", classname: "text-lg", content: "Pricing" },
    { href: "#", classname: "text-lg", content: "About" },
  ];
  return (
    <header className="flex py-6 shadow-xl fixed top-0 w-full z-10 backdrop-blur-sm bg-white bg-opacity-80">
      <nav className="flex items-center gap-10 container font-semibold">
        {navElements.map((el, i) => (
          <Link href={el.href} key={i} className={el.classname}>
            {el.content}
          </Link>
        ))}
        <span className="text-lg">
          <SignedIn>
            <Link href="/dashboard">Dashboard</Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>Login</SignInButton>
          </SignedOut>
        </span>
      </nav>
    </header>
  );
};

export default NavBar;
