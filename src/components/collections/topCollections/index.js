import Card from "@/components/collections/topCollections/Card";

const Index = ({ topCollections }) => {
  return (
    <div className="flex flex-col col-span-6 space-y-8">
      <div className="space-y-[10px]">
        <h3 className="text-xl font-bold font-dmsans">Top Collections over</h3>
        <div className="text-lg font-bold text-[#3D00B7] font-dmsans">
          Last 7 days
        </div>
      </div>
      <div className="flex flex-col items-start space-y-2">
        {topCollections.map((collection, index) => (
          <div className="flex flex-col items-start w-full" key={collection.id || index}>
            <Card {...collection} />
            {index < topCollections.length - 1 && (
              <hr className="w-full h-0.5 bg-zinc-200 my-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
