import { Hero } from "@/components/hero";
import { Church } from "@/components/church";
import { home, contact } from "@/actions/fetchPublicData";
import { VisionMissionValues } from "@/components/vision-mission-values";
import { Team } from "@/components/team";
import { HomeResponse } from "../../pocketbase-types";
import { Ministry } from "@/components/ministry";

export interface PropsHome {
  props: HomeResponse;
}

const Home = async () => {
  const homeData = await home();
  const contactData = await contact();

  if (!homeData || !contactData) {
    return (
      <div>
        <h1 className="text-center text-3xl font-bold">Website wird geladen...</h1>
      </div>
    );
  }

  return (
    <main>
      <Hero props={homeData} contacts={contactData} />
      <Church props={homeData} />
      <VisionMissionValues props={homeData} />
      <Team props={homeData} />
      <Ministry />
    </main>
  );
};

export default Home;
