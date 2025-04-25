"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
    setIsLoading,
    setTimeLeft,
    setSubmitted,
} from "@/redux/slices/examSlice";
import { RootState } from "@/redux/store";

import { Logo, LogoShort, Clock, XCircel } from "@images/assets";

function ExamHeader() {
    const dispatch = useDispatch();
    const { examInfo, timeLeft, submitted } = useSelector(
        (state: RootState) => ({
            examInfo: state.exam.examInfo,
            timeLeft: state.exam.timeLeft,
            submitted: state.exam.submitted,
        }),
        shallowEqual
    );

    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const examTitle = examInfo.title || "Bài kiểm tra";

    // countdown
    useEffect(() => {
        // Nếu chưa nộp và còn thời gian thì countdown
        if (!submitted && timeLeft > 0) {
            timerRef.current = setTimeout(() => {
                const newTimeLeft = timeLeft - 1;
                dispatch(setTimeLeft(newTimeLeft));
            }, 1000);
        } else if (timeLeft === 0 && !submitted) {
            dispatch(setSubmitted(true));
        }
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [timeLeft, submitted]);

    // format seconds to mm:ss
    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60)
            .toString()
            .padStart(2, "0");
        const s = (seconds % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    };

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
                    {!submitted && (
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
                    )}

                    <Link href={"/kiem-tra-trinh-do"} onClick={resetLoading}>
                        <Image
                            src={XCircel}
                            alt="XCircel"
                            className="w-[30px] h-[30px] cursor-pointer"
                        />
                    </Link>
                </div>
            </div>

            {/* Header for mobile */}
            <div className="flex md:hidden flex-col w-full items-center justify-center px-[16px] py-[10px] gap-2 bg-white shadow-md">
                <div className="flex items-center justify-between w-full">
                    <Link href="/home" className="header-logo">
                        <Image
                            src={LogoShort}
                            alt="Logo"
                            className="h-[25px] w-[40px]"
                        />
                    </Link>
                    {!submitted && (
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
                    )}
                    {submitted && (
                        <div className="max-w-[calc(100vw-120px)] text-[20px] font-bold text-center whitespace-nowrap overflow-hidden text-ellipsis">
                            {examTitle}
                        </div>
                    )}
                    <Link href={"/kiem-tra-trinh-do"}>
                        <Image
                            src={XCircel}
                            alt="XCircel"
                            className="w-[25px] h-[25px] cursor-pointer"
                        />
                    </Link>
                </div>
                {!submitted && (
                    <div className="max-w-[calc(100vw-32px)] text-[20px] font-bold text-center whitespace-nowrap overflow-hidden text-ellipsis">
                        {examTitle}
                    </div>
                )}
            </div>
        </>
    );
}

export default ExamHeader;
