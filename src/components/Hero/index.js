import Button from "@/components/common/others/Button";
import Image from "next/image";
import { STATS_LIST } from "@/constants/heroStarsList";

const Hero = () => {
  return (
    <div className="mt-[57px] mb-[122px] w-9/12 lg:w-11/12 xl:w-10/12 2xl:w-9/12 mx-auto">
      <div className="flex flex-col space-y-16 lg:space-y-0 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-end space-y-[30px]">
          <div className="space-y-[41px] max-w-xl w-full">
            <h1 className="text-4xl font-bold tracking-wide font-integral">
              Discover and Collect Digital Art NFTs
            </h1>
            <p className="text-xl leading-8 text-[#565656] font-dmsans max-w-md">
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, sell, and discover exclusive digital assets.
            </p>
            <Button variant="primary">Explore Now</Button>
          </div>
          <div className="flex space-x-8 text-center md:text-left">
            {STATS_LIST.map((item) => (
              <div key={item.title} className="flex flex-col">
                <span className="sm:text-4xl text-2xl font-bold font-integral">
                  {item.count}
                </span>
                <span className="text-xl text-black font-dmsans">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-end items-center w-[280px] h-[300px] sm:w-[500px] md:w-[550px] sm:h-[440px]">
          <Image
            src="/images/HeroBanner.png"
            alt="Hero Banner"
            width={550}
            height={440}
            className="w-full h-full"
          />
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8/12 space-y-2 text-white">
            <h1 className="text-sm sm:text-lg md:text-2xl font-bold font-dmsans">
              Abstr Gradient NFT
            </h1>
            <div className="flex items-center space-x-3">
              <Image
                src="/images/Avatar.png"
                alt="Avatar"
                width={32}
                height={32}
              />
              <p className="text-sm sm:text-lg">Arkhan17</p>
            </div>
          </div>
          <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 sm:w-8/12 text-white backdrop-blur-xl bg-white bg-opacity-20 rounded-xl p-5 flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0">
          <div className="sm:space-y-2">
              <h1 className="text-sm font-medium font-dmsans">Current Bid</h1>
              <div className="flex items-center space-x-2">
                <Image
                  src="/icons/Bit.svg"
                  alt="Bit Icon"
                  width={12}
                  height={12}
                />
                <p className="font-dmsans font-bold text-xs sm:text-base">0.25 ETH</p>
              </div>
            </div>
            <div className="sm:space-y-2">
            <h1 className="text-sm font-medium font-dmsans">Ends in</h1>
              <div className="flex items-center space-x-2">
                <Image
                  src="/icons/Bit.svg"
                  alt="Bit Icon"
                  width={12}
                  height={12}
                />
                <p className="font-dmsans font-bold text-xs sm:text-base">12h 43m 42s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
