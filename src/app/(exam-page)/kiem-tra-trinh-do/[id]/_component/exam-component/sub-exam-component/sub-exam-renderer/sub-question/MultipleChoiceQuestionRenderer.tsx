"use client";

import { useEffect, useRef, useState } from "react";
import { RootState } from "@/redux/store";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setUserAnswers } from "@/redux/slices/examSlice";
import {
    MultipleChoiceQuestion,
    Question,
    Option,
    RichTextBlock,
} from "@/app/(exam-page)/kiem-tra-trinh-do/[id]/_model/model";
import RichText from "../RichText";

type Props = {
    data: Question;
    userAnswer?: string;
};

function MultipleChoiceQuestionRenderer({ data, userAnswer }: Props) {
    const dispatch = useDispatch();

    const { submitted } = useSelector(
        (state: RootState) => ({
            submitted: state.exam.submitted,
        }),
        shallowEqual
    );

    const q = data as MultipleChoiceQuestion;
    const optionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [colClass, setColClass] = useState("grid-cols-1");

    // Set the initial column class based on the screen width
    useEffect(() => {
        if (!optionRefs.current.length) return;

        const maxWidth = optionRefs.current.reduce((max, el) => {
            if (el) {
                let width = 0;
                if (el.children) {
                    for (let i = 0; i < el.children.length; i++) {
                        const child = el.children[i] as HTMLElement;
                        width += child.getBoundingClientRect().width;
                    }
                } else {
                    width = el.getBoundingClientRect().width;
                }

                return Math.max(max, width);
            }
            return max;
        }, 0);

        let maxAreaWidth = 0;
        const screenWidth = window.innerWidth;
        if (screenWidth > 768) {
            maxAreaWidth = 750;
        } else {
            maxAreaWidth = Math.min(
                screenWidth - 64, // 32px padding on each side
                500
            );
        }

        if (maxWidth > maxAreaWidth / 2.5) {
            setColClass("grid-cols-1");
        } else if (maxWidth > maxAreaWidth / 5) {
            setColClass("grid-cols-2");
        } else {
            setColClass("grid-cols-4");
        }
    }, [q]);

    const handleAnswerChange = (questionId: string, answer: string) => {
        dispatch(setUserAnswers({ questionId, answer }));
    };

    const getBgQuestion = () => {
        if (!submitted) {
            return "bg-white";
        }
        if (q.correctAnswer === userAnswer) {
            return "bg-[#d3f2cc]";
        }
        if (q.correctAnswer !== userAnswer) {
            return "bg-[#f5dfdf]";
        }
        return "bg-white";
    };

    const getStyleLabelOption = (opt: Option) => {
        const isSelected = userAnswer === opt.label;
        const isCorrect = submitted && q.correctAnswer === opt.label;
        const isWrong = submitted && isSelected && !isCorrect;

        if (!isSelected && !submitted) {
            return "bg-[#ededed]";
        }
        if (isSelected && !submitted) {
            return "bg-[#2850d4] text-white";
        }
        if (isCorrect) {
            return "bg-[#62b002] text-white";
        }
        if (isWrong) {
            return "bg-[#e34f4f] text-white";
        }
        return "";
    };

    const renderOptionGrid = () => {
        return (
            <div className={`grid ${colClass} flex-1 gap-[10px]`}>
                {q.options.map((opt, index) => (
                    <div
                        key={opt.label}
                        ref={(el) => {
                            optionRefs.current[index] = el;
                        }}
                        className="flex gap-[5px] rounded-full cursor-pointer"
                        onClick={() =>
                            !submitted && handleAnswerChange(q.label, opt.label)
                        }
                    >
                        <span
                            className={`
                                flex justify-center items-center
                                w-[24px] h-[24px] font-[600] px-[6px] rounded-full 
                                ${getStyleLabelOption(opt)}`}
                        >
                            {opt.label}
                        </span>

                        <RichText content={opt.content} />
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <div
                className={`
                    flex
                    ${
                        q.questionContent?.length
                            ? "flex-col gap-[10px]"
                            : "flex-row"
                    }
                    mt-[10px] 
                    px-[16px] 
                    py-[10px] 
                    rounded-[10px] 
                    shadow-sm
                    ${getBgQuestion()}`}
            >
                <div className="flex">
                    <div className="md:font-[700] font-[600] mr-[10px]">
                        {q.label}.
                    </div>
                    {q.questionContent && renderContent(q.questionContent)}
                </div>
                {renderOptionGrid()}
            </div>
            {submitted && q.explain && (
                <div className="mt-[5px] px-[16px] py-[10px] text-sm  bg-[#f7ffbe] rounded-[10px]">
                    <strong>Giải thích:</strong>
                    {renderContent(q.explain.content)}
                </div>
            )}
        </>
    );
}

export default MultipleChoiceQuestionRenderer;

const renderContent = (blocks: RichTextBlock[][]) => {
    return blocks.map((line, index) => (
        <div key={index}>
            <RichText content={line} />
        </div>
    ));
};
