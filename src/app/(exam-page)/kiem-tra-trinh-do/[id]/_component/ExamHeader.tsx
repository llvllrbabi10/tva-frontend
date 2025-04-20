"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
    setTimeLeft,
    setSubmitted,
    setIsRunning,
} from "@/redux/slices/examSlice";
import { RootState } from "@/redux/store";

import { Logo, LogoShort, Clock, XCircel } from "@images/assets";

function ExamHeader() {
    const dispatch = useDispatch();
    const { examInfo, timeLeft, isRunning } = useSelector(
        (state: RootState) => ({
            examInfo: state.exam.examInfo,
            timeLeft: state.exam.timeLeft,
            isRunning: state.exam.isRunning,
        }),
        shallowEqual
    );

    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const examTitle = examInfo.title || "Bài kiểm tra";

    // count down
    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            timerRef.current = setTimeout(() => {
                const newTimeLeft = timeLeft - 1;
                dispatch(setTimeLeft(newTimeLeft));
            }, 1000);
        } else if (timeLeft === 0 && isRunning) {
            dispatch(setSubmitted(true));
            dispatch(setIsRunning(false));
        }
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [timeLeft, isRunning]);

    // format seconds to mm:ss
    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60)
            .toString()
            .padStart(2, "0");
        const s = (seconds % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    };

    return (
        <>
            {/* Header for desktop */}
            <div className="fixed top-0 md:flex hidden w-full items-center justify-between p-4 gap-2 bg-white shadow-md">
                <Link href="/home" className="header-logo">
                    <Image
                        src={Logo}
                        alt="Logo"
                        className="md:h-[30px] md:w-[132px] h-[30px] w-[132px]"
                    />
                </Link>

                <div className="md:max-w-[300px] md:text-[20px] text-[18px] font-bold text-center">
                    {examTitle}
                </div>

                <div className="flex gap-[20px]">
                    <div className="flex items-center gap-[10px] min-w-[85px]">
                        <Image
                            src={Clock}
                            alt="Clock"
                            className="w-[25px] h-[25px]"
                        />
                        <p className="md:text-[20px] text-[18px] font-[600]">
                            {formatTime(timeLeft ?? 0)}
                        </p>
                    </div>

                    <Link href={"/kiem-tra-trinh-do"}>
                        <Image
                            src={XCircel}
                            alt="XCircel"
                            className="w-[30px] h-[30px] cursor-pointer"
                        />
                    </Link>
                </div>
            </div>

            {/* Header for mobile */}
            <div className="fixed top-0 flex md:hidden flex-col w-full items-center justify-center px-[16px] py-[10px] gap-2 bg-white shadow-md">
                <div className="flex items-center justify-between w-full">
                    <Link href="/home" className="header-logo">
                        <Image
                            src={LogoShort}
                            alt="Logo"
                            className="h-[25px] w-[40px]"
                        />
                    </Link>
                    <div className="flex items-center gap-[10px] min-w-[85px]">
                        <Image
                            src={Clock}
                            alt="Clock"
                            className="w-[25px] h-[25px]"
                        />
                        <p className="md:text-[20px] text-[18px] font-[500]">
                            {formatTime(timeLeft ?? 0)}
                        </p>
                    </div>

                    <Link href={"/kiem-tra-trinh-do"}>
                        <Image
                            src={XCircel}
                            alt="XCircel"
                            className="w-[25px] h-[25px] cursor-pointer"
                        />
                    </Link>
                </div>

                <div className="max-w-[calc(100vw-32px)] text-[20px] font-bold text-center whitespace-nowrap overflow-hidden text-ellipsis">
                    {examTitle}
                </div>
            </div>
        </>
    );
}

export default ExamHeader;
