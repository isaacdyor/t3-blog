"use client";
import Link from "next/link";
import React, { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const routes: { title: string; href: string }[] = [
  { title: "Features", href: "#features" },
  { title: "Resources", href: "#resources" },
  { title: "Pricing", href: "#pricing" },
];

const Navbar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="border-b-border flex h-16 items-center justify-between border-b px-6 lg:px-14">
      <div className="flex items-center">
        <Link href={"/"} className="shrink-0">
          <h1 className="text-accent-foreground text-2xl font-bold">devlink</h1>
        </Link>
        <div className="bg-background hidden w-full justify-end gap-1 px-4 py-2 sm:flex">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.href}
              className={`hover:text-accent-foreground text-muted-foreground inline-flex h-10 w-full items-center px-4 py-2 text-sm transition-colors sm:w-auto`}
            >
              {route.title}
            </Link>
          ))}
        </div>
      </div>

      {children}

      {menuOpen && <MobileMenu toggleMenu={toggleMenu} children />}

      <button onClick={toggleMenu} className="sm:hidden">
        {menuOpen ? (
          <XMarkIcon className="h-7 w-7" />
        ) : (
          <Bars3Icon className="h-7 w-7" />
        )}
      </button>
    </div>
  );
};

const MobileMenu: React.FC<{
  toggleMenu: () => void;
  children: React.ReactNode;
}> = ({ toggleMenu, children }) => {
  return (
    <div className="absolute right-0 top-16 flex h-[calc(100vh-64px)] w-full flex-col">
      <div className="bg-background  flex w-full grow flex-col gap-1 px-4 pb-2 sm:hidden">
        {routes.map((route, index) => (
          <Link
            key={index}
            href={route.href}
            onClick={toggleMenu}
            className={`hover:text-accent-foreground text-muted-foreground inline-flex h-10 w-full items-center text-sm transition-colors sm:w-auto`}
          >
            {route.title}
          </Link>
        ))}
        {children}
      </div>
      <div className="bg-background/60 h-screen w-full sm:hidden" />
    </div>
  );
};

export default Navbar;
