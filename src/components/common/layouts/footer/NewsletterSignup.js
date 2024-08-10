import Button from "@/components/common/others/Button";

const NewsletterSignup = () => {
  return (
    <div className="col-span-1 md:col-span-4 space-y-6">
      <h3 className="text-lg font-bold font-dmsans">Stay in the Loop</h3>
      <p className="text-sm text-[#363639] font-dmsans">
        Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.
      </p>
      <form className="flex items-center p-[6px] bg-white border border-zinc-100 rounded-full shadow-md overflow-hidden">
        <input
          type="email"
          placeholder="Enter your email address..."
          className="w-full px-4 text-sm text-neutral-400 bg-transparent border-none outline-none font-dmsans h-12"
          aria-label="Email address"
        />
        <Button variant="tertiary">Subscribe Now</Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
