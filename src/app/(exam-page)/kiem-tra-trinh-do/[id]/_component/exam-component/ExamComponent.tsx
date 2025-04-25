"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { ExamInfo } from "../../_model/model";
import ExamRenderer from "./sub-exam-component/ExamRenderer";
import ExamHeader from "./sub-exam-component/ExamHeader";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
    setIsLoading,
    setExamInfo,
    setTotalTime,
    setTimeLeft,
} from "@/redux/slices/examSlice";
import { RootState } from "@/redux/store";
import ExamFooter from "./sub-exam-component/ExamFooter";

function ExamComponent({ id }: { id: string }) {
    const dispatch = useDispatch();

    const { isLoading, examInfo } = useSelector(
        (state: RootState) => ({
            isLoading: state.exam.isLoading,
            examInfo: state.exam.examInfo,
        }),
        shallowEqual
    );

    const questionRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const headerRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState({ top: 62, bottom: 50 });

    useEffect(() => {
        if (examInfo.id == "0") {
            getExamData(id);
        } else {
            dispatch(setIsLoading(false));
        }
    }, []);

    useLayoutEffect(() => {
        const header = headerRef.current;
        const footer = footerRef.current;

        const observer = new ResizeObserver(() => {
            const top = header?.offsetHeight || 0;
            const bottom = footer?.offsetHeight || 0;
            setOffset({ top, bottom });
        });

        if (header) observer.observe(header);
        if (footer) observer.observe(footer);

        return () => observer.disconnect();
    }, []);

    const getExamData = async (id: string) => {
        dispatch(setIsLoading(true));

        const res = await fetch(`/exams/entrance-test-${id}.json`);
        if (!res.ok) {
            throw new Error(`Failed to fetch exam data: ${res.status}`);
        }
        const examInformation: ExamInfo = await res.json();
        dispatch(setExamInfo(examInformation));
        dispatch(setTotalTime((examInformation.duration ?? 0) * 60));
        dispatch(setTimeLeft((examInformation.duration ?? 0) * 60));

        dispatch(setIsLoading(false));
    };

    return (
        <>
            {isLoading && (
                <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-white z-20">
                    <div className="loader mb-4" />
                    <h1 className="text-xl font-semibold text-gray-700">
                        Đang tải dữ liệu...
                    </h1>
                </div>
            )}
            <div className="bg-[#f2f4f7]">
                <div ref={headerRef} className="fixed top-0 w-full z-10">
                    <ExamHeader />
                </div>
                <div
                    style={{
                        marginTop: offset.top,
                        marginBottom: offset.bottom,
                    }}
                    className="relative"
                >
                    <ExamRenderer questionRefs={questionRefs} />
                </div>
                <div ref={footerRef} className="fixed bottom-0 w-full z-10">
                    <ExamFooter questionRefs={questionRefs} offset={offset} />
                </div>
            </div>
        </>
    );
}

export default ExamComponent;
