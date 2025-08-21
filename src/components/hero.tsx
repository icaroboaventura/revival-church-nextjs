import Link from "next/link";
import pb from "@/lib/pocketbase";
import { PropsHome } from "@/app/page";
import { IconBrandInstagram, IconBrandPaypal, IconBrandYoutube } from "@tabler/icons-react";
import { ContactResponse } from "../../pocketbase-types";

interface Props extends PropsHome {
  contacts: ContactResponse;
}

export const Hero = ({ props, contacts }: Props) => {
  const image = pb.files.getURL(props, props.heroImg);

  return (
    <>
      <div className="relative min-h-svh overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-fixed bg-center transition-transform duration-1000 hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Modern Multi-layer Gradients */}
        <div className="from-base-300/90 via-base-300/50 absolute inset-0 bg-gradient-to-tr to-transparent" />
        <div className="from-primary/20 to-secondary/30 absolute inset-0 bg-gradient-to-bl via-transparent" />
        <div className="from-base-300/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />

        {/* Decorative geometric elements */}
        <div className="border-primary/20 absolute top-20 right-20 size-32 rotate-45 border-2 transition-all duration-1000 hover:scale-110 hover:rotate-90" />
        <div className="border-secondary/20 absolute bottom-32 left-20 size-24 border-2 transition-all duration-1000 hover:scale-125" />

        {/* Main Content */}
        <div className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center md:top-40 md:left-10 md:translate-x-0 md:translate-y-0 md:text-start">
          <div className="max-w-3xl">
            {/* Decorative accent line */}
            <div className="bg-primary mx-auto mb-6 h-1 w-20 transition-all duration-700 group-hover:w-32 md:mx-0" />

            <h1 className="font-playfair group-hover:text-secondary text-base-100 text-5xl font-extrabold uppercase drop-shadow-2xl transition-all duration-500 md:text-6xl lg:text-7xl">
              {props.heroTitle}
            </h1>

            <div
              className="prose prose-lg text-secondary group-hover:text-base-100 max-w-none py-8 transition-all duration-300"
              dangerouslySetInnerHTML={{
                __html: props.heroText,
              }}
            />

            {/* Enhanced CTA Button */}
            <div className="flex flex-col items-center gap-4 md:items-start">
              <Link
                href={"/events"}
                className="btn btn-primary btn-lg hover:btn-secondary rounded-box px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Besuche uns
              </Link>

              {/* Bottom decorative element */}
              <div className="flex items-center gap-4">
                <div className="from-primary/50 h-px w-16 bg-gradient-to-r to-transparent" />
                <div className="bg-primary rounded-box size-2" />
                <div className="from-primary/50 h-px w-16 bg-gradient-to-l to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Social Media Links */}
        <div className="absolute right-6 bottom-6 flex flex-col gap-3 md:right-10 md:bottom-10 md:flex-row md:gap-4">
          {[
            { href: contacts.instagram, Icon: IconBrandInstagram },
            { href: contacts.youtube, Icon: IconBrandYoutube },
            { href: contacts.paypal, Icon: IconBrandPaypal },
          ].map(({ href, Icon }, index) => (
            <Link
              key={index}
              className="group/social btn rounded-box btn-primary hover:btn-secondary size-12 p-2 transition-all duration-300 hover:scale-110 hover:shadow-xl md:size-16"
              href={href}
              target={"_blank"}
            >
              <Icon className="size-full transition-transform duration-300 group-hover/social:rotate-12" />
            </Link>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="via-primary absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-transparent to-transparent" />
      </div>
    </>
  );
};
