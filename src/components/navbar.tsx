"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { NavbarResponse } from "@/lib/pocketbase-types";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/give", label: "Geben" },
  { href: "/shop", label: "Shop" },
];

export interface PropsNavbar {
  props: NavbarResponse;
}

export const Navbar = ({ props }: PropsNavbar) => {
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add("bg-base-100", "shadow-md");
        } else {
          navbar.classList.remove("bg-base-100", "shadow-md");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={"fixed z-40 flex h-14 w-full items-center justify-between px-8"}>
      <Image src={"/logo.png"} alt={"logo"} width={100} height={100} />
      <ul className={"hidden gap-2 md:flex"}>
        {navigation.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "btn rounded-field",
                pathname === link.href ? "btn-primary" : "btn-ghost",
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className={"flex items-center gap-2"}>
        <Link href={"/login"} className="btn btn-primary rounded-field">
          Anmelden
        </Link>
        <Link href={"/register"} className="btn btn-secondary rounded-field">
          Registrieren
        </Link>
      </div>
    </nav>
  );
};
