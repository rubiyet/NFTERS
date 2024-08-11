import Link from "next/link";

const FooterLinks = ({ title, links }) => {
  return (
    <div className="col-span-1 lg:col-span-2 space-y-4 font-dmsans">
      <h3 className="text-lg font-bold">{title}</h3>
      <ul className="text-sm text-[#3D3D3D] font-normal space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link href="#" className="hover:text-[#3D00B7]">{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
