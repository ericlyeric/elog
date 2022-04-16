import Header from "./Header";
import Footer from "../layout/Footer";
import { ReactNode } from "react";
import SectionLayout from "./SectionLayout";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <SectionLayout>
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer />
    </SectionLayout>
  );
};

export default MainLayout;
