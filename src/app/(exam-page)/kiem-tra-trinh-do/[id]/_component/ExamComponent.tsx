"use client";

import { useEffect } from "react";

import { ExamInfo } from "../_model/model";
import ExamRenderer from "./ExamRenderer";
import ExamHeader from "./ExamHeader";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
    setExamInfo,
    setSubmitted,
    setTimeLeft,
} from "@/redux/slices/examSlice";
import { RootState } from "@/redux/store";

function ExamComponent({ id }: { id: string }) {
    const dispatch = useDispatch();

    const { examInfo, submitted } = useSelector(
        (state: RootState) => ({
            examInfo: state.exam.examInfo,
            submitted: state.exam.submitted,
        }),
        shallowEqual
    );

    const isLoading = examInfo.id == "0";

    useEffect(() => {
        if (examInfo.id == "0") {
            getExamData(id);
        }
    }, []);

    const getExamData = async (id: string) => {
        const res = await fetch(`/exams/entrance-test-${id}.json`);
        if (!res.ok) {
            throw new Error(`Failed to fetch exam data: ${res.status}`);
        }
        const examInformation: ExamInfo = await res.json();
        dispatch(setExamInfo(examInformation));
        dispatch(setTimeLeft((examInformation.duration ?? 0) * 60));
    };

    const handleSubmit = () => {
        dispatch(setSubmitted(true));
    };

    return (
        <>
            {isLoading ? (
                <div className="flex flex-col items-center justify-center h-screen bg-white">
                    <div className="loader mb-4" />
                    <h1 className="text-xl font-semibold text-gray-700">
                        Đang tải dữ liệu...
                    </h1>
                </div>
            ) : (
                <div className="bg-[#f2f4f7]">
                    <ExamHeader />
                    <ExamRenderer />

                    {!submitted && (
                        <button
                            onClick={handleSubmit}
                            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Chấm điểm
                        </button>
                    )}
                </div>
            )}
        </>
    );
}

export default ExamComponent;
