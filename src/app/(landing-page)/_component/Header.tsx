import Image from "next/image";
import { Logo } from "@images/assets";
import Link from "next/link";
import { HeaderMenuPC } from "./sub-header/HeaderMenuPC";
import headerStyles from "./sub-header/header.module.css";
import HeaderMenuMobile from "./sub-header/HeaderMenuMobile";

function Header() {
    return (
        <div className="header-container flex justify-center min-h-[64px] fixed top-0 right-0 left-0 z-50 bg-white shadow-md">
            <div
                className={`flex flex-1 justify-between items-center max-w-[1400px] gap-[10px] mx-[16px]`}
            >
                <div className="flex items-center gap-[10px] md:gap-[20px]">
                    <HeaderMenuMobile />

                    <Link href="/home" className="header-logo">
                        <Image
                            src={Logo}
                            alt=""
                            className="md:h-[45px] md:w-[198px] h-[35px] w-[154px]"
                        />
                    </Link>
                </div>

                <div className={`${headerStyles.headerMenuPC}`}>
                    <HeaderMenuPC />
                </div>

                <div
                    className={`md:text-[18px] text-[16px] font-[600] text-white bg-[#aaa9a9] rounded-md px-4 py-2 cursor-not-allowed`}
                >
                    Đăng nhập
                </div>
                {/* <Link
                    href="/home"
                    className={`md:text-[18px] text-[16px] font-[600] text-white bg-[#d14242] hover:bg-[#c92929] rounded-md px-4 py-2 cursor-pointer`}
                >
                    Đăng nhập
                </Link> */}
            </div>
        </div>
    );
}

export default Header;
