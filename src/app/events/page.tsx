import { EventCard } from "@/components/event-card";
import { eventPage, events } from "@/actions/fetchPublicData";

const EventsPage = async () => {
  const eventsData = await events();
  const eventsPageData = await eventPage();

  if (!eventsData || !eventsPageData) {
    return (
      <div>
        <h1 className="text-center text-3xl font-bold">Website wird geladen...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] overflow-hidden">
        {/* Background gradients */}
        <div className="from-primary via-primary/90 to-base-300 absolute inset-0 bg-gradient-to-br" />
        <div className="from-secondary/10 to-primary/5 absolute inset-0 bg-gradient-to-tl via-transparent" />

        {/* Decorative geometric elements */}
        <div className="border-primary-content/20 absolute top-20 right-24 size-32 rotate-45 border transition-all duration-1000 hover:rotate-90" />
        <div className="border-primary-content/10 absolute bottom-20 left-24 size-28 border transition-all duration-1000 hover:scale-110" />

        <div className="relative flex min-h-[60vh] items-center justify-center px-10 py-20">
          <div className="max-w-4xl text-center">
            {/* Decorative accent line */}
            <div className="bg-primary-content/60 mx-auto mb-8 h-1 w-24" />

            <h1 className="font-playfair text-primary-content mb-8 text-5xl font-extrabold uppercase md:text-6xl lg:text-7xl">
              Veranstaltungen
            </h1>

            <p className="text-primary-content/90 mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
              Entdecke unsere kommenden Gottesdienste, Events und Gemeinschaftsaktivitäten. Sei
              dabei und erlebe Gemeinschaft, Wachstum und Inspiration.
            </p>

            {/* Bottom decorative element */}
            <div className="mt-8 flex items-center justify-center gap-6">
              <div className="via-primary-content/50 h-px w-20 bg-gradient-to-r from-transparent to-transparent" />
              <div className="bg-primary-content/60 size-2 rounded-full" />
              <div className="via-primary-content/50 h-px w-20 bg-gradient-to-l from-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="via-primary-content/40 absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-transparent to-transparent" />
      </div>

      {/* Events Grid Section */}
      <div className="bg-base-100 relative overflow-hidden py-20">
        {/* Background Pattern */}
        <div className="from-base-100 to-base-200 absolute inset-0 bg-gradient-to-br" />

        {/* Decorative elements */}
        <div className="border-primary/10 absolute top-16 right-20 size-24 rotate-12 border transition-all duration-1000 hover:rotate-45" />
        <div className="border-secondary/10 absolute bottom-16 left-20 size-20 border transition-all duration-1000 hover:scale-110" />

        <div className="relative px-10">
          <div className="mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <div className="bg-primary mx-auto mb-6 h-1 w-20" />
              <h2 className="font-playfair text-base-content mb-6 text-4xl font-bold md:text-5xl">
                Kommende Events
              </h2>
              <p className="text-base-content/80 mx-auto max-w-2xl text-lg">
                Verpasse keine unserer besonderen Veranstaltungen und sei Teil unserer lebendigen
                Gemeinschaft.
              </p>
            </div>

            {/* Events Grid */}
            <div className="flex w-full justify-center gap-8">
              {eventsData.map((event) => (
                <EventCard key={event.id} props={event} />
              ))}
            </div>

            {/* Bottom decorative divider */}
            <div className="mt-16 flex items-center justify-center gap-6">
              <div className="via-primary/30 h-px flex-1 bg-gradient-to-r from-transparent to-transparent" />
              <div className="bg-primary size-2 rounded-full" />
              <div className="via-primary/30 h-px flex-1 bg-gradient-to-l from-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
