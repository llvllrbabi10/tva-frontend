"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import headerStyles from "./header.module.css";
import { MenuIcon, CloseIcon, ArrowUp } from "@images/assets";
import { offlineClassList } from "@/app/(landing-page)/_constant/constant";

function HeaderMenuMobile() {
    const pathname = usePathname();

    const [isShowMenu, setShowMenu] = useState(false);
    const [isShowMenuOfflineClass, setShowMenuOfflineClass] = useState(false);

    useEffect(() => {
        if (isShowMenu) {
            document.body.style.overflow = "hidden"; // Chặn scroll
        } else {
            document.body.style.overflow = "auto"; // Bỏ chặn scroll
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isShowMenu]);

    const isActive = (href: string) => {
        return pathname.includes(href);
    };

    const toggleMenu = () => {
        setShowMenu((isShowMenu) => !isShowMenu);
    };

    const toggleMenuOfflineClass = () => {
        setShowMenuOfflineClass(
            (isShowMenuOfflineClass) => !isShowMenuOfflineClass
        );
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <div className={`${headerStyles.menuIcon} relative`}>
            <div onClick={toggleMenu}>
                <Image
                    src={isShowMenu ? CloseIcon : MenuIcon}
                    alt="MenuIcon"
                    className={`
                        h-[40px]
                        w-[40px]
                        md:w-[45px]
                        md:h-[45px]
                        items-center
                        cursor-pointer
                        bg-[#ededed]
                        p-[8px]
                        rounded-[10px]
                        transition-all
                        duration-300
                        ease-in-out
                        ${
                            isShowMenu
                                ? "rotate-90 opacity-100"
                                : "rotate-0 opacity-100"
                        }
                    `}
                />
            </div>
            <div
                className={`
                    ${isShowMenu ? "block" : "hidden"}
                    absolute 
                    top-[52px]
                    md:top-[54px]
                    left-[-16px] 
                    bg-white
                    opacity-50
                    w-[100vw] 
                    h-[calc(100vh-64px)]
                    z-10
                    `}
                onClick={closeMenu}
            ></div>
            <div
                className={`
                    absolute
                    top-[52px]
                    md:top-[54px]
                    left-[-16px]
                    flex
                    flex-col
                    min-w-[200px]
                    h-[calc(100vh-64px)]
                    bg-[#ffffff]
                    border-t-[1px]
                    border-[#ededed]
                    shadow-md
                    pt-[30px]
                    gap-[5px]
                    transition-transform
                    duration-300
                    ease-in-out
                    z-20
                    ${
                        isShowMenu
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-full pointer-events-none"
                    }
                `}
            >
                <Link
                    href="/home"
                    className={`text-[16px] md:text-[18px] font-[600] cursor-pointer focus:bg-accent px-4 py-2 focus:text-[#D14242]
                            ${isActive("/home") ? "text-[#D14242]" : ""}`}
                    onClick={closeMenu}
                >
                    Về TVA
                </Link>

                <div>
                    <div className="flex items-center active:bg-accent">
                        <Link
                            href={"/offline-class"}
                            className={`flex items-center rounded-md  px-4 py-2 gap-[8px] cursor-pointer text-[16px] md:text-[18px] font-[600] focus:text-[#D14242] 
                                ${
                                    isActive("/offline-class")
                                        ? "text-[#D14242]"
                                        : ""
                                }`}
                            onClick={closeMenu}
                        >
                            Lớp học Offline
                        </Link>

                        <div
                            className="px-[10px] py-2"
                            onClick={toggleMenuOfflineClass}
                        >
                            <Image
                                src={ArrowUp}
                                className={`
                                    ${
                                        isShowMenuOfflineClass
                                            ? "rotate-0"
                                            : "rotate-180"
                                    } 
                                    w-[18px] 
                                    transition-all 
                                    duration-200`}
                                alt="TriangleFilled"
                            ></Image>
                        </div>
                    </div>

                    <div
                        className={`
                            overflow-hidden
                            transition-all
                            duration-300
                            ease-in-out
                            ${isShowMenuOfflineClass ? "max-h-96" : "max-h-0"}
                        `}
                    >
                        {offlineClassList.map((component) => (
                            <ListItem
                                key={component.title}
                                title={component.title}
                                href={component.href}
                                isActive={isActive}
                                closeMenu={closeMenu}
                            ></ListItem>
                        ))}
                    </div>
                </div>

                <Link
                    href="/khoa-hoc-online"
                    className={`text-[16px] md:text-[18px] font-[600] cursor-pointer focus:bg-accent px-4 py-2 focus:text-[#D14242] ${
                        isActive("/khoa-hoc-online") ? "text-[#D14242]" : ""
                    }`}
                    onClick={closeMenu}
                >
                    Khóa học online
                </Link>

                <Link
                    href="/kiem-tra-trinh-do"
                    className={`text-[16px] md:text-[18px] font-[600] cursor-pointer focus:bg-accent px-4 py-2 focus:text-[#D14242] ${
                        isActive("/kiem-tra-trinh-do") ? "text-[#D14242]" : ""
                    }`}
                    onClick={closeMenu}
                >
                    Kiểm tra trình độ
                </Link>

                <Link
                    href="/sach-luyen-thi"
                    className={`text-[16px] md:text-[18px] font-[600] cursor-pointer focus:bg-accent px-4 py-2 focus:text-[#D14242] ${
                        isActive("/sach-luyen-thi") ? "text-[#D14242]" : ""
                    }`}
                    onClick={closeMenu}
                >
                    Sách luyện thi
                </Link>

                <Link
                    href="/tai-lieu-mien-phi"
                    className={`text-[16px] md:text-[18px] font-[600] cursor-pointer focus:bg-accent px-4 py-2 focus:text-[#D14242] ${
                        isActive("/tai-lieu-mien-phi") ? "text-[#D14242]" : ""
                    }`}
                    onClick={closeMenu}
                >
                    Tài liệu miễn phí
                </Link>

                <Link
                    href="/tin-tuc"
                    className={`text-[16px] md:text-[18px] font-[600] cursor-pointer focus:bg-accent px-4 py-2 focus:text-[#D14242] ${
                        isActive("/tin-tuc") ? "text-[#D14242]" : ""
                    }`}
                    onClick={closeMenu}
                >
                    Tin tức
                </Link>
            </div>
        </div>
    );
}

export default HeaderMenuMobile;

type ListItemProps = {
    title: string;
    href: string;
    isActive: (href: string) => boolean;
    closeMenu: () => void;
};

const ListItem = ({ title, href, isActive, closeMenu }: ListItemProps) => {
    return (
        <Link href={href} onClick={closeMenu}>
            <div
                className={`min-w-[190px] font-[600] text-[14px] md:text-[16px] active:bg-accent active:text-[#D14242] pl-7 pr-4 py-2 ${
                    isActive(href) ? "text-[#D14242]" : ""
                }`}
            >
                {title}
            </div>
        </Link>
    );
};
