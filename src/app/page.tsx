import { Hero } from "@/components/hero";
import { Church } from "@/components/church";
import { home } from "@/actions/fetchPublicData";

const Home = async () => {
  const homeData = await home();

  console.log("Home data:", homeData);

  if (!homeData) {
    return (
      <div>
        <h1 className="text-center text-3xl font-bold">Website wird geladen...</h1>
      </div>
    );
  }

  return (
    <main>
      <Hero props={homeData} />
      <Church />
    </main>
  );
};

export default Home;
