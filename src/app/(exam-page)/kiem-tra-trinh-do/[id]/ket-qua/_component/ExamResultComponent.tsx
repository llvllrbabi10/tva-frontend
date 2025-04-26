"use client";
import { useRouter } from "next/navigation";
import ExamResultHeader from "./sub-exam-result-component/ExamResultHeader";
import ExamResultRenderer from "./sub-exam-result-component/ExamResultRenderer";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

function ExamResultComponent() {
    const router = useRouter();

    const { examInfo, submitted } = useSelector(
        (state: RootState) => ({
            examInfo: state.exam.examInfo,
            submitted: state.exam.submitted,
        }),
        shallowEqual
    );

    //fake loading screen
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (examInfo.id == "0" || !submitted) {
            router.push("/kiem-tra-trinh-do");
        } else {
            setIsLoading(false);
        }
    }, []);

    return (
        <div>
            {isLoading ? (
                <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-white z-20">
                    <div className="loader mb-4" />
                    <h1 className="text-xl font-semibold text-gray-700">
                        Đang tải dữ liệu...
                    </h1>
                </div>
            ) : (
                <>
                    <ExamResultHeader />
                    <ExamResultRenderer />
                </>
            )}
        </div>
    );
}

export default ExamResultComponent;
