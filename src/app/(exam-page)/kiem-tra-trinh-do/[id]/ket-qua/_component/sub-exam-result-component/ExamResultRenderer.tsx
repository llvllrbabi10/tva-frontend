"use client";

import { CuteChampion } from "@images/assets";
import Image from "next/image";
import CircularProgress from "../../../_component/common-component/CircularProgress";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useParams, useRouter } from "next/navigation";
import {
    EssayQuestion,
    MultipleChoiceQuestion,
    Question,
} from "@/app/(exam-page)/kiem-tra-trinh-do/[id]/_model/model";
import { normalizeText } from "@/redux/services/services-common";
function ExamResultRenderer() {
    const router = useRouter();
    const params = useParams();

    const { examInfo, userAnswers, totalTime, timeLeft, examResult } =
        useSelector(
            (state: RootState) => ({
                examInfo: state.exam.examInfo,
                userAnswers: state.exam.userAnswers,
                totalTime: state.exam.totalTime,
                timeLeft: state.exam.timeLeft,
                examResult: state.exam.examResult,
                submitted: state.exam.submitted,
            }),
            shallowEqual
        );

    const questionList = examInfo.examContent.filter(
        (item) => item.type === "Question"
    ) as Question[];

    const half = Math.ceil(questionList.length / 2);
    const splitQuestionList = [
        questionList.slice(0, half) as Question[],
        questionList.slice(half) as Question[],
    ];

    const toDoTime = totalTime - timeLeft;

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60)
            .toString()
            .padStart(2, "0");
        const s = (seconds % 60).toString().padStart(2, "0");
        return `${m} phút ${s} giây`;
    };

    const getStyleLabelOption = (question: Question, userAnswer: string) => {
        if (question.questionType == 1) {
            const q = question as MultipleChoiceQuestion;

            if (q.correctAnswer == userAnswer) {
                return "bg-[#61af02]";
            }
            if (q.correctAnswer != userAnswer) {
                return "bg-[#e44f4f]";
            }
        }
        if (question.questionType == 2) {
            const q = question as EssayQuestion;

            const isCorrect = isEssayAnswerCorrect(
                userAnswer || "",
                q.correctAnswer || ""
            );

            if (isCorrect) {
                return "bg-[#61af02]";
            } else {
                return "bg-[#e44f4f]";
            }
        }
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

    return (
        <div className="flex flex-col items-center min-h-[93vh] bg-[#f2f4f7]">
            <div className="flex xl:max-w-[900px] md:max-w-[750px] max-w-[min(calc(100vw-32px),500px)] h-fit items-center md:mt-[30px] mt-[20px] p-[20px] xl:gap-[50px] gap-[0px] bg-white rounded-[20px]">
                <div className="flex flex-col gap-[30px]">
                    <p className="xl:text-[24px] text-[20px] font-semibold text-center">
                        Chúc mừng bạn đã hoàn thành bài test trong{" "}
                        <br className="md:block hidden" />{" "}
                        {formatTime(toDoTime)}
                    </p>
                    <div className="flex gap-[40px] md:justify-start justify-center">
                        <CircularProgress
                            value={examResult?.score || 0}
                            max={examInfo?.totalScore || 0}
                        />
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex gap-[10px] xl:text-[20px] text-[18px] font-semibold">
                                <p className="min-w-[70px]">Đúng:</p>
                                <p className="bg-[#d3f2cc] text-[#61af02] text-center px-[5px] min-w-[25px] rounded-[5px]">
                                    {examResult?.correctAnswers}
                                </p>
                            </div>
                            <div className="flex gap-[10px] xl:text-[20px] text-[18px] font-semibold">
                                <p className="min-w-[70px]">Sai:</p>
                                <p className="bg-[#f6e1e1] text-[#e44f4f] text-center px-[5px] min-w-[25px] rounded-[5px]">
                                    {examResult?.incorrectAnswers}
                                </p>
                            </div>
                            <div className="flex gap-[10px] xl:text-[20px] text-[18px] font-semibold">
                                <p className="min-w-[70px]">Bỏ qua:</p>
                                <p className="bg-[#f2f2f2] text-center px-[5px] min-w-[25px] rounded-[5px]">
                                    {examResult?.unanswered}
                                </p>
                            </div>
                        </div>
                    </div>
                    <p
                        className="flex md:w-fit justify-center items-center bg-[#e44f4f] hover:bg-[#b82929] px-[20px] py-[10px] text-white rounded-[10px] xl:text-[20px] text-[18px] font-semibold cursor-pointer"
                        onClick={() =>
                            router.push(`/kiem-tra-trinh-do/${params.id}`)
                        }
                    >
                        Xem giải chi tiết
                    </p>
                </div>
                <Image
                    src={CuteChampion}
                    alt="cute-champion"
                    className="md:block hidden w-[300px] object-contain"
                />
            </div>

            <div className="flex flex-col xl:w-[900px] md:w-[750px] w-[min(calc(100vw-32px),500px)] h-fit items-center md:my-[30px] my-[20px] bg-white rounded-[20px]">
                <p className="w-full px-[20px] py-[10px] border-b-[2px] border-[#D8D8D8] text-center text-[20px] font-semibold">
                    Đáp án
                </p>
                <div className="flex w-full md:flex-row flex-col gap-x-[50px] gap-y-[10px] px-[20px] py-[10px]">
                    {splitQuestionList.map((questionHalf, colIndex) => (
                        <div
                            key={colIndex}
                            className="flex flex-1 flex-col gap-[10px]"
                        >
                            {questionHalf.map(
                                (item) =>
                                    item.type === "Question" && (
                                        <div
                                            key={item.id}
                                            className="flex gap-[10px]"
                                        >
                                            <p
                                                className={`
                                                   text-white
                                                    h-[30px]
                                                    min-w-[30px]
                                                    px-[5px]
                                                    font-semibold
                                                    flex
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    ${getStyleLabelOption(
                                                        item,
                                                        userAnswers[item.id]
                                                    )}
                                                `}
                                            >
                                                {item.label}
                                            </p>
                                            <p className="font-semibold">
                                                {item.correctAnswer}
                                            </p>
                                        </div>
                                    )
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExamResultRenderer;
