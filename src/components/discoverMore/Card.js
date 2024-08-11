import Image from "next/image";

const Item = ({ image, author, highestBid, desc, duration }) => {
  return (
    <div className="flex flex-col w-full rounded-xl bg-white p-4 hover:shadow-md hover:scale-105 transform transition-all duration-300 ease-in-out">
      <Image
        src={image}
        alt={image}
        width={272}
        height={272}
        className="w-full"
      />
      <div className="flex flex-col space-y-2">
        <div className="text-xl font-bold font-dmsans">{author.name}</div>
        <div className="flex gap-2.5 items-center justify-between">
          <div className="flex flex-col">
            <div className="flex 2xl:space-x-2 space-x-1 rounded-[6px] px-2 h-8 items-center">
              <Image
                src={highestBid.icon}
                alt="Bid Icon"
                width={13}
                height={13}
                className="object-cover"
              />
              <div className="text-[#00AC4F] text-xs font-bold font-dmsans whitespace-nowrap">
                {highestBid.amount}
              </div>
            </div>
          </div>
          <div className="text-sm text-[#757575] font-dmsans whitespace-nowrap hidden sm:block md:hidden xl:block">
            {desc}
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <div className="text-sm text-[#5539A8] font-dmsans font-bold whitespace-nowrap bg-[#F5F5F5] p-3 rounded-full ">
            {duration}
          </div>
          <p className="font-dmsans font-medium text-[#4F33A3] whitespace-nowrap">Place a bid</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
