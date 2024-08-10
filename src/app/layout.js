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
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
