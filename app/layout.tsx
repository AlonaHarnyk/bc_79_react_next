import "./globals.css";
import { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/providers/TanStackProvider/TanStackProvider";

export const metadata:Metadata = {
  title: "Practice App",
  description:"Do some tasks in practice"
}

export default function RootLayout({
  children,
  details,
}: Readonly<{
  children: React.ReactNode;
  details: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          <main>
            {children}
            {details}
          </main>
          
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
