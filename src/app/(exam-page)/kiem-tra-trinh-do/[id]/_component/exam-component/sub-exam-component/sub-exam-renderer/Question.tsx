"use client";

import { Question } from "@/app/(exam-page)/kiem-tra-trinh-do/[id]/_model/model";
import MultipleChoiceQuestionRenderer from "./sub-question/MultipleChoiceQuestionRenderer";
import EssayQuestionRenderer from "./sub-question/EssayQuestionRenderer";

type Props = {
    data: Question;
    userAnswer?: string;
};

export default function QuestionRenderer({ data, userAnswer }: Props) {
    if (data.questionType === 1) {
        return (
            <MultipleChoiceQuestionRenderer
                data={data}
                userAnswer={userAnswer}
            />
        );
    }
    if (data.questionType === 2) {
        return <EssayQuestionRenderer data={data} userAnswer={userAnswer} />;
    }

    return <></>;
}
