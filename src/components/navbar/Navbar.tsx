"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "/public/logo.png";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { Button } from "../ui/button";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const routes: { title: string; href: string }[] = [
    { title: "Features", href: "#features" },
    { title: "Resources", href: "#resources" },
    { title: "Pricing", href: "#pricing" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex h-16 items-center justify-between px-6 lg:px-14">
      <div className="flex items-center">
        <Link href={"/"} className="shrink-0">
          <h1 className="text-accent-foreground text-2xl font-bold">Devlink</h1>
        </Link>
        <div className="bg-background hidden w-full justify-end  gap-1 px-4 py-2 md:flex">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.href}
              className={`hover:text-accent-foreground text-muted-foreground inline-flex h-10 w-full items-center rounded-md px-4 py-2 text-sm font-normal transition-colors md:w-auto`}
            >
              {route.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="invisible flex items-center gap-2 md:visible">
        <Link href={"/login"} className="w-full md:w-auto md:px-1">
          <Button variant="secondary" size="sm" className="w-full">
            Log In
          </Button>
        </Link>
        <Link href="/signup" className="w-full md:w-auto">
          <Button variant="default" size="sm" className="w-full">
            Sign Up
          </Button>
        </Link>
      </div>

      <button onClick={toggleMenu} className="mr-4 md:hidden">
        {menuOpen ? (
          <XMarkIcon className="h-7 w-7" />
        ) : (
          <Bars3Icon className="h-7 w-7" />
        )}
      </button>
    </div>
  );
};

export default Navbar;
