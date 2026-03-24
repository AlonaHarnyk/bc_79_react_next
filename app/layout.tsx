import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/providers/TanStackProvider/TanStackProvider";


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
