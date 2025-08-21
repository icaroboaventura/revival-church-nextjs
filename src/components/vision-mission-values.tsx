import { PropsHome } from "@/app/page";
import { VisionMissionValuesCard } from "@/components/vision-mission-values-card";
import { IconEye, IconTargetArrow, IconUserHeart } from "@tabler/icons-react";

export const VisionMissionValues = ({ props }: PropsHome) => {
  return (
    <div className="relative min-h-svh overflow-hidden">
      {/* Background with modern gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-base-100 via-base-200 to-base-100" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5" />
      
      {/* Decorative geometric elements */}
      <div className="absolute top-32 left-20 size-40 border border-primary/10 rotate-45 transition-all duration-1000 hover:rotate-90" />
      <div className="absolute bottom-32 right-20 size-32 border border-secondary/10 transition-all duration-1000 hover:scale-110" />
      <div className="absolute top-1/2 left-1/4 size-24 border border-primary/5 rotate-12 transition-all duration-1000 hover:rotate-45" />
      
      <div className="relative flex min-h-svh flex-col items-center justify-center px-10 py-20">
        {/* Enhanced header section */}
        <div className="group mb-20 text-center">
          {/* Decorative top accent line */}
          <div className="mx-auto mb-8 h-1 w-24 bg-primary transition-all duration-700 group-hover:w-40" />
          
          <h2 className="font-playfair text-primary mb-6 text-4xl font-extrabold uppercase transition-all duration-300 md:text-5xl lg:text-6xl">
            {props.visionMissionValuesTitle}
          </h2>
          
          {/* Bottom decorative element */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="size-3 rounded-full bg-primary" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>
        
        {/* Cards container with enhanced layout */}
        <div className="relative z-10 flex w-full max-w-7xl flex-wrap justify-center gap-8 lg:gap-12">
          <VisionMissionValuesCard
            icon={<IconEye className={"size-full"} />}
            title={"Unsere Vision"}
            description={props.vision}
          />
          <VisionMissionValuesCard
            icon={<IconTargetArrow className={"size-full"} />}
            title={"Unsere Mission"}
            description={props.mission}
          />
          <VisionMissionValuesCard
            icon={<IconUserHeart className={"size-full"} />}
            title={"Unsere Werte"}
            description={props.values}
          />
        </div>
        
        {/* Bottom section accent */}
        <div className="mt-20 flex items-center gap-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent max-w-32" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/30 to-transparent max-w-32" />
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  );
};