import pb from "@/lib/pocketbase";
import { PropsHome } from "@/app/page";

export const VisionMissionValues = ({ props }: PropsHome) => {
  const image = pb.files.getURL(props, props.visionImg);
  return (
    <div className="relative flex min-h-svh px-10 py-20">
      <h2 className="text-4xl font-bold">Wer wir sind und wohin wir gehen</h2>
    </div>
  );
};
