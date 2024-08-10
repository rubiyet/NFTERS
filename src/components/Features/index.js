import FeatureCard from '@/components/features/Card';
import { FEATURES_LIST } from '@/constants/features';

const Features = () => {
  return (
    <section className="py-[109.5px] w-full bg-slate-200 bg-opacity-20">
      <div className="w-8/12 mx-auto grid grid-cols-1 gap-[86px] max-md:w-full max-md:gap-8 md:grid-cols-10">
        <div className="flex flex-col col-span-4 max-md:w-full">
          <h2 className="text-[28px] leading-9 font-bold font-integral w-[398px]">
            The amazing NFT art of the world here
          </h2>
        </div>
          {FEATURES_LIST.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
      </div>
    </section>
  );
};

export default Features;
