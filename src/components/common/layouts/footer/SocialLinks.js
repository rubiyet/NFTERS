import { SOCIAL_LINKS } from "@/constants/socialLinksList";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {SOCIAL_LINKS.map((icon, index) => (
        <a key={index} href="#" aria-label={icon.alt}>
          <img
            loading="lazy"
            src={`/icons/${icon.src}`}
            className="w-8 h-8 object-contain"
            alt={icon.alt}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
