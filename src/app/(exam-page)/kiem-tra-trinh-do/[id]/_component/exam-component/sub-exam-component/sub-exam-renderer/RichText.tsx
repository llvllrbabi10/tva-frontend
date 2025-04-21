"use client";

import { setUserAnswers } from "@/redux/slices/examSlice";
import { useDispatch } from "react-redux";

import { RichTextBlock } from "@/app/(exam-page)/kiem-tra-trinh-do/[id]/_model/model";
export default function RichText({
    content,
    questionId,
    userAnswer,
}: {
    content: RichTextBlock[];
    questionId?: string;
    userAnswer?: string;
}) {
    const dispatch = useDispatch();

    const handleAnswerChange = (questionId: string, answer: string) => {
        dispatch(setUserAnswers({ questionId, answer }));
    };

    return (
        <span className="flex flex-wrap">
            {content.map((block, index) => {
                if (block.isUserEnterPlace) {
                    return (
                        <input
                            key={index}
                            className="border-b border-black w-24 mx-1 focus:outline-none bg-transparent"
                            type="text"
                            value={userAnswer || ""}
                            onChange={(e) =>
                                questionId &&
                                handleAnswerChange(questionId, e.target.value)
                            }
                        />
                    );
                }

                return (
                    <span
                        key={index}
                        style={{
                            fontWeight: block.bold ? 600 : undefined,
                            fontStyle: block.italic ? "italic" : undefined,
                            textDecoration: block.underline
                                ? "underline"
                                : undefined,
                            color: block.color,
                            backgroundColor: block.backgroundColor,
                            fontSize: block.fontSize,
                        }}
                    >
                        {block.text}
                    </span>
                );
            })}
        </span>
    );
}
