"use client";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setUserAnswers } from "@/redux/slices/examSlice";

import { JSONContent } from "@tiptap/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Question } from "@/app/(exam-page)/kiem-tra-trinh-do/[id]/_model/model";
import { RootState } from "@/redux/store";
import { getStyleFromMarks } from "@/redux/services/services-common";

function EssayQuestionContentRenderer({
    data,
    userAnswer,
}: {
    data: Question;
    userAnswer?: string;
}) {
    const questionId = data.id;
    const questionContent = data.questionContent as JSONContent;
    return (
        <div>
            {questionContent.content &&
                questionContent.content.map((line, i) => (
                    <div key={i}>
                        {line.content &&
                            renderLineContent(
                                line.content,
                                questionId,
                                userAnswer
                            )}
                    </div>
                ))}
        </div>
    );
}

export default EssayQuestionContentRenderer;

const renderLineContent = (
    line: JSONContent[],
    questionId: string,
    userAnswer?: string
) => {
    return line.map((node, i) => {
        const style = getStyleFromMarks(node.marks);

        if (node.type === "text") {
            if (node.text && /_{3,}/.test(node.text)) {
                // Các đoạn có chứa dấu gạch dưới liên tiếp
                const segments = node.text.split(/(_{3,})/); // tìm các chuỗi "___..."
                return segments.map((seg, j) => {
                    if (/^_{3,}$/.test(seg)) {
                        // thay thế các dấu gạch dưới bằng ô input
                        return (
                            <span key={`input-${i}-${j}`}>
                                <CustomInput
                                    questionId={questionId}
                                    userAnswer={userAnswer}
                                />
                            </span>
                        );
                    } else {
                        // phần còn lại giữ nguyên
                        return (
                            <span key={`text-${i}-${j}`} style={style}>
                                {seg}
                            </span>
                        );
                    }
                });
            } else {
                // Các đoạn ko chứa dấu gạch dưới liên tiếp
                return (
                    <span key={i} style={style}>
                        {node.text}
                    </span>
                );
            }
        } else if (node.type === "image") {
            // Nếu là hình ảnh, render hình ảnh
            return (
                <Image
                    key={i}
                    src={node.attrs?.src || ""}
                    alt={node.attrs?.alt || ""}
                    width={300}
                    height={200}
                    className="max-h-[200px] object-cover"
                />
            );
        }
    });
};

const CustomInput = ({
    questionId,
    userAnswer,
}: {
    questionId: string;
    userAnswer?: string;
}) => {
    const dispatch = useDispatch();

    const { submitted } = useSelector(
        (state: RootState) => ({
            submitted: state.exam.submitted,
        }),
        shallowEqual
    );

    const [value, setValue] = useState(userAnswer || "");
    const spanRef = useRef<HTMLSpanElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (spanRef.current && inputRef.current) {
            const screenWidth = window.innerWidth;
            const spanWidth = spanRef.current.offsetWidth;
            if (screenWidth > 768) {
                // Desktop
                if (spanWidth > 96 && spanWidth < 700) {
                    inputRef.current.style.width = `${spanWidth}px`;
                }
            } else {
                // Mobile
                const maxAreaWidth = Math.min(
                    screenWidth - 64, // 32px padding on each side
                    500
                );
                if (spanWidth > 80 && spanWidth < maxAreaWidth - 80) {
                    inputRef.current.style.width = `${spanWidth}px`;
                }
            }
        }
    }, [value]);

    // Reset input value when start over
    useEffect(() => {
        if (!userAnswer) {
            setValue("");
        }
    }, [userAnswer]);

    const handleAnswerChange = (answer: string) => {
        dispatch(setUserAnswers({ questionId, answer }));
    };

    const handleSetValue = (newValue: string) => {
        // Không cho nhập 2 space liên tiếp
        const sanitized = newValue.replace(/ {2,}/g, " ");
        setValue(sanitized);
    };

    return (
        <div className="relative inline-block">
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={(e) => {
                    handleSetValue(e.target.value);
                }}
                onBlur={() => {
                    handleAnswerChange(value.trim());
                }}
                disabled={submitted}
                className="inline-block border-b border-black md:w-[96px] w-[80px] mx-1 focus:outline-none"
            />
            <span
                ref={spanRef}
                className="invisible absolute whitespace-pre"
                style={{
                    fontSize: "16px",
                    fontFamily: "inherit",
                }}
            >
                {value || " "}
            </span>
        </div>
    );
};
