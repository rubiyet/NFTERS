import Image from "next/image";
import Button from "@/components/common/others/Button";

const Card = ({ image, desc, author, highestBid }) => {
  return (
    <div className="flex items-center 2xl:space-x-5 space-x-3">
      <Image
        src={image}
        alt={`Image of ${author.name}'s collection`}
        width={147}
        height={147}
        className="object-cover rounded-lg 2xl:w-36 w-28 lg:w-32 h-full transform transition-all duration-300 ease-in-out hover:scale-105"
      />
      <div className="flex flex-col space-y-2">
        <div className="text-xl font-bold font-dmsans">{author.name}</div>
        <div className="flex gap-2.5 items-center w-56">
          <Image
            src={author.avatar}
            alt={`Avatar of ${author.name}`}
            width={34}
            height={34}
            className="object-cover rounded-full w-[34px] h-[34px]"
          />
          <div className="flex flex-col text-neutral-700">
            <div className="flex 2xl:space-x-2 space-x-1 border rounded-[6px] border-[#00AC4F] px-2 h-8 items-center">
              <Image
                src={highestBid.icon}
                alt="Bid Icon"
                width={13}
                height={13}
                className="object-cover"
              />
              <div className="text-[#00AC4F] text-xs font-bold font-dmsans whitespace-nowrap w-16">
                {highestBid.amount}
              </div>{" "}
            </div>
          </div>
          <div className="text-sm text-[#757575] font-dmsans whitespace-nowrap hidden sm:block md:hidden xl:block">
            {desc}
          </div>
        </div>
        <Button variant="placeabid">Place a bid</Button>
      </div>
    </div>
  );
};

export default Card;
