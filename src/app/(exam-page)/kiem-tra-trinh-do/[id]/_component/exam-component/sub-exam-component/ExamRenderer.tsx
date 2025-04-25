"use client";

import { RootState } from "@/redux/store";
import { shallowEqual, useSelector } from "react-redux";

import ParagraphRenderer from "./sub-exam-renderer/Paragraph";
import QuestionRenderer from "./sub-exam-renderer/Question";

export default function ExamRenderer({
    questionRefs,
}: {
    questionRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
}) {
    const { examInfo, submitted, userAnswers, examResult } = useSelector(
        (state: RootState) => ({
            examInfo: state.exam.examInfo,
            submitted: state.exam.submitted,
            userAnswers: state.exam.userAnswers,
            examResult: state.exam.examResult,
        }),
        shallowEqual
    );

    const resultItems = [
        {
            label: "Đúng",
            value: examResult?.correctAnswers,
            bgColor: "#d3f2cc",
            textColor: "#61af02",
        },
        {
            label: "Sai",
            value: examResult?.incorrectAnswers,
            bgColor: "#f6e1e1",
            textColor: "#e44f4f",
        },
        {
            label: "Bỏ qua",
            value: examResult?.unanswered,
            bgColor: "#dfdddd",
            textColor: "#000000",
        },
        {
            label: "Điểm",
            value: examResult?.score,
            bgColor: "#e32022",
            textColor: "#ffffff",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col md:max-w-[750px] max-w-[500px] md:px-[0px] px-[16px] pb-[16px]">
                {submitted && (
                    <div className="flex flex-wrap self-center w-full md:justify-center justify-between mt-[10px] md:gap-[20px] gap-[10px]">
                        {resultItems.map((item, index) => (
                            <ResultItem
                                key={index}
                                label={item.label}
                                value={item.value}
                                bgColor={item.bgColor}
                                textColor={item.textColor}
                            />
                        ))}
                    </div>
                )}
                {examInfo.examContent?.map((el) =>
                    el.type === "Paragraph" ? (
                        <ParagraphRenderer key={el.id} data={el} />
                    ) : (
                        <div
                            key={el.id}
                            ref={(ref) => {
                                if (el.type === "Question") {
                                    questionRefs.current[el.id] = ref;
                                }
                            }}
                        >
                            <QuestionRenderer
                                data={el}
                                userAnswer={userAnswers[el.id]}
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

const ResultItem = ({
    label,
    value,
    bgColor,
    textColor,
}: {
    label: string;
    value: number | undefined;
    bgColor: string;
    textColor: string;
}) => (
    <div
        className={`flex items-center md:gap-[10px] gap-[5px] md:text-[20px] text-[16px]`}
    >
        <p className="font-semibold">{label}:</p>
        <p
            className={`flex justify-center items-center min-w-[25px] h-[25px] font-semibold rounded-[5px] px-[5px]`}
            style={{ backgroundColor: bgColor, color: textColor }}
        >
            {value}
        </p>
    </div>
);
