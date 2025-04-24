import { JSONContent } from "@tiptap/react";

export type ExamInfo = {
    id: string;
    title?: string; // Tên đề thi
    description?: string; // Mô tả đề thi
    subject?: string; // Môn học
    grade?: string; // Khối lớp
    examContent: ExamContent; // Nội dung của đề thi
    duration?: number; // Thời gian làm bài (phút)
    totalScore?: number; // Tổng điểm của đề thi
};

export type ExamContent = ExamElement[];
export type ExamElement = Paragraph | Question;

export type Paragraph = {
    id: string;
    type: "Paragraph";
    content: JSONContent;
    contentStyle: {
        color?: string; // Màu sắc của đoạn văn
        fontSize?: number; // Kích thước chữ của đoạn văn
        backgroundColor?: string; // Màu nền của đoạn văn
        textAlign?: "left" | "center" | "right" | "justify"; // Căn lề của đoạn văn
    };
    translate?: JSONContent; // Nội dung đã dịch
};

export type Question = MultipleChoiceQuestion | EssayQuestion;

export type EssayQuestion = {
    id: string;
    type: "Question";
    questionType: number; // 1: multiple choice, 2: essay
    label: string; // Câu 1
    questionContent: JSONContent; // cả phần yêu cầu vào nội dung câu hỏi.
    correctAnswer?: string;
    explain?: JSONContent;
};

export type MultipleChoiceQuestion = {
    id: string;
    type: "Question";
    questionType: number; // 1: multiple choice, 2: essay
    label: string; // Câu 1
    questionContent?: JSONContent; // cả phần yêu cầu và nội dung câu hỏi. VD: Câu 64. Choose the best answer to complete the sentence. \n Jenny isn’t here. She is______	Lucy’s party.
    options: Option[];
    correctAnswer?: string;
    explain?: JSONContent;
};

export type Option = {
    label: string; // "A", "B", "C", "D"
    content: JSONContent;
};
