import Image from "next/image";
import { Logo } from "@images/assets/index";
import Link from "next/link";
import { HeaderMenu } from "./HeaderMenu";

function Header() {
    return (
        <div className="header-container flex justify-center min-h-[64px] fixed top-0 right-0 left-0 z-50 bg-white shadow-md">
            <div className="flex flex-1 justify-between items-center md:max-w-fit gap-[10px]">
                <Link href="/home" className="header-logo">
                    <Image src={Logo} alt="" className="h-[45px] w-[198px]" />
                </Link>

                <HeaderMenu />
            </div>
        </div>
    );
}

export default Header;
