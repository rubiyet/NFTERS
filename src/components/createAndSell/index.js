import Button from "@/components/common/others/Button";
import Image from "next/image";
import { MULTIPLE_COLLECTION_LIST } from "@/constants/collectionList";

const Index = () => {
  return (
    <div className="w-9/12 lg:w-11/12 xl:w-10/12 2xl:w-9/12 mx-auto py-24">
      <div className="gap-y-10 lg:gap-y-0 gap-x-10 grid grid-cols-7 lg:grid-cols-12">
        <div className="relative flex flex-col col-span-4 max-md:ml-0 max-md:w-full">
          <div className="relative flex flex-col grow max-md:mt-6">
            <div className="relative w-full rounded-tl-[30px] pr-6 pb-6 border-2 border-dashed border-gray-400 transform transition-all duration-300 ease-in-out hover:scale-105">
              <Image
                src={MULTIPLE_COLLECTION_LIST[0].image}
                alt={MULTIPLE_COLLECTION_LIST[0].image}
                width={147}
                height={147}
                className="object-contain w-full h-full rounded-xl"
              />
              <div className="absolute bottom-2.5 right-2.5 w-12 h-12">
                <Image
                  src="/images/Avatar1.png"
                  alt="Avatar"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative flex flex-col self-end mt-5 max-w-full w-[235px] transform transition-all duration-300 ease-in-out hover:scale-105">
              <div className="relative">
                <Image
                  src={MULTIPLE_COLLECTION_LIST[1].image}
                  alt={MULTIPLE_COLLECTION_LIST[1].image}
                  width={147}
                  height={147}
                  className="object-contain w-full h-full rounded-xl"
                />
                <div className="absolute -bottom-4 -right-6 w-12 h-12">
                  <Image
                    src="/images/Avatar1.png"
                    alt="Avatar"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col ml-5 col-span-3 max-md:ml-0 max-md:w-full justify-end pb-40 transform transition-all duration-300 ease-in-out hover:scale-105">
          <div className="relative w-full rounded-tl-[30px] pr-6 pb-6 border-2 border-dashed border-gray-400">
            <Image
              src={MULTIPLE_COLLECTION_LIST[2].image}
              alt={MULTIPLE_COLLECTION_LIST[2].image}
              width={147}
              height={147}
              className="object-contain w-full h-full rounded-xl"
            />
            <div className="absolute bottom-2.5 right-2.5 w-12 h-12">
              <Image
                src="/images/Avatar1.png"
                alt="Avatar"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-7 lg:col-span-5">
          <div className="flex flex-col items-start self-stretch my-auto space-y-8">
            <h2 className="w-80 text-[32px] font-bold font-integral transform transition-all duration-300 ease-in-out hover:scale-105">
              Create and sell your NFTs
            </h2>
            <p className="font-dmsans text-[#636363]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
              ac phasellus placerat a pellentesque tellus sed egestas. Et
              tristique dictum sit tristique sed non. Lacinia lorem id
              consectetur pretium diam ut. Pellentesque eu sit blandit fringilla
              risus faucibus.
            </p>
            <Button variant="primary">Sign Up Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
