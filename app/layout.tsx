import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <TanStackProvider>
            <Header/>
            <main>
                {children}
            </main>
        </TanStackProvider>
        </body>
        </html>
    );
}
