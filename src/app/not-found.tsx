import Link from "next/link";
import Image from "next/image";

import { NotFoundImg } from "@images/assets";
import Header from "@/app/(landing-page)/_component/header/Header";
import Footer from "@/app/(landing-page)/_component/Footer";

function NotFound() {
    return (
        <div>
            <Header />

            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-433px)] gap-[30px] mx-[16px] mt-[65px]">
                <Image
                    src={NotFoundImg}
                    alt="NotFound"
                    className="w-[400px]"
                ></Image>
                <Link
                    href={"/"}
                    className="text-[18px] leading-[27px] text-[#da0001] px-4 py-2 rounded-[10px] font-[600] border-[1px] border-[#da0001] hover:bg-[#c70000] hover:text-white transition-all duration-300 ease-in-out"
                >
                    Quay lại
                </Link>
            </div>
            <Footer />
        </div>
    );
}

export default NotFound;
