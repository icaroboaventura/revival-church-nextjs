"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ContactResponse } from "../../pocketbase-types";
import { IconMenu2, IconX } from "@tabler/icons-react";
import pb from "@/lib/pocketbase";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Veranstaltungen" },
  { href: "/give", label: "Geben" },
  { href: "/shop", label: "Shop" },
];

const authNavigation = [{ href: "/login", label: "Anmelden" }];

export interface PropsNavbar {
  props: ContactResponse;
}

export const Navbar = ({ props }: PropsNavbar) => {
  const pathname = usePathname();
  const logoUrl = pb.files.getURL(props, props.logo);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <nav className="bg-base-100 fixed z-20 flex h-16 w-full items-center justify-between px-8">
      {/* Logo with enhanced styling */}
      <Link href="/" className="group relative">
        <Image
          src={logoUrl}
          alt="logo"
          className="relative w-28 transition-transform duration-300 group-hover:scale-105"
          width={120}
          height={120}
        />
      </Link>

      {/* Desktop Navigation with modern styling */}
      <ul className="hidden gap-2 md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "btn rounded-box relative overflow-hidden px-6 py-2 font-semibold transition-all duration-300 hover:scale-105",
                pathname === link.href
                  ? "btn-primary shadow-primary/25 shadow-lg"
                  : "btn-ghost hover:btn-primary/10 hover:shadow-md",
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Auth Navigation with enhanced buttons */}
      <ul className="hidden items-center gap-3 md:flex">
        {authNavigation.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="btn btn-primary rounded-box shadow-primary/25 hover:shadow-primary/30 relative overflow-hidden px-6 py-2 font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span className="relative z-10">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu button with modern styling */}
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn-primary btn-circle shadow-primary/25 hover:shadow-primary/30 relative overflow-hidden shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl md:hidden"
      >
        <IconMenu2 className="transition-transform duration-300 hover:rotate-90" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Enhanced backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            {/* Modern mobile menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
              className="from-base-100 via-base-100 to-base-200 fixed top-0 right-0 z-40 flex h-svh w-full flex-col bg-gradient-to-br px-8 py-6 shadow-2xl"
            >
              {/* Enhanced close button */}
              <button
                className="btn btn-primary btn-circle shadow-primary/25 hover:shadow-primary/30 mb-8 self-end shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-90 hover:shadow-xl"
                onClick={() => setIsOpen(false)}
              >
                <IconX />
              </button>

              {/* Navigation with modern styling */}
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href} className="py-1">
                    <Link
                      href={link.href}
                      className={cn(
                        "btn rounded-box w-full py-6 text-lg font-semibold shadow-md transition-all duration-300 hover:scale-105",
                        pathname === link.href
                          ? "btn-primary shadow-primary/25 shadow-lg"
                          : "btn-ghost hover:btn-primary/10 hover:shadow-lg",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Enhanced divider */}
              <div className="my-8">
                <div className="via-primary/30 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
              </div>

              {/* Auth navigation with enhanced styling */}
              <ul className="space-y-3">
                {authNavigation.map((link) => (
                  <li key={link.href} className="py-1">
                    <Link
                      href={link.href}
                      className="btn btn-primary rounded-box shadow-primary/25 hover:shadow-primary/30 w-full py-6 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Decorative elements */}
              <div className="mt-auto flex justify-center">
                <div className="flex items-center gap-4">
                  <div className="to-primary/50 h-px w-16 bg-gradient-to-r from-transparent" />
                  <div className="bg-primary rounded-box size-2" />
                  <div className="to-primary/50 h-px w-16 bg-gradient-to-l from-transparent" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
