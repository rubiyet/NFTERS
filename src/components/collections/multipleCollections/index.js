import Card from "@/components/collections/multipleCollections/Card";

const Index = ({ multipleCollectionList }) => {
  return (
    <div className="grid grid-flow-row gap-8 col-span-6 md:border-r-2">
      {multipleCollectionList.map((collection, index) => (
        <Card key={index} {...collection} />
      ))}
    </div>
  );
};

export default Index;