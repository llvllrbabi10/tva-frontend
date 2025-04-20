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

function ExamComponent({ examInformation }: { examInformation: ExamInfo }) {
    const dispatch = useDispatch();

    const { submitted } = useSelector(
        (state: RootState) => ({
            submitted: state.exam.submitted,
        }),
        shallowEqual
    );

    useEffect(() => {
        dispatch(setExamInfo(examInformation));
        dispatch(setTimeLeft((examInformation.duration ?? 0) * 60));
    }, [examInformation]);

    const handleSubmit = () => {
        dispatch(setSubmitted(true));
    };

    return (
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
    );
}

export default ExamComponent;
