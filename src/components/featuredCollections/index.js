import Card from "@/components/featuredCollections/Card";
import { FEATURED_COLLECTIONS } from "@/constants/collectionList";

const Index = () => {
  return (
    <div className="py-[109.5px] w-full bg-slate-200 bg-opacity-20">
      <div className="w-9/12 lg:w-11/12 xl:w-10/12 2xl:w-9/12 mx-auto space-y-[55px]">
        <h2 className="text-[28px] font-bold font-integral transform transition-all duration-300 ease-in-out hover:scale-105">
          Collection Featured Nets
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURED_COLLECTIONS.map((collection, index) => (
            <Card key={index} {...collection} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
