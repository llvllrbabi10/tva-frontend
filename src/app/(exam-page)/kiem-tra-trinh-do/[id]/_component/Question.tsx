"use client";

import { useEffect, useRef, useState } from "react";
import {
    EssayQuestion,
    MultipleChoiceQuestion,
    Question,
    Option,
    RichTextBlock,
} from "../_model/model";
import RichText from "./RichText";

type Props = {
    data: Question;
    userAnswer?: string;
    onAnswerChange: (questionId: string, answer: string) => void;
    submitted: boolean;
};

export default function QuestionRenderer({
    data,
    userAnswer,
    onAnswerChange,
    submitted,
}: Props) {
    if (data.questionType === 1) {
        const q = data as MultipleChoiceQuestion;

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

        const OptionGrid = ({ q }: { q: MultipleChoiceQuestion }) => {
            const optionRefs = useRef<(HTMLDivElement | null)[]>([]);
            const [colClass, setColClass] = useState("grid-cols-1");

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
                        screenWidth - 64, // 16px padding on each side
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
                                !submitted && onAnswerChange(q.id, opt.label)
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
                    {OptionGrid({ q })}
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

    const q = data as EssayQuestion;
    return (
        <div className="mb-6 p-4 border rounded-xl shadow-sm">
            <div className="font-semibold mb-2">{q.label}</div>
            {renderContent(q.questionContent)}
            <textarea
                disabled={submitted}
                value={userAnswer || ""}
                onChange={(e) => onAnswerChange(q.id, e.target.value)}
                className="w-full mt-2 border rounded p-2"
                placeholder="Nhập câu trả lời của bạn..."
            />
            {submitted && q.correctAnswer && (
                <div className="mt-2 text-green-600">
                    <strong>Gợi ý:</strong> {q.correctAnswer}
                </div>
            )}
            {submitted && q.explain && (
                <div className="mt-2 text-sm text-gray-600">
                    <strong>Giải thích:</strong>
                    {renderContent(q.explain.content)}
                </div>
            )}
        </div>
    );
}

const renderContent = (blocks: RichTextBlock[][]) => {
    return blocks.map((line, index) => (
        <div key={index}>
            <RichText content={line} />
        </div>
    ));
};
