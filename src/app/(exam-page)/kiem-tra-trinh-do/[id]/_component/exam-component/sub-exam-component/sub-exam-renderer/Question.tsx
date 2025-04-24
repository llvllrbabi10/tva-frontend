"use client";

import {
    EssayQuestion,
    Question,
} from "@/app/(exam-page)/kiem-tra-trinh-do/[id]/_model/model";
import MultipleChoiceQuestionRenderer from "./sub-question/MultipleChoiceQuestionRenderer";

type Props = {
    data: Question;
    userAnswer?: string;
    submitted: boolean;
};

export default function QuestionRenderer({
    data,
    userAnswer,
    submitted,
}: Props) {
    if (data.questionType === 1) {
        return (
            <MultipleChoiceQuestionRenderer
                data={data}
                userAnswer={userAnswer}
            />
        );
    }

    const q = data as EssayQuestion;

    // const renderExplain = (blocks: RichTextBlock[][]) => {
    //     return blocks.map((line, index) => (
    //         <div key={index}>
    //             <RichText content={line} />
    //         </div>
    //     ));
    // };

    // const renderEssayQuestion = (blocks: RichTextBlock[][]) => {
    //     return blocks.map((line, index) => (
    //         <div key={index}>
    //             <RichText
    //                 content={line}
    //                 questionId={q.id}
    //                 userAnswer={userAnswer}
    //             />
    //         </div>
    //     ));
    // };

    return (
        <div className="mb-6 p-4 border rounded-xl shadow-sm">
            <div className="font-semibold mb-2">{q.label}</div>
            {/* {renderEssayQuestion(q.questionContent)} */}

            {/* {submitted && q.correctAnswer && (
                <div className="mt-2 text-green-600">
                    <strong>Đáp án:</strong> {q.correctAnswer}
                </div>
            )} */}
            {/* {submitted && q.explain && (
                <div className="mt-2 text-sm text-gray-600">
                    <strong>Giải thích:</strong>
                    {renderExplain(q.explain.content)}
                </div>
            )} */}
        </div>
    );
}
