import {
    EssayQuestion,
    MultipleChoiceQuestion,
    Question,
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
    const renderContent = (blocks: RichTextBlock[][]) =>
        blocks.map((line, index) => (
            <div key={index}>
                <RichText content={line} />
            </div>
        ));

    if (data.questionType === 1) {
        const q = data as MultipleChoiceQuestion;

        if (q.questionContent?.length) {
            return (
                <div className="mt-[10px] px-[16px] py-[10px] rounded-[10px] bg-white shadow-sm">
                    <div className="font-semibold">{q.label}</div>
                    {q.questionContent && renderContent(q.questionContent)}
                    <div>
                        {q.options.map((opt) => {
                            const isSelected = userAnswer === opt.label;
                            const isCorrect =
                                submitted && q.correctAnswer === opt.label;
                            const isWrong =
                                submitted && isSelected && !isCorrect;

                            return (
                                <div
                                    key={opt.label}
                                    className={`flex items-start gap-2 p-2 rounded cursor-pointer border
                              ${
                                  isCorrect
                                      ? "bg-green-100 border-green-600"
                                      : ""
                              }
                              ${isWrong ? "bg-red-100 border-red-600" : ""}
                              ${
                                  isSelected && !submitted
                                      ? "bg-blue-100 border-blue-600"
                                      : ""
                              }
                            `}
                                    onClick={() =>
                                        !submitted &&
                                        onAnswerChange(q.id, opt.label)
                                    }
                                >
                                    <span className="font-bold">
                                        {opt.label}.
                                    </span>
                                    <RichText content={opt.content} />
                                </div>
                            );
                        })}
                    </div>
                    {submitted && q.explain && (
                        <div className="mt-2 text-sm text-gray-600">
                            <strong>Giải thích:</strong>
                            {renderContent(q.explain.content)}
                        </div>
                    )}
                </div>
            );
        } else {
            return (
                <>
                    <div
                        className={`flex mt-[10px] px-[16px] py-[10px] gap-[10px] rounded-[10px]  shadow-sm
                        ${
                            !submitted
                                ? "bg-white"
                                : q.correctAnswer === userAnswer
                                ? "bg-[#d3f2cc]"
                                : "bg-[#f5dfdf]"
                        }`}
                    >
                        <div className="md:font-[700] font-[600]">
                            {q.label}.
                        </div>
                        <div className="grid md:grid-cols-4 grid-cols-2 flex-1 gap-[10px]">
                            {q.options.map((opt) => {
                                const isSelected = userAnswer === opt.label;
                                const isCorrect =
                                    submitted && q.correctAnswer === opt.label;
                                const isWrong =
                                    submitted && isSelected && !isCorrect;

                                return (
                                    <div
                                        key={opt.label}
                                        className={`flex gap-[5px] rounded-full cursor-pointer`}
                                        onClick={() =>
                                            !submitted &&
                                            onAnswerChange(q.id, opt.label)
                                        }
                                    >
                                        <span
                                            className={`flex justify-center items-center w-[24px] h-[24px] font-[600] px-[6px] rounded-full 
                                            ${
                                                !isSelected && !submitted
                                                    ? "bg-[#ededed]"
                                                    : ""
                                            }
                                               ${
                                                   isSelected && !submitted
                                                       ? "bg-[#2850d4] text-white"
                                                       : ""
                                               } 
                                            ${
                                                isCorrect
                                                    ? "bg-[#62b002] text-white"
                                                    : ""
                                            }
                                            ${
                                                isWrong
                                                    ? "bg-[#e34f4f] text-white"
                                                    : ""
                                            }`}
                                        >
                                            {opt.label}
                                        </span>
                                        <RichText content={opt.content} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    {submitted && q.explain && (
                        <div className="mt-2 text-sm text-gray-600">
                            <strong>Giải thích:</strong>
                            {renderContent(q.explain.content)}
                        </div>
                    )}
                </>
            );
        }
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
