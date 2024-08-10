import SearchBar from "@/components/common/others/SearchBar";
import Button from "@/components/common/others/Button";
import Link from "next/link";
import { NAV_MENU_ITEMS } from "@/constants/navMenu";

const Header = () => {
  return (
    <div className="flex flex-col items-center pb-7 pt-[31px] border-b w-full">
      <div className="flex justify-between items-center w-8/12 max-md:w-full">
        <div className="flex gap-8 items-center">
          <div className="text-2xl font-bold text-[#3D00B7] leading-none font-integral">
            NFTERS
          </div>
          <div className="border border-[#F4F4F4] h-[47px]" />
          <nav className="flex gap-8">
          {NAV_MENU_ITEMS.map(({ label, href }) => (
            <Link key={label} href={
              href
            } className="tracking-wider font-medium font-dmsans">
              {label}
            </Link>
          ))}
          </nav>
        </div>
        <div className="flex gap-4">
          <SearchBar />
          <Button variant="primary">Upload</Button>
          <Button variant="secondary">Connect Wallet</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
