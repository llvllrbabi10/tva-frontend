import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ExamInfo } from "@/app/(exam-page)/kiem-tra-trinh-do/[id]/_model/model";

export interface ExamState {
    examInfo: ExamInfo;
    userAnswers: Record<string, string>;
    submitted: boolean;
    timeLeft: number;
}

const initialState: ExamState = {
    examInfo: {
        id: "0",
        examContent: [],
    },
    userAnswers: {},
    submitted: false,
    timeLeft: 0,
};

export const examSlice = createSlice({
    name: "exam",
    initialState,
    reducers: {
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
        setTimeLeft: (state, action) => {
            state.timeLeft = action.payload;
        },
        resetExam: (state) => {
            state.userAnswers = {};
            state.submitted = false;
            state.timeLeft = 0;
        },
    },
});

export const {
    setExamInfo,
    setUserAnswers,
    setSubmitted,
    setTimeLeft,
    resetExam,
} = examSlice.actions;
export const examState = (state: RootState) => state.exam; // Lấy state exam từ store
export default examSlice.reducer;
