import Footer from "./Footer/Footer";
import Header from "./Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
