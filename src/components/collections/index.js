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
    <div className="w-8/12 mx-auto my-[134px] flex space-x-12">
      <SingleCollection
        image={singleCollection.image}
        title={singleCollection.title}
        author={singleCollection.author}
        highestBid={singleCollection.highestBid}
      />
      <MultipleCollection multipleCollectionList={MULTIPLE_COLLECTION_LIST} />
      <hr className="h-[510px] bg-[#ECECEC] w-0.5" />
      <TopCollections topCollections={TOP_COLLECTIONS} />
    </div>
  );
};

export default Index;
