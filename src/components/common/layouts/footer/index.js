import SocialLinks from "@/components/common/layouts/footer/SocialLinks";
import FooterLinks from "@/components/common/layouts/footer/FooterLinks";
import NewsletterSignup from "@/components/common/layouts/footer/NewsletterSignup";

const Footer = () => {
  return (
    <div className="w-9/12 lg:w-11/12 xl:w-10/12 2xl:w-9/12 mx-auto px-4 py-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8">
        <div className="col-span-1 md:col-span-4 space-y-6">
          <h2 className="text-2xl font-bold font-integral">NFters</h2>
          <p className="text-sm text-[#565656] font-dmsans">
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
          <SocialLinks />
        </div>
        <FooterLinks
          title="Market Place"
          links={[
            "All NFTs",
            "New",
            "Art",
            "Sports",
            "Utility",
            "Music",
            "Domain Name",
          ]}
        />
        <FooterLinks
          title="My Account"
          links={["Profile", "Favorite", "My Collections", "Settings"]}
        />
        <NewsletterSignup />
      </div>
      <div className="mt-8 border-t border-zinc-100" />
      <div className="mt-4 text-sm text-[#A4A4A4] text-center font-dmsans">
        Copyright © {new Date().getFullYear()} Rubiyet Fardous
      </div>
    </div>
  );
};

export default Footer;
