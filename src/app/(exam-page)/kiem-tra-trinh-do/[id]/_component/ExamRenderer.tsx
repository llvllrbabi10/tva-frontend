"use client";

import { RootState } from "@/redux/store";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setUserAnswers } from "@/redux/slices/examSlice";

import ParagraphRenderer from "./Paragraph";
import QuestionRenderer from "./Question";

export default function ExamRenderer() {
    const dispatch = useDispatch();

    const { examInfo, userAnswers, submitted } = useSelector(
        (state: RootState) => ({
            examInfo: state.exam.examInfo,
            userAnswers: state.exam.userAnswers,
            submitted: state.exam.submitted,
        }),
        shallowEqual
    );

    const handleAnswerChange = (questionId: string, answer: string) => {
        dispatch(setUserAnswers({ questionId, answer }));
    };
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col md:w-[750px] md:px-[0px] px-[16px] py-[16px]">
                {examInfo.examContent?.map((el) =>
                    el.type === "Paragraph" ? (
                        <ParagraphRenderer key={el.id} data={el} />
                    ) : (
                        <QuestionRenderer
                            key={el.id}
                            data={el}
                            userAnswer={userAnswers[el.id]}
                            onAnswerChange={handleAnswerChange}
                            submitted={submitted}
                        />
                    )
                )}
            </div>
        </div>
    );
}
