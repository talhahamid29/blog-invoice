import "../globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Montserrat } from "next/font/google";
import Copyright from "@/components/footer/Copyright";
import Sidebar from "@/components/invoice/Sidebar";
import TopBar from "@/components/invoice/TopBar";
import Header from "@/components/invoice/Header";
import HeaderMobile from "@/components/invoice/HeaderMobile";
import SideNav from "@/components/invoice/SideNav";
import PageWrapper from "@/components/invoice/PageWrapper";
import MarginWidthWrapper from "@/components/invoice/MargenWidthWrapper";
import AuthProviders from "@/components/providers/AuthProviders";
//import ScrollToTopButton from "@/components/common/ScrollToTopButton";

const montserrat = Montserrat({
  weight: ["300", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function InvoiceLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-gray-100`}>
        <AuthProviders>
          <div className="flex">
            <SideNav />
            <main className="flex-1 mt-0" style={{ overflowY: "scroll", scrollbarColor: "gray white", scrollbarWidth: "thin", height: "100vh" }}>
              <MarginWidthWrapper>
                <Header />
                <HeaderMobile />
                <PageWrapper>{children}</PageWrapper>
                <Copyright />
              </MarginWidthWrapper>
            </main>
          </div>
        </AuthProviders>
      </body>
    </html>
  );
}

{
  /* <Sidebar />
<main className="bg-gray-100 flex-1 mt-0 overflow-y-scroll" style={{ scrollbarColor: "gray white", scrollbarWidth: "thin", height: "100vh" }}>
  <TopBar />
  <section className="p-4 mb-4">{children}</section>
  <footer className="fixed bottom-0 z-10 bg-white w-[-webkit-fill-available] pl-4 pr-8">
    <Copyright />
  </footer>
</main> */
}
