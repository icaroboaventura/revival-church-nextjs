import Link from "next/link";
import Image from "next/image";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandPaypal,
} from "@tabler/icons-react";
import { ContactResponse } from "../../pocketbase-types";
import pb from "@/lib/pocketbase";

export interface PropsFooter {
  props: ContactResponse;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Veranstaltungen" },
  { href: "/give", label: "Geben" },
  { href: "/shop", label: "Shop" },
];

export const Footer = ({ props }: PropsFooter) => {
  const logoUrl = pb.files.getURL(props, props.logo);
  return (
    <footer className="relative overflow-hidden">
      {/* Background with modern gradients */}
      <div className="from-secondary via-secondary/90 to-base-300 absolute inset-0 bg-gradient-to-br" />
      <div className="from-primary/10 to-secondary/5 absolute inset-0 bg-gradient-to-tl via-transparent" />

      {/* Decorative geometric elements */}
      <div className="border-primary/10 absolute top-10 right-16 size-24 rotate-45 border transition-all duration-1000 hover:rotate-90" />
      <div className="border-primary/5 absolute bottom-10 left-16 size-20 border transition-all duration-1000 hover:scale-110" />

      <div className="relative px-10 py-10">
        <div className="mx-auto max-w-7xl">
          {/* Main Footer Content */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Church Info */}
            <div className="space-y-4">
              <div className="group">
                <Image
                  src={logoUrl}
                  alt={"Revival Church Logo"}
                  width={80}
                  height={80}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="font-playfair text-base-100 mt-4 text-2xl font-bold">
                  Revival Church
                </h3>
              </div>

              <div className="text-base-100/90 space-y-3">
                <div className="flex items-start gap-3">
                  <IconMapPin className="text-primary mt-1 size-5" />
                  <div>
                    <p>{props.street}</p>
                    <p>{props.city}</p>
                    <p>{props.country}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-playfair text-base-100 text-xl font-bold">Kontakt</h4>
              <div className="bg-primary h-0.5 w-16" />

              <div className="text-base-100/90 space-y-4">
                <div className="hover:text-base-100 flex items-center gap-3 transition-colors duration-300">
                  <IconMail className="text-primary size-5" />
                  <a href={`mailto:${props.email}`} className="hover:underline">
                    {props.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-playfair text-base-100 text-xl font-bold">Navigation</h4>
              <div className="bg-primary h-0.5 w-16" />

              <div className="space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base-100/90 hover:text-base-100 block transition-colors duration-300 hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-playfair text-base-100 text-xl font-bold">Folge uns</h4>
              <div className="bg-primary h-0.5 w-16" />

              <div className="flex gap-4">
                {[
                  {
                    href: props.instagram,
                    Icon: IconBrandInstagram,
                    label: "Instagram",
                  },
                  { href: props.youtube, Icon: IconBrandYoutube, label: "YouTube" },
                ].map(({ href, Icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-primary/20 text-primary hover:bg-primary rounded-box hover:text-base-100 flex size-12 items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="size-6" />
                  </Link>
                ))}
              </div>

              <p className="text-base-100/70 text-sm">
                Bleibe mit uns in Verbindung und erhalte Updates über unsere Gemeinde.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 flex items-center gap-6">
            <div className="via-primary/30 h-px flex-1 bg-gradient-to-r from-transparent to-transparent" />
            <div className="bg-primary size-2 rounded-full" />
            <div className="via-primary/30 h-px flex-1 bg-gradient-to-l from-transparent to-transparent" />
          </div>

          {/* Bottom Copyright */}
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-base-100/70 text-sm">
              © {new Date().getFullYear()} Revival Church. Alle Rechte vorbehalten.
            </p>
            <div className="text-base-100/70 flex gap-6 text-sm">
              <Link
                href="/datenschutz"
                className="hover:text-base-100 transition-colors duration-300"
              >
                Datenschutz
              </Link>
              <Link
                href="/impressum"
                className="hover:text-base-100 transition-colors duration-300"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Top accent line */}
      <div className="via-secondary absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent to-transparent" />
    </footer>
  );
};
