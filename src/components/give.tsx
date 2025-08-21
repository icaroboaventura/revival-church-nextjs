"use client";

import Link from "next/link";
import { IconBrandPaypal, IconCreditCard, IconCopy } from "@tabler/icons-react";
import toast from "react-hot-toast";
import { GiveResponse } from "../../pocketbase-types";

interface GiveProps {
  props: GiveResponse;
  paypalUrl?: string;
}

// Dummy data - replace with CMS data later
const props = {
  title: "Geben",
  description:
    "Deine Unterstützung ermöglicht es uns, das Evangelium zu verkünden und Menschen in unserer Gemeinde und darüber hinaus zu dienen. Jede Gabe, ob groß oder klein, macht einen Unterschied.",
  paypal: {
    url: "https://paypal.me/revivalchurch",
    label: "Spende über PayPal",
  },
  bankDetails: {
    iban: "DE89 3704 0044 0532 0130 00",
    bic: "COBADEFFXXX",
    bankName: "Commerzbank AG",
    recipient: "Revival Church e.V.",
  },
};

export const Give = ({ props, paypalUrl }: GiveProps) => {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} wurde kopiert!`, {
      duration: 2000,
      position: "bottom-center",
      style: {
        background: "#2b0b00", // secondary color
        color: "#e53a02", // primary color
        borderRadius: "8px",
        fontWeight: "600",
        fontSize: "14px",
        padding: "12px 16px",
      },
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Secondary Colors */}
      <div className="relative min-h-[60vh] overflow-hidden">
        {/* Background gradients */}
        <div className="from-secondary via-secondary/90 to-base-300 absolute inset-0 bg-gradient-to-br" />
        <div className="from-primary/10 to-secondary/5 absolute inset-0 bg-gradient-to-tl via-transparent" />

        {/* Decorative geometric elements */}
        <div className="border-secondary-content/20 absolute top-20 right-24 size-32 rotate-45 border transition-all duration-1000 hover:rotate-90" />
        <div className="border-secondary-content/10 absolute bottom-20 left-24 size-28 border transition-all duration-1000 hover:scale-110" />

        <div className="relative flex min-h-[60vh] items-center justify-center px-10 py-20">
          <div className="max-w-4xl text-center">
            {/* Decorative accent line */}
            <div className="bg-secondary-content/60 mx-auto mb-8 h-1 w-24" />

            <h1 className="font-playfair text-secondary-content mb-8 text-5xl font-extrabold uppercase md:text-6xl lg:text-7xl">
              {props.giveTitle}
            </h1>

            <div
              className="text-secondary-content/90 mx-auto max-w-2xl text-lg leading-relaxed md:text-xl"
              dangerouslySetInnerHTML={{ __html: props.giveText }}
            />

            {/* Bottom decorative element */}
            <div className="mt-8 flex items-center justify-center gap-6">
              <div className="via-secondary-content/50 h-px w-20 bg-gradient-to-r from-transparent to-transparent" />
              <div className="rounded-box bg-secondary-content/60 size-2" />
              <div className="via-secondary-content/50 h-px w-20 bg-gradient-to-l from-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="via-secondary-content/40 absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-transparent to-transparent" />
      </div>

      {/* Donation Methods Section */}
      <div className="bg-base-100 relative overflow-hidden py-20">
        {/* Background Pattern */}
        <div className="from-base-100 to-base-200 absolute inset-0 bg-gradient-to-br" />

        {/* Decorative elements */}
        <div className="border-secondary/10 absolute top-16 right-20 size-24 rotate-12 border transition-all duration-1000 hover:rotate-45" />
        <div className="border-primary/10 absolute bottom-16 left-20 size-20 border transition-all duration-1000 hover:scale-110" />

        <div className="relative px-10">
          <div className="mx-auto max-w-4xl">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <div className="bg-secondary mx-auto mb-6 h-1 w-20" />
              <h2 className="font-playfair text-base-content mb-6 text-4xl font-bold md:text-5xl">
                Spendenmöglichkeiten
              </h2>
              <p className="text-base-content/80 mx-auto max-w-2xl text-lg">
                Wähle die für dich passende Methode, um unsere Gemeinschaft zu unterstützen.
              </p>
            </div>

            {/* Donation Methods Grid */}
            <div className="grid gap-8">
              {/* PayPal Card */}
              <div className="group rounded-box from-primary via-primary/90 to-primary/80 relative overflow-hidden bg-gradient-to-br p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="rounded-box bg-primary-content/20 flex size-16 items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <IconBrandPaypal className="text-primary-content size-8" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-primary-content text-2xl font-bold">
                        PayPal
                      </h3>
                      <p className="text-primary-content/80">Schnell & Sicher</p>
                    </div>
                  </div>

                  <p className="text-primary-content/90 mb-6 leading-relaxed">
                    Spende schnell und sicher über PayPal. Deine Transaktion wird sofort
                    verarbeitet.
                  </p>

                  <Link
                    href={paypalUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary rounded-box shadow-secondary/25 hover:shadow-secondary/30 w-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    Spenden über PayPal
                  </Link>
                </div>

                {/* Decorative elements */}
                <div className="rounded-box bg-primary-content/5 absolute -top-4 -right-4 size-20 transition-transform duration-700 group-hover:rotate-12" />
                <div className="rounded-box bg-primary-content/5 absolute -bottom-4 -left-4 size-16 transition-transform duration-700 group-hover:scale-110" />

                {/* Bottom accent line */}
                <div className="bg-secondary absolute right-0 bottom-0 left-0 h-1 scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100" />
              </div>

              {/* Bank Transfer Card */}
              <div className="group rounded-box from-secondary via-secondary/90 to-secondary/80 relative overflow-hidden bg-gradient-to-br p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="rounded-box bg-secondary-content/20 flex size-16 items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <IconCreditCard className="text-secondary-content size-8" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-secondary-content text-2xl font-bold">
                        Banküberweisung
                      </h3>
                      <p className="text-secondary-content/80">Traditionell & Zuverlässig</p>
                    </div>
                  </div>

                  <p className="text-secondary-content/90 mb-6 leading-relaxed">
                    Überweise direkt auf unser Bankkonto. Verwende gerne den Verwendungszweck
                    "Spende".
                  </p>

                  {/* Bank Details */}
                  <div className="rounded-box bg-secondary-content/10 space-y-4 p-6 backdrop-blur-sm">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-secondary-content/80 font-medium">Empfänger:</span>
                        <button
                          onClick={() =>
                            copyToClipboard(props.bankueberweisungEmpfaenger, "Empfängername")
                          }
                          className="btn btn-primary btn-sm rounded-box transition-all duration-300 hover:scale-105"
                          title="Empfängername kopieren"
                        >
                          <IconCopy className="size-4" />
                        </button>
                      </div>
                      <span className="text-secondary-content block font-mono text-lg font-semibold">
                        {props.bankueberweisungEmpfaenger}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-secondary-content/80 block font-medium">Bank:</span>
                      <span className="text-secondary-content block">
                        {props.bankueberweisungBank}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-secondary-content/80 font-medium">IBAN:</span>
                        <button
                          onClick={() => copyToClipboard(props.bankueberweisungIban, "IBAN")}
                          className="btn btn-primary btn-sm rounded-box transition-all duration-300 hover:scale-105"
                          title="IBAN kopieren"
                        >
                          <IconCopy className="size-4" />
                        </button>
                      </div>
                      <span className="text-secondary-content bg-secondary-content/10 rounded-box block p-3 font-mono text-lg font-semibold">
                        {props.bankueberweisungIban}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-secondary-content/80 block font-medium">BIC:</span>
                      <span className="text-secondary-content bg-secondary-content/10 rounded-box block p-3 font-mono text-lg">
                        {props.bankueberweisungBic}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="rounded-box bg-secondary-content/5 absolute -top-4 -right-4 size-20 transition-transform duration-700 group-hover:rotate-12" />
                <div className="rounded-box bg-secondary-content/5 absolute -bottom-4 -left-4 size-16 transition-transform duration-700 group-hover:scale-110" />

                {/* Bottom accent line */}
                <div className="bg-primary absolute right-0 bottom-0 left-0 h-1 scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            </div>

            {/* Bottom decorative divider */}
            <div className="mt-16 flex items-center justify-center gap-6">
              <div className="via-secondary/30 h-px flex-1 bg-gradient-to-r from-transparent to-transparent" />
              <div className="rounded-box bg-secondary size-2" />
              <div className="via-secondary/30 h-px flex-1 bg-gradient-to-l from-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
