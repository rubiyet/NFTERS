import Features from "@/components/features";
import Hero from "@/components/hero";
import Collection from "@/components/collections";
import FeaturedCollections from "@/components/featuredCollections";
import CreateAndSell from "@/components/createAndSell";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Collection />
      <FeaturedCollections />
      <CreateAndSell />
    </>
  );
};

export default Home;
