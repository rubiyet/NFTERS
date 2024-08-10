import MultipleCollectionCard from "@/components/collections/multipleCollections/Card";

const Index = ({ multipleCollectionList }) => {
  return (
    <div className="flex flex-col justify-between col-span-3">
      {multipleCollectionList.map((collection, index) => (
        <MultipleCollectionCard key={index} {...collection} />
      ))}
    </div>
  );
};

export default Index;