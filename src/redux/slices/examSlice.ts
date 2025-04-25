import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ExamInfo } from "@/app/(exam-page)/kiem-tra-trinh-do/[id]/_model/model";

export interface ExamState {
    isLoading: boolean;
    examInfo: ExamInfo;
    userAnswers: Record<string, string>;
    submitted: boolean;
    totalTime: number; // seconds
    timeLeft: number; // seconds
    examResult?: {
        score: number;
        correctAnswers: number;
        incorrectAnswers: number;
        unanswered: number;
    };
}

const initialState: ExamState = {
    isLoading: true,
    examInfo: {
        id: "0",
        examContent: [],
    },
    userAnswers: {},
    submitted: false,
    totalTime: 0,
    timeLeft: -1,
    examResult: {
        score: 0,
        correctAnswers: 0,
        incorrectAnswers: 0,
        unanswered: 0,
    },
};

export const examSlice = createSlice({
    name: "exam",
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setExamInfo: (state, action) => {
            state.examInfo = action.payload;
        },
        setUserAnswers: (state, action) => {
            const { questionId, answer } = action.payload;
            state.userAnswers[questionId] = answer;
        },
        setSubmitted: (state, action) => {
            state.submitted = action.payload;
        },
        setTotalTime: (state, action) => {
            state.totalTime = action.payload;
        },
        setTimeLeft: (state, action) => {
            state.timeLeft = action.payload;
        },
        setExamResult: (state, action) => {
            const { score, correctAnswers, incorrectAnswers, unanswered } =
                action.payload;
            state.examResult = {
                score,
                correctAnswers,
                incorrectAnswers,
                unanswered,
            };
        },
        resetExam: (state) => {
            state.userAnswers = {};
            state.submitted = false;
            state.timeLeft = state.totalTime;
            state.examResult = {
                score: 0,
                correctAnswers: 0,
                incorrectAnswers: 0,
                unanswered: 0,
            };
        },
    },
});

export const {
    setIsLoading,
    setExamInfo,
    setUserAnswers,
    setSubmitted,
    setTotalTime,
    setTimeLeft,
    setExamResult,
    resetExam,
} = examSlice.actions;
export const examState = (state: RootState) => state.exam; // Lấy state exam từ store
export default examSlice.reducer;
