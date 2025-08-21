import pb from "@/lib/pocketbase";
import { PropsHome } from "@/app/page";

export const VisionMissionValues = ({ props }: PropsHome) => {
  const image = pb.files.getURL(props, props.visionImg);
  const vision = props.vision;
  const mission = props.mission;
  const values = props.values;

  console.log({ image, vision, mission, values });

  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center px-10 py-20">
      <h2 className="text-4xl font-bold uppercase">Wer wir sind und wohin wir gehen</h2>
      <div className="flex items-center justify-center md:flex-row md:justify-between">
        <div className={"flex-1/2"}>
          <h3 className={"text-center text-2xl font-semibold"}>Unsere Vision</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: props.vision,
            }}
          />
        </div>
        <div className={"flex-1/2"}>
          <h3 className={"text-center text-2xl font-semibold"}>Unsere Mission</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: props.mission,
            }}
          />
        </div>
      </div>
      <div>
        <h3 className={"text-2xl font-semibold"}>Unsere Werte</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: props.values,
          }}
        />
      </div>
    </div>
  );
};
