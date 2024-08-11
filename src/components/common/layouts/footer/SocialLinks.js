import { SOCIAL_LINKS } from "@/constants/socialLinksList";
import Image from "next/image";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {SOCIAL_LINKS.map((icon, index) => (
        <Link key={index} href="#" aria-label={icon?.alt} className="cursor-pointer hover:scale-105 transform transition-all duration-300 ease-in-out">
          <Image src={`/icons/${icon.src}`} alt={icon.alt} width={32} height={32} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
