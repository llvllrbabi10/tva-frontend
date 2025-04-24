"use client";

import { RootState } from "@/redux/store";
import { shallowEqual, useSelector } from "react-redux";

import ParagraphRenderer from "./sub-exam-renderer/Paragraph";
import QuestionRenderer from "./sub-exam-renderer/Question";

export default function ExamRenderer() {
    const { examInfo, userAnswers } = useSelector(
        (state: RootState) => ({
            examInfo: state.exam.examInfo,
            userAnswers: state.exam.userAnswers,
        }),
        shallowEqual
    );

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col md:max-w-[750px] max-w-[500px] md:px-[0px] px-[16px] py-[16px]">
                {examInfo.examContent?.map((el) =>
                    el.type === "Paragraph" ? (
                        <ParagraphRenderer key={el.id} data={el} />
                    ) : (
                        <QuestionRenderer
                            key={el.id}
                            data={el}
                            userAnswer={userAnswers[el.id]}
                        />
                    )
                )}
            </div>
        </div>
    );
}
