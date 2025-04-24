import {
    EssayQuestion,
    Question,
} from "@/app/(exam-page)/kiem-tra-trinh-do/[id]/_model/model";
import { RootState } from "@/redux/store";
import { shallowEqual, useSelector } from "react-redux";
import EssayQuestionContentRenderer from "./EssayQuestionContentRenderer";
import EditorRender from "@/app/(exam-page)/kiem-tra-trinh-do/[id]/_component/common-component/EditorRender";

type Props = {
    data: Question;
    userAnswer?: string;
};

function EssayQuestionRenderer({ data, userAnswer }: Props) {
    const q = data as EssayQuestion;

    const { submitted } = useSelector(
        (state: RootState) => ({
            submitted: state.exam.submitted,
        }),
        shallowEqual
    );

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

    return (
        <div>
            {q?.questionContent && (
                <div
                    className={`flex
                    mt-[10px] 
                    px-[16px] 
                    py-[10px] 
                    rounded-[10px] 
                    shadow-sm
                    ${getBgQuestion()}`}
                >
                    <div className="md:font-[700] font-[600] mr-[10px]">
                        {q.label}.
                    </div>
                    <EssayQuestionContentRenderer
                        data={q}
                        userAnswer={userAnswer}
                    />
                </div>
            )}

            {submitted && q.correctAnswer && (
                <div className="mt-2 ml-[16px] text-green-600">
                    <strong>Đáp án:</strong> {q.correctAnswer}
                </div>
            )}
            {submitted && q.explain && (
                <div className="mt-[5px] px-[16px] py-[10px] text-sm bg-[#f7ffbe] rounded-[10px]">
                    <strong>Giải thích:</strong>
                    <EditorRender jsonContent={q.explain} />
                </div>
            )}
        </div>
    );
}

export default EssayQuestionRenderer;
