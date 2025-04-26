"use client";

import Link from "next/link";
import Image from "next/image";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "@/redux/slices/examSlice";
import { RootState } from "@/redux/store";

import { Logo, LogoShort, XCircle } from "@images/assets";

function ExamResultHeader() {
    const dispatch = useDispatch();
    const { examInfo } = useSelector(
        (state: RootState) => ({
            examInfo: state.exam.examInfo,
        }),
        shallowEqual
    );

    const examTitle = examInfo.title || "Bài kiểm tra";

    const resetLoading = () => {
        dispatch(setIsLoading(true));
    };

    return (
        <>
            {/* Header for desktop */}
            <div className="relative md:flex hidden w-full items-center justify-center p-4 gap-2 bg-white shadow-md">
                <Link
                    href="/home"
                    onClick={resetLoading}
                    className="header-logo absolute left-[25px]"
                >
                    <Image
                        src={Logo}
                        alt="Logo"
                        className="h-[30px] w-[132px]"
                    />
                </Link>

                <div className="flex flex-col gap-[5px]">
                    <div className="md:max-w-[300px] md:text-[20px] text-[18px] font-bold text-center">
                        {examTitle}
                    </div>
                </div>

                <div className="absolute right-[25px] flex gap-[20px]">
                    <Link href={"/kiem-tra-trinh-do"} onClick={resetLoading}>
                        <Image
                            src={XCircle}
                            alt="XCircle"
                            className="w-[30px] h-[30px] cursor-pointer"
                        />
                    </Link>
                </div>
            </div>

            {/* Header for mobile */}
            <div className="flex md:hidden flex-col w-full items-center justify-center px-[16px] py-[10px] gap-2 bg-white shadow-md">
                <div className="flex items-center justify-between w-full">
                    <Link
                        href="/home"
                        onClick={resetLoading}
                        className="header-logo"
                    >
                        <Image
                            src={LogoShort}
                            alt="Logo"
                            className="h-[25px] w-[40px]"
                        />
                    </Link>

                    <div className="max-w-[calc(100vw-120px)] text-[20px] font-bold text-center whitespace-nowrap overflow-hidden text-ellipsis">
                        {examTitle}
                    </div>

                    <Link href={"/kiem-tra-trinh-do"} onClick={resetLoading}>
                        <Image
                            src={XCircle}
                            alt="XCircle"
                            className="w-[25px] h-[25px] cursor-pointer"
                        />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ExamResultHeader;
