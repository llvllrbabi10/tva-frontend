import Image from "next/image";

import {
    LogoWhite,
    YoutubeIcon,
    FacebookIcon,
    TiktokIcon,
} from "@images/assets/index";
import Link from "next/link";

function Footer() {
    return (
        <div className="footer-container flex justify-center bg-[#242938]">
            <div className="flex flex-col xl:w-[1080px] md:w-[750px] md:py-[30px] py-[20px] gap-[20px] md:px-[0px] px-[16px]">
                <div>
                    <Image
                        src={LogoWhite}
                        alt="LogoWhite"
                        className="h-[45px] w-[198px]"
                    />
                </div>
                <div className="flex flex-wrap md:flex-row flex-col justify-between gap-[20px]">
                    <div className="footer-item flex flex-col gap-[10px]">
                        <div className="text-[18px] font-[600] text-[#8F92A1] uppercase">
                            Hệ thống cơ sở
                        </div>
                        <div className="border border-b border-[#505460]"></div>

                        <Link
                            className="text-white hover:text-[#FF5159]"
                            href=""
                        >
                            <b>Cơ sở 1:</b> Vinhomes Smart City Tây Mỗ
                        </Link>

                        <Link
                            className="text-white hover:text-[#FF5159]"
                            href="https://www.google.com/maps/place/Ti%E1%BA%BFng+Anh+C%C3%B4+Th%C3%A1i+V%C3%A2n+Anh+-+Chuy%C3%AAn+luy%E1%BB%87n+chuy%C3%AAn%2FHSG/@20.9927182,105.7330941,17z/data=!4m15!1m8!3m7!1s0x313453a059075449:0xe7706d9821f161b7!2zMzEzIMSQVDcyLCBExrDGoW5nIE7hu5lpLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!3b1!8m2!3d20.9926863!4d105.7331008!16s%2Fg%2F11ffvmwcrc!3m5!1s0x31345391eaaa9d11:0x4262d41573438acd!8m2!3d20.9926402!4d105.7331079!16s%2Fg%2F11fszyvf9t?hl=vi-VN&entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                        >
                            <b>Cơ sở 2:</b> Số 313, Đường 72, La Dương, Dương
                            Nội, Hà Đông
                        </Link>

                        <Link
                            className="text-white hover:text-[#FF5159]"
                            href="https://www.google.com/maps/place/16+Nguy%E1%BB%85n+Th%C6%B0%E1%BB%A3ng+Hi%E1%BB%81n,+Street,+H%C3%A0+%C4%90%C3%B4ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@20.9738634,105.7705304,17z/data=!3m1!4b1!4m10!1m2!2m1!1zMTYgTmd1eeG7hW4gVGjGsOG7o25nIEhp4buBbg!3m6!1s0x313453294d71c88f:0x627488406306af54!8m2!3d20.9738585!4d105.7754013!15sChwxNiBOZ3V54buFbiBUaMaw4bujbmcgSGnhu4FukgERY29tcG91bmRfYnVpbGRpbmfgAQA!16s%2Fg%2F11sgx30bfp?hl=vi-VN&entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                        >
                            <b>Cơ sở 3:</b> Số 16, Nguyễn Thượng Hiền, Yết Kiêu,
                            Hà Đông
                        </Link>
                    </div>

                    <div className="footer-item flex flex-col gap-[10px]">
                        <div className="text-[18px] font-[600] text-[#8F92A1] uppercase">
                            Khóa học
                        </div>
                        <div className="border border-b border-[#505460]"></div>

                        <Link
                            className="text-white hover:text-[#FF5159]"
                            href=""
                        >
                            Tiếng Anh mầm non
                        </Link>

                        <Link
                            className="text-white hover:text-[#FF5159]"
                            href=""
                        >
                            Tiếng Anh tiểu học
                        </Link>

                        <Link
                            className="text-white hover:text-[#FF5159]"
                            href=""
                        >
                            Tiếng Anh trung học cơ sở
                        </Link>

                        <Link
                            className="text-white hover:text-[#FF5159]"
                            href=""
                        >
                            Tiếng Anh trung học phổ thông
                        </Link>

                        <Link
                            className="text-white hover:text-[#FF5159]"
                            href=""
                        >
                            Chứng chỉ IELTS
                        </Link>

                        <Link
                            className="text-white hover:text-[#FF5159]"
                            href=""
                        >
                            Các khóa học online
                        </Link>
                    </div>

                    <div className="footer-item flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-[10px]">
                            <div className="text-[18px] font-[600] text-[#8F92A1] uppercase">
                                Thông tin liên hệ
                            </div>
                            <div className="border border-b border-[#505460]"></div>
                            <div className="text-white">
                                Hotline: 0961 565 495
                            </div>
                            <div className="text-white">
                                Email: englishhouseforkids@gmail.com
                            </div>
                        </div>

                        <div className="flex gap-[20px] items-center">
                            <Link href="">
                                <Image
                                    src={FacebookIcon}
                                    alt=""
                                    className="w-[40px]"
                                />
                            </Link>
                            <Link href="">
                                <Image
                                    src={YoutubeIcon}
                                    alt=""
                                    className="w-[40px]"
                                />
                            </Link>
                            <Link
                                href=""
                                className="bg-white w-[35px] h-[35px] rounded-full flex justify-center items-center"
                            >
                                <Image
                                    src={TiktokIcon}
                                    alt=""
                                    className="w-[30px] h-[30px]"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
