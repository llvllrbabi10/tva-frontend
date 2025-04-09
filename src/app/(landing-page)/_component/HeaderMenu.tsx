"use client";

import { usePathname } from "next/navigation";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { ArrowUp } from "@/assets/index";

const offlineClassList: { title: string; href: string; description: string }[] =
    [
        {
            title: "Mầm non",
            href: "/offline-class/mam-non",
            description: "Tiếng anh cho trẻ em mầm non",
        },
        {
            title: "Tiểu học",
            href: "/offline-class/tieu-hoc",
            description: "Tiếng anh cho học sinh tiểu học",
        },
        {
            title: "Trung học cơ sở",
            href: "/offline-class/thcs",
            description: "Tiếng anh cho học sinh cấp 2",
        },
        {
            title: "Trung học phổ thông",
            href: "/offline-class/thpt",
            description: "Tiếng anh cho học sinh cấp 3",
        },
    ];

export function HeaderMenu() {
    const pathname = usePathname();
    const isActive = (href: string) => {
        return pathname.includes(href);
    };

    return (
        <div className="flex gap-[3px]">
            <Link
                href="/home"
                className={`text-[18px] font-[600] cursor-pointer hover:bg-accent rounded-md px-4 py-2 hover:text-[#D14242] 
                            ${isActive("/home") ? "text-[#D14242]" : ""}`}
            >
                Về TVA
            </Link>

            <div className="relative flex items-center group">
                <Link
                    href={"/offline-class"}
                    className="flex items-center group hover:bg-accent rounded-md px-4 py-2 gap-[8px] cursor-pointer"
                >
                    <p
                        className={`text-[18px] font-[600] group-hover:text-[#D14242] 
                        ${isActive("/offline-class") ? "text-[#D14242]" : ""}`}
                    >
                        Lớp học Offline
                    </p>

                    <Image
                        src={ArrowUp}
                        className={`w-[18px] rotate-180 group-hover:rotate-0 transition-all duration-200`}
                        alt="TriangleFilled"
                    ></Image>
                </Link>

                <div className="absolute top-[45px] left-0 bg-white z-10 rounded-[5px] gap-3 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {offlineClassList.map((component) => (
                        <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                            isActive={isActive}
                        ></ListItem>
                    ))}
                </div>
            </div>

            <Link
                href="/khoa-hoc-online"
                className={`text-[18px] font-[600] cursor-pointer hover:bg-accent rounded-md px-4 py-2 hover:text-[#D14242] ${
                    isActive("/khoa-hoc-online") ? "text-[#D14242]" : ""
                }`}
            >
                Khóa học online
            </Link>

            <Link
                href="/kiem-tra-trinh-do"
                className={`text-[18px] font-[600] cursor-pointer hover:bg-accent rounded-md px-4 py-2 hover:text-[#D14242] ${
                    isActive("/kiem-tra-trinh-do") ? "text-[#D14242]" : ""
                }`}
            >
                Kiểm tra trình độ
            </Link>

            <Link
                href="/sach-luyen-thi"
                className={`text-[18px] font-[600] cursor-pointer hover:bg-accent rounded-md px-4 py-2 hover:text-[#D14242] ${
                    isActive("/sach-luyen-thi") ? "text-[#D14242]" : ""
                }`}
            >
                Sách luyện thi
            </Link>

            <Link
                href="/tai-lieu-mien-phi"
                className={`text-[18px] font-[600] cursor-pointer hover:bg-accent rounded-md px-4 py-2 hover:text-[#D14242] ${
                    isActive("/tai-lieu-mien-phi") ? "text-[#D14242]" : ""
                }`}
            >
                Tài liệu miễn phí
            </Link>

            <Link
                href="/tin-tuc"
                className={`text-[18px] font-[600] cursor-pointer hover:bg-accent rounded-md px-4 py-2 hover:text-[#D14242] ${
                    isActive("/tin-tuc") ? "text-[#D14242]" : ""
                }`}
            >
                Tin tức
            </Link>

            <Link
                href="/home"
                className={`text-[18px] font-[600] cursor-pointer hover:bg-accent rounded-md px-4 py-2 hover:text-[#D14242]`}
            >
                Đăng nhập
            </Link>
        </div>
    );
}

type ListItemProps = {
    title: string;
    href: string;
    isActive: (href: string) => boolean;
};

const ListItem = ({ title, href, isActive }: ListItemProps) => {
    return (
        <Link href={href}>
            <div
                className={`min-w-[190px] font-[600] cursor-pointer hover:bg-accent rounded-md px-4 py-2 hover:text-[#D14242] ${
                    isActive(href) ? "text-[#D14242]" : ""
                }`}
            >
                {title}
            </div>
        </Link>
    );
};
