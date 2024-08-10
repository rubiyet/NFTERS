import Image from "next/image";
import Button from "@/components/common/others/Button";

const Card = ({ image, desc, author, highestBid }) => {
  return (
    <div className="flex items-center space-x-5">
      <Image 
        src={image} 
        alt={`Image of ${author.name}'s collection`} 
        width={147} 
        height={147} 
        className="object-cover rounded-lg"
      />
      <div className="flex flex-col space-y-2">
        <div className="text-xl font-bold font-dmsans">{author.name}</div>
        <div className="flex gap-2.5 items-center">
          <Image 
            src={author.avatar} 
            alt={`Avatar of ${author.name}`} 
            width={34} 
            height={34} 
            className="object-cover rounded-full"
          />
          <div className="flex flex-col text-neutral-700">
            <div className="flex gap-2.5 border rounded-[6px] border-[#00AC4F] px-2 h-8 items-center">
              <Image 
                src={highestBid.icon} 
                alt="Bid Icon" 
                width={13} 
                height={13} 
                className="object-cover"
              />
              <div className="text-[#00AC4F] text-xs font-bold font-dmsans">{highestBid.amount}</div>
            </div>
          </div>
          <div className="text-sm text-[#757575] font-dmsans">{desc}</div>
        </div>
        <Button variant="placeabid">Place a bid</Button>
      </div>
    </div>
  );
};

export default Card;
