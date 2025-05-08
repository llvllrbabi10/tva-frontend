import type { Metadata } from "next";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import RegisterPopup from "./_component/RegisterPopup";

export const metadata: Metadata = {
    title: "TVA Education",
    description: "TVA Education",
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
            <RegisterPopup />
        </div>
    );
}
