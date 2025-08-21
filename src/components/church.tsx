import { PropsHome } from "@/app/page";
import pb from "@/lib/pocketbase";

export const Church = ({ props }: PropsHome) => {
  const image = pb.files.getURL(props, props.churchImg);
  return (
    <div className="relative min-h-svh overflow-hidden">
      {/* Background Pattern/Texture */}
      <div className="from-base-100 to-base-200 absolute inset-0 bg-gradient-to-br" />

      <div className="relative flex min-h-svh flex-col items-center justify-center md:flex-row">
        {/* Content Section */}
        <div className="group relative z-10 flex flex-1 flex-col justify-center px-10 py-20 md:px-20">
          <div className="max-w-2xl">
            {/* Decorative accent line */}
            <div className="bg-secondary mb-6 h-1 w-20 transform transition-all duration-700 group-hover:w-32" />

            <h2 className="font-playfair text-secondary mb-8 text-4xl font-extrabold uppercase transition-all duration-300 md:text-5xl lg:text-6xl">
              {props.churchTitle}
            </h2>

            <div
              className="prose prose-lg text-base-content/90 group-hover:text-base-content max-w-none transition-colors duration-300"
              dangerouslySetInnerHTML={{
                __html: props.churchText,
              }}
            />

            {/* Bottom decorative element */}
            <div className="mt-8 flex items-center gap-4">
              <div className="from-secondary/50 h-px flex-1 bg-gradient-to-r to-transparent" />
              <div className="bg-secondary size-2 rounded-full" />
              <div className="from-secondary/50 h-px flex-1 bg-gradient-to-l to-transparent" />
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="group relative min-h-96 flex-1 md:min-h-svh">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />

          {/* Modern gradient overlay */}
          <div className="from-base-300/80 to-primary/20 absolute inset-0 bg-gradient-to-tr via-transparent transition-transform duration-700 group-hover:scale-105" />

          {/* Hover overlay */}
          <div className="from-primary/10 to-secondary/10 absolute inset-0 bg-gradient-to-br opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105" />

          {/* Decorative geometric elements */}
          <div className="border-secondary/30 absolute top-10 right-10 size-20 rotate-45 border-2 transition-transform duration-700 group-hover:rotate-90" />
          <div className="border-primary/30 absolute bottom-10 left-10 size-16 border-2 transition-transform duration-700 group-hover:scale-125" />
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </div>
  );
};