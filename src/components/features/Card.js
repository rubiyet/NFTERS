import Image from "next/image";

const Card = ({ src, title, description }) => {
  return (
    <div className="flex items-start space-x-4 col-span-3">
      <Image
        src={`/icons/features/${src}`}
        alt={title}
        width={50}
        height={50}
        className="object-contain transform transition-all duration-300 ease-in-out hover:scale-105"
      />
      <div className="space-y-3 font-dmsans">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-[#696969] leading-5">{description}</p>
      </div>
    </div>
  );
};

export default Card;
