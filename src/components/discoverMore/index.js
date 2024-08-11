import Filter from "@/components/discoverMore/Filter";
import Items from "@/components/discoverMore/Items";
import Button from "@/components/common/others/Button";

const DiscoverMore = () => {
  const categories = [
    "All Categories",
    "Art",
    "Celebrities",
    "Gaming",
    "Sport",
    "Music",
    "Crypto",
  ];

  return (
    <div className="py-[109.5px] w-full bg-slate-200 bg-opacity-20">
      <div className="w-9/12 lg:w-11/12 xl:w-10/12 2xl:w-9/12 mx-auto space-y-10">
        <h2 className="text-4xl font-bold font-integral transform transition-all duration-300 ease-in-out hover:scale-105">
          Discover more Nets
        </h2>
        <Filter categories={categories} />
        <Items />
        <div className="flex justify-center">
          <Button variant="secondary">More NFTs</Button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMore;
