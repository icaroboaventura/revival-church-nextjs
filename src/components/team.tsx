import { PropsHome } from "@/app/page";
import { TeamMemberRecord, TeamMemberResponse } from "../../pocketbase-types";
import pb from "@/lib/pocketbase";
import { teamMembers } from "@/actions/fetchPublicData";
import { TeamCard } from "@/components/team-card";

export const Team = async ({ props }: PropsHome) => {
  const members = await teamMembers();

  return (
    <div className="relative min-h-svh overflow-hidden">
      {/* Background with modern gradients */}
      <div className="from-base-200 via-base-100 to-base-200 absolute inset-0 bg-gradient-to-br" />
      <div className="from-secondary/5 to-primary/5 absolute inset-0 bg-gradient-to-bl via-transparent" />

      {/* Decorative geometric elements */}
      <div className="border-secondary/10 absolute top-20 right-32 size-36 rotate-12 border transition-all duration-1000 hover:rotate-45" />
      <div className="border-primary/10 absolute bottom-20 left-32 size-28 border transition-all duration-1000 hover:scale-110" />
      <div className="border-secondary/5 absolute top-1/3 right-1/4 size-20 rotate-45 border transition-all duration-1000 hover:rotate-90" />

      <div className="relative flex min-h-svh flex-col items-center justify-center px-10 py-20">
        {/* Enhanced header section */}
        <div className="group mb-20 text-center">
          {/* Decorative top accent line */}
          <div className="bg-secondary mx-auto mb-8 h-1 w-28 transition-all duration-700 group-hover:w-44" />

          <h2 className="font-playfair text-secondary mb-6 text-4xl font-extrabold uppercase transition-all duration-300 md:text-5xl lg:text-6xl">
            {props.teamTitle}
          </h2>

          {/* Bottom decorative element */}
          <div className="flex items-center justify-center gap-4">
            <div className="to-secondary/50 h-px w-24 bg-gradient-to-r from-transparent" />
            <div className="rounded-box bg-secondary size-3" />
            <div className="to-secondary/50 h-px w-24 bg-gradient-to-l from-transparent" />
          </div>
        </div>

        {/* Team cards container with enhanced layout */}
        <div className="relative z-10 flex w-full max-w-7xl flex-wrap justify-center gap-10">
          {members.map((member: TeamMemberResponse) => (
            <TeamCard key={member.id} props={member} />
          ))}
        </div>

        {/* Bottom section accent */}
        <div className="mt-20 flex items-center gap-6">
          <div className="via-secondary/30 h-px max-w-36 flex-1 bg-gradient-to-r from-transparent to-transparent" />
          <div className="via-secondary/30 h-px max-w-36 flex-1 bg-gradient-to-l from-transparent to-transparent" />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="via-secondary absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-transparent to-transparent" />
    </div>
  );
};
