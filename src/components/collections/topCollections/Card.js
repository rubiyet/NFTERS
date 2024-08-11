import Image from "next/image";

const Card = ({ id, image, name, value, valueAlert, change, isPositive }) => {
  return (
    <div className="flex gap-5 items-center w-full">
      <div className="text-2xl font-bold font-dmsans">{id}</div>
      <div className={`p-1 ${valueAlert && "border-2 border-gray-300 border-dashed"}`}>

      <div className={`relative w-10 lg:w-16 transform transition-all duration-300 ease-in-out hover:scale-105`}>
        {valueAlert && (
          <Image
            src="/icons/Positive.svg"
            alt="Value Alert"
            width={40}
            height={40}
            className="absolute top-0 -right-1 w-6"
          />
        )}
        <Image src={image} alt={name} width={90} height={90} />
      </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="font-medium font-dmsans">{name}</div>
        <div className="flex gap-10 items-center font-semibold w-full justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/icons/BidBlack.svg"
              alt="Bid Icon"
              className="object-contain w-[15px]"
              width={15}
              height={15}
            />
            <div className="text-sm text-[#636363] font-dmsans font-semibold">
              {value}
            </div>
          </div>
          <div
            className={`text-xl tracking-tight text-right ${
              isPositive ? "text-[#14C8B0]" : "text-[#FF002E]"
            }`}
          >
            {change}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
