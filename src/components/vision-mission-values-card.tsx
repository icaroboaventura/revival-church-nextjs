import { ReactNode } from "react";

type VisionMissionValuesCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export const VisionMissionValuesCard = (props: VisionMissionValuesCardProps) => {
  return (
    <div className="group rounded-box relative min-h-96 w-80 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Background with gradient */}
      <div className="from-secondary to-secondary/80 absolute inset-0 bg-gradient-to-br" />

      {/* Hover effect overlay */}
      <div className="from-primary/20 to-primary/10 absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center p-8 text-center">
        <div className="bg-primary/20 text-primary rounded-box mb-6 flex size-20 items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <div className="size-10">{props.icon}</div>
        </div>

        <h3 className="font-playfair text-base-100 mb-4 text-2xl font-bold uppercase drop-shadow-sm">
          {props.title}
        </h3>

        <div
          className="text-base-100 group-hover:text-base-100 text-sm leading-relaxed transition-opacity duration-300"
          dangerouslySetInnerHTML={{
            __html: props.description,
          }}
        />
      </div>

      {/* Bottom accent line */}
      <div className="bg-primary motion-ease-spring-bouncier absolute right-0 bottom-0 left-0 h-1 scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100" />
    </div>
  );
};
