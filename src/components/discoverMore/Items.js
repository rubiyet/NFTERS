import Item from "@/components/discoverMore/Item";

const Items = () => {
  const Lists = [
    {
      id: 1,
      image: "/images/collections/2.png",
      author: {
        name: "The Futr Abstr",
        avatar: [
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
        ],
      },
      highestBid: {
        amount: "0.25 ETH",
        icon: "/icons/BidGreen.svg",
      },
      desc: "1 of 8",
      duration: "3h 50m 2s left",
    },
    {
      id: 2,
      image: "/images/collections/2.png",
      author: {
        name: "The Futr Abstr",
        avatar: [
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
        ],
      },
      highestBid: {
        amount: "0.25 ETH",
        icon: "/icons/BidGreen.svg",
      },
      desc: "1 of 8",
      duration: "3h 50m 2s left",
    },
    {
      id: 3,
      image: "/images/collections/2.png",
      author: {
        name: "The Futr Abstr",
        avatar: [
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
        ],
      },
      highestBid: {
        amount: "0.25 ETH",
        icon: "/icons/BidGreen.svg",
      },
      desc: "1 of 8",
      duration: "3h 50m 2s left",
    },
    {
      id: 4,
      image: "/images/collections/2.png",
      author: {
        name: "The Futr Abstr",
        avatar: [
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
        ],
      },
      highestBid: {
        amount: "0.25 ETH",
        icon: "/icons/BidGreen.svg",
      },
      desc: "1 of 8",
      duration: "3h 50m 2s left",
    },
    {
      id: 5,
      image: "/images/collections/2.png",
      author: {
        name: "The Futr Abstr",
        avatar: [
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
          { src: "/images/avatars/1.png" },
        ],
      },
      highestBid: {
        amount: "0.25 ETH",
        icon: "/icons/BidGreen.svg",
      },
      desc: "1 of 8",
      duration: "3h 50m 2s left",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {Lists.map((list, index) => (
        <Item key={index} {...list} />
      ))}
    </div>
  );
};

export default Items;
