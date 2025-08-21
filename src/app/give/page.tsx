import { Give } from "@/components/give";
import { contact, give } from "@/actions/fetchPublicData";

const GivePage = async () => {
  const giveData = await give();
  const contactData = await contact();

  if (!giveData) {
    return (
      <div>
        <h1 className="text-center text-3xl font-bold">Website wird geladen...</h1>
      </div>
    );
  }

  return <Give props={giveData} paypalUrl={contactData?.paypal} />;
};

export default GivePage;
