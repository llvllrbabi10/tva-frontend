import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
    setSubmitted,
    setExamResult,
    resetExam,
    setIsLoading,
} from "@/redux/slices/examSlice";
import { RootState } from "@/redux/store";
import {
    EssayQuestion,
    ExamInfo,
    MultipleChoiceQuestion,
    Question,
} from "@/app/(exam-page)/kiem-tra-trinh-do/[id]/_model/model";
import { normalizeText } from "@/redux/services/services-common";
import { useState } from "react";
import BottomPopup from "../../common-component/BottomPopup";

function ExamFooter({
    questionRefs,
    offset,
}: {
    questionRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
    offset: { top: number; bottom: number };
}) {
    const dispatch = useDispatch();

    const { examInfo, userAnswers, submitted } = useSelector(
        (state: RootState) => ({
            examInfo: state.exam.examInfo,
            userAnswers: state.exam.userAnswers,
            submitted: state.exam.submitted,
        }),
        shallowEqual
    );

    const [showBottomPopup, setShowBottomPopup] = useState(false);

    const handleSubmit = () => {
        dispatch(setSubmitted(true));
        const { correct, incorrect, unanswered, score } = evaluateExamResult(
            examInfo,
            userAnswers
        );
        dispatch(
            setExamResult({
                score,
                correctAnswers: correct,
                incorrectAnswers: incorrect,
                unanswered,
            })
        );
    };

    const startOver = () => {
        dispatch(setIsLoading(true));

        // Cuộn lên đầu trang
        window.scrollTo({ top: 0, behavior: "smooth" });

        dispatch(resetExam());

        setTimeout(() => {
            dispatch(setIsLoading(false));
        }, 500);
    };

    const getStyleLabelOption = (question: Question, userAnswer: string) => {
        if (!userAnswer) {
            return "bg-white text-[#000] border-[1px] border-[#e4e4e4] hover:bg-[#e4e4e4]";
        }
        if (!submitted && userAnswer) {
            return "bg-[#edf2fc] text-[#2850d4] hover:bg-[#a8c3f7]";
        }
        if (submitted && userAnswer) {
            if (question.questionType == 1) {
                const q = question as MultipleChoiceQuestion;

                if (q.correctAnswer == userAnswer) {
                    return "bg-[#d3f2cc] text-[#61af02] hover:bg-[#ade6a1]";
                }
                if (q.correctAnswer != userAnswer) {
                    return "bg-[#f6e1e1] text-[#e44f4f] hover:bg-[#e8b0b0]";
                }
            }
            if (question.questionType == 2) {
                const q = question as EssayQuestion;

                const isCorrect = isEssayAnswerCorrect(
                    userAnswer || "",
                    q.correctAnswer || ""
                );

                if (isCorrect) {
                    return "bg-[#d3f2cc] text-[#61af02] hover:bg-[#ade6a1]";
                } else {
                    return "bg-[#f6e1e1] text-[#e44f4f] hover:bg-[#e8b0b0]";
                }
            }
        }

        return "bg-white text-[#000] border-[1px] border-[#e4e4e4]";
    };

    const isEssayAnswerCorrect = (
        userAnswer: string,
        correctAnswer: string
    ): boolean => {
        const normalizedUserAnswer = normalizeText(userAnswer);

        const correctAnswers = correctAnswer
            .split("/")
            .map((ans) => normalizeText(ans));

        return correctAnswers.some((ans) => ans === normalizedUserAnswer);
    };

    const handleScrollToQuestion = (id: string) => {
        const target = questionRefs.current[id];
        if (target) {
            const rect = target.getBoundingClientRect();
            const offsetTop = window.scrollY + rect.top - offset.top; // 60 là chiều cao header
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="flex w-full justify-center items-center bg-[#ffffff] border-t-[5px] border-t-[#f2f4f7] py-[10px]">
            {/* Desktop */}
            <div className="xl:flex hidden relative w-full justify-center items-center">
                <div className="flex flex-wrap md:max-w-[750px] max-w-[500px] gap-[7.89px]">
                    {examInfo.examContent.map((item) => {
                        if (item.type === "Question") {
                            return (
                                <div
                                    key={item.id}
                                    onClick={() =>
                                        handleScrollToQuestion(item.id)
                                    }
                                    className={`
                                        flex 
                                        min-w-[30px] 
                                        min-h-[30px] 
                                        px-[5px]
                                        items-center 
                                        justify-center 
                                        ${getStyleLabelOption(
                                            item,
                                            userAnswers[item.id]
                                        )}
                                        font-semibold
                                        
                                        rounded-md 
                                        cursor-pointer`}
                                >
                                    {item.label}
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="absolute right-[25px]">
                    {!submitted && (
                        <button
                            onClick={handleSubmit}
                            className="px-6 py-2 bg-[#d42424] text-white rounded-md hover:bg-[#ec1616] cursor-pointer"
                        >
                            Hoàn thành
                        </button>
                    )}
                    {submitted && (
                        <button
                            onClick={startOver}
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
                        >
                            Làm lại
                        </button>
                    )}
                </div>
            </div>

            {/* mobile */}
            <div className="flex md:hidden flex-wrap justify-center md:max-w-[750px] max-w-[500px]">
                <div
                    className="text-[16px] font-semibold text-center md:w-[500px] w-screen"
                    onClick={() => setShowBottomPopup(true)}
                >
                    Review & Submit
                </div>
                {showBottomPopup && (
                    <BottomPopup
                        onClose={() => {
                            setShowBottomPopup(false);
                        }}
                    >
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex flex-wrap justify-between md:max-w-[750px] max-w-[500px] gap-[5px]">
                                {examInfo.examContent.map((item) => {
                                    if (item.type === "Question") {
                                        return (
                                            <div
                                                key={item.id}
                                                onClick={() => {
                                                    setShowBottomPopup(false);
                                                    handleScrollToQuestion(
                                                        item.id
                                                    );
                                                }}
                                                className={`
                                        flex 
                                        min-w-[30px] 
                                        min-h-[30px] 
                                        px-[5px]
                                        items-center 
                                        justify-center 
                                        ${getStyleLabelOption(
                                            item,
                                            userAnswers[item.id]
                                        )}
                                        font-semibold
                                        
                                        rounded-md 
                                        cursor-pointer`}
                                            >
                                                {item.label}
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>

                            {!submitted && (
                                <button
                                    onClick={() => {
                                        setShowBottomPopup(false);
                                        handleSubmit();
                                    }}
                                    className="px-6 py-2 bg-[#d42424] text-white rounded-md hover:bg-[#ec1616] cursor-pointer"
                                >
                                    Hoàn thành
                                </button>
                            )}
                            {submitted && (
                                <button
                                    onClick={() => {
                                        setShowBottomPopup(false);
                                        startOver();
                                    }}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
                                >
                                    Làm lại
                                </button>
                            )}
                        </div>
                    </BottomPopup>
                )}
            </div>
        </div>
    );
}

export default ExamFooter;

const evaluateExamResult = (
    exam: ExamInfo,
    userAnswers: Record<string, string>
) => {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    const questions = exam.examContent.filter(
        (el): el is Question => el.type === "Question"
    );

    for (const question of questions) {
        const userAnswer = userAnswers[question.id];
        if (!userAnswer) {
            unanswered++;
            continue; // skip if no answer provided
        }

        if (question.questionType === 1) {
            // multiple choice
            if (userAnswer === question.correctAnswer) {
                correct++;
            } else {
                incorrect++;
            }
        } else if (question.questionType === 2) {
            const isCorrect = isEssayAnswerCorrect(
                userAnswer || "",
                question.correctAnswer || ""
            );
            if (isCorrect) {
                correct++;
            } else {
                incorrect++;
            }
        }
    }

    const totalQuestions = questions.length;
    const score = exam.totalScore
        ? Math.round((correct / totalQuestions) * exam.totalScore)
        : correct; // fallback nếu không có totalScore

    return {
        correct,
        incorrect,
        unanswered,
        score,
    };
};

// Check if the user's answer is correct
const isEssayAnswerCorrect = (
    userAnswer: string,
    correctAnswer: string
): boolean => {
    const normalizedUserAnswer = normalizeText(userAnswer);

    const correctAnswers = correctAnswer
        .split("/")
        .map((ans) => normalizeText(ans));

    return correctAnswers.some((ans) => ans === normalizedUserAnswer);
};
