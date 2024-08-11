import Card from '@/components/features/Card';
import { FEATURES_LIST } from '@/constants/features';

const Features = () => {
  return (
    <div className="py-[109.5px] w-full bg-slate-200 bg-opacity-20">
      <div className="w-9/12 lg:w-11/12 xl:w-10/12 2xl:w-9/12 mx-auto grid lg:grid-cols-10 gap-[43px]">
        <div className="flex flex-col col-span-4 max-md:w-full">
          <h2 className="text-[28px] leading-9 font-bold font-integral sm:w-[398px]">
            The amazing NFT art of the world here
          </h2>
        </div>
          {FEATURES_LIST.map((feature, index) => (
            <Card key={index} {...feature} />
          ))}
      </div>
    </div>
  );
};

export default Features;
