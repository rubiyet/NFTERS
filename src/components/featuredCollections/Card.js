import Image from "next/image";

const Card = ({ mainImage, sideImages, title, author, totalItems }) => {
  return (
    <div className="space-y-[29px]">
      <div className="flex space-x-4">
        <Image
          src={mainImage}
          className="w-full rounded-xl flex flex-col transform transition-all duration-300 ease-in-out hover:scale-105"
          alt={title}
          width={300}
          height={306}
        />

        <div className="flex flex-col space-y-4">
          {sideImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              className="object-contain rounded-xl w-[104px] transform transition-all duration-300 ease-in-out hover:scale-105"
              alt=""
              width={104}
              height={85}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-bold font-dmsans">{title}</h3>
          <div className="flex gap-2.5 mt-2.5 text-sm items-center">
            <Image
              loading="lazy"
              src={author.avatar}
              className="object-contain shrink-0 w-7 rounded-full aspect-square"
              alt=""
              width={34}
              height={34}
            />
            <div className="text-sm font-medium font-dmsans">
              by {author.name}
            </div>
          </div>
        </div>
        <div className="flex items-end">
          <div className="border border-[#2639ED] text-[#2639ED] flex items-end p-2 rounded-3xl text-[11px] font-dmsans font-bold transform transition-all duration-300 ease-in-out hover:scale-105">
            Total {totalItems} Items
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
