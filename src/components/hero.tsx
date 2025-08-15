import Link from "next/link";
import { HomeResponse } from "@/lib/pocketbase-types";
import pb from "@/lib/pocketbase";

export interface PropsHome {
  props: HomeResponse;
}

export const Hero = ({ props }: PropsHome) => {
  const image = pb.files.getURL(props, props.heroImg);

  return (
    <>
      <div className="bg-base-300 absolute inset-0" style={{ opacity: 0.75 }} />
      <div
        className="hero min-h-svh"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold">{props.heroTitle}</h1>
            <div
              className="py-6"
              dangerouslySetInnerHTML={{
                __html: props.heroText,
              }}
            />
            <Link href={"/events"} className="btn btn-primary rounded-field">
              Gottesdienst besuchen
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
