import Features from "@/components/features";
import Hero from "@/components/Hero";
import Collection from "@/components/collections";
import FeaturedCollections from "@/components/featuredCollections";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Collection />
      <FeaturedCollections />
    </>
  );
};

export default Home;
