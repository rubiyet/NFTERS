import SingleCollection from "@/components/collections/SingleCollection";
import MultipleCollection from "@/components/collections/multipleCollections";
import TopCollections from "@/components/collections/topCollections";
import {
  SINGLE_COLLECTION_LIST,
  MULTIPLE_COLLECTION_LIST,
  TOP_COLLECTIONS,
} from "@/constants/collectionList";

const Index = () => {
  const [singleCollection] = SINGLE_COLLECTION_LIST;
  
  return (
    <div className="w-9/12 lg:w-11/12 xl:w-10/12 2xl:w-9/12 mx-auto my-[134px] grid grid-cols-3 gap-y-10 lg:gap-y-0 lg:grid-cols-9 gap-x-6">
      <SingleCollection
        image={singleCollection.image}
        title={singleCollection.title}
        author={singleCollection.author}
        highestBid={singleCollection.highestBid}
      />
      <div className="col-span-6 grid md:grid-cols-12 xl:gap-x-10 gap-y-10 md:gap-y-0 lg:gap-x-5 gap-x-2">
        <MultipleCollection multipleCollectionList={MULTIPLE_COLLECTION_LIST} />
        <TopCollections topCollections={TOP_COLLECTIONS} />
      </div>
    </div>
  );
};

export default Index;
