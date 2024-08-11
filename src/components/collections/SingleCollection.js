import Image from 'next/image';

const SingleCollection = ({ image, title, author, highestBid }) => {
  return (
    <div className="flex flex-col col-span-3">
      <div className="flex flex-col w-full space-y-8">
        <Image
          src={image}
          alt={title}
          className="object-cover w-full rounded-3xl transform transition-all duration-300 ease-in-out hover:scale-105"
          width={1000}
          height={1000}
        />
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row justify-between space-y-2">
          <div className="flex items-start gap-2.5">
            <Image
              src={author.avatar}
              alt={`Avatar of ${author.name}`}
              className="object-cover w-12 rounded-full"
              width={48}
              height={48}
            />
            <div className="flex flex-col justify-between">
              <div className="text-xl font-bold font-dmsans">{author.name}</div>
              <div className="text-sm text-[#363639] font-dmsans">{author.desc}</div>
            </div>
          </div>
          <div className="flex flex-col text-[#3A3A3A] justify-between pl-14 xl:pl-0">
            <div className="text-xs font-medium font-dmsans">Highest Bid</div>
            <div className="flex items-center gap-2.5 text-base font-bold">
              <Image
                src={highestBid.icon}
                alt="Bid Icon"
                className="object-contain"
                width={13}
                height={13}
              />
              <div className="font-dmsans">{highestBid.amount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCollection;
