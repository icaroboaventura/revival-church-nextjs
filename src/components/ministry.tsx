import { MinistryCard } from "@/components/ministry-card";
import { ministries } from "@/actions/fetchPublicData";
import { MinistryResponse } from "../../pocketbase-types";

// Dummy data - replace with backend data later
const ministriess = [
  {
    title: "Lobpreis",
    description:
      "Unser Lobpreis-Team leitet die Gemeinde im Gottesdienst durch kraftvolle Musik und Gesang. Wir schaffen eine Atmosphäre der Anbetung und des Lobpreises, die Herzen für Gottes Gegenwart öffnet.",
    image: "/api/placeholder/400/400",
  },
  {
    title: "Gebet",
    description:
      "Das Gebetsministerium ist das Herzstück unserer Gemeinde. Wir glauben an die Kraft des Gebets und schaffen Räume für persönliche und gemeinsame Begegnung mit Gott.",
    image: "/api/placeholder/400/400",
  },
  {
    title: "Kids",
    description:
      "Unser Kids-Ministry bietet Kindern eine sichere und liebevolle Umgebung, in der sie Gottes Liebe erfahren und biblische Wahrheiten lernen können. Wir fördern ihre geistliche Entwicklung durch kreative Programme.",
    image: "/api/placeholder/400/400",
  },
];

export const Ministry = async () => {
  const ministriesData = await ministries();

  return (
    <div className="relative min-h-svh overflow-hidden">
      {/* Background with modern gradients */}
      <div className="from-base-100 via-base-200 to-base-300 absolute inset-0 bg-gradient-to-br" />
      <div className="from-primary/5 to-secondary/5 absolute inset-0 bg-gradient-to-tl via-transparent" />

      {/* Decorative geometric elements */}
      <div className="border-primary/10 absolute top-24 left-16 size-44 rotate-12 border transition-all duration-1000 hover:rotate-45" />
      <div className="border-secondary/10 absolute right-16 bottom-24 size-36 border transition-all duration-1000 hover:scale-110" />
      <div className="border-primary/5 absolute top-1/2 right-1/3 size-28 rotate-45 border transition-all duration-1000 hover:rotate-90" />

      <div className="relative flex min-h-svh flex-col items-center justify-center px-10 py-20">
        {/* Enhanced header section */}
        <div className="group mb-20 text-center">
          {/* Decorative top accent line */}
          <div className="bg-primary mx-auto mb-8 h-1 w-32 transition-all duration-700 group-hover:w-48" />

          <h2 className="font-playfair text-primary mb-6 text-4xl font-extrabold uppercase transition-all duration-300 md:text-5xl lg:text-6xl">
            Unsere Ministerien
          </h2>

          {/* Bottom decorative element */}
          <div className="flex items-center justify-center gap-4">
            <div className="to-primary/50 h-px w-24 bg-gradient-to-r from-transparent" />
            <div className="bg-primary size-3 rounded-full" />
            <div className="to-primary/50 h-px w-24 bg-gradient-to-l from-transparent" />
          </div>
        </div>

        {/* Ministry cards container with enhanced layout */}
        <div className="relative z-10 flex w-full max-w-7xl flex-wrap justify-center gap-8 lg:gap-10">
          {ministriesData.map((ministry: MinistryResponse) => (
            <MinistryCard key={ministry.id} props={ministry} />
          ))}
        </div>

        {/* Bottom section accent */}
        <div className="mt-20 flex items-center gap-6">
          <div className="via-primary/30 h-px max-w-40 flex-1 bg-gradient-to-r from-transparent to-transparent" />
          <div className="via-primary/30 h-px max-w-40 flex-1 bg-gradient-to-l from-transparent to-transparent" />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="via-primary absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-transparent to-transparent" />
    </div>
  );
};
