import type { Metadata } from "next";
import Header from "./_component/Header";
import Footer from "./_component/Footer";

export const metadata: Metadata = {
    title: "TAV Education",
    description: "TAV Education",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            <div className="mt-[65px]">{children}</div>
            <Footer />
        </div>
    );
}
