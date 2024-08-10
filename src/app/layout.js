import "./globals.css";
import "../styles/fonts.css";
import Header from "@/components/common/layouts/header";
import Footer from "@/components/common/layouts/footer";

export const metadata = {
  title: "NFT Market Place",
  description: "Duplicate by Rubiyet Fardous",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="w-8/12 mx-auto">
          <main className="">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
