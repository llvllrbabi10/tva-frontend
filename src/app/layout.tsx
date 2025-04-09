import type { Metadata } from "next";
import "@/styles/globals.css";
import StoreProvider from "@/redux/StoreProvider";

export const metadata: Metadata = {
    title: "TAV Education",
    description: "TAV Education",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <StoreProvider>{children}</StoreProvider>
            </body>
        </html>
    );
}
