import Header from "../common/Header";
import Footer from "../common/Footer";
import { ReactNode } from "react";
import SectionLayout from "./SectionLayout";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <SectionLayout>
      <div className="flex h-screen flex-col justify-between">
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionLayout>
  );
};

export default MainLayout;
