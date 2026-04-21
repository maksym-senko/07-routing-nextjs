import type { Metadata } from "next";
import { TanStackProvider } from "@/components/TanStackProvider/TanStackProvider"; 
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";


export const metadata: Metadata = {
  title: "NoteHub",
  description: "Manage your notes efficiently",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning> 
        <TanStackProvider>
          <div className="layout-wrapper">
            <Header />

            <main>{children}</main>

            {modal}

            <Footer />
          </div>
          
          <div id="modal-root"></div>
        </TanStackProvider>
      </body>
    </html>
  );
}