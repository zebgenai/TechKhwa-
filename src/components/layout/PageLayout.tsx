
import { ReactNode } from "react";
import InteractiveNavbar from "@/components/InteractiveNavbar";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 overflow-x-hidden">
      <InteractiveNavbar />
      {children}
      <Footer />
    </div>
  );
};
