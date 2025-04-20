export type ExamInfo = {
    id: string;
    title?: string; // Tên đề thi
    description?: string; // Mô tả đề thi
    subject?: string; // Môn học
    grade?: string; // Khối lớp
    examContent: ExamContent; // Nội dung của đề thi
    duration?: number; // Thời gian làm bài (phút)
    totalQuestion?: number; // Tổng số câu hỏi
    totalScore?: number; // Tổng điểm của đề thi
};

export type ExamContent = ExamElement[];
export type ExamElement = Paragraph | Question;

export type Paragraph = {
    id: string;
    type: "Paragraph";
    backgroundColor?: string; // Màu nền của đoạn văn
    color?: string; // Màu chữ của đoạn văn
    align?: string; // Căn lề của đoạn văn
    content: RichTextBlock[];
};

export type Question = MultipleChoiceQuestion | EssayQuestion;

export type EssayQuestion = {
    id: string;
    type: "Question";
    questionType: number; // 1: multiple choice, 2: essay
    label: string; // Câu 1
    questionContent: RichTextBlock[][]; // cả phần yêu cầu vào nội dung câu hỏi.
    correctAnswer?: string;
    explain?: {
        url: string; // link đến file ảnh
        content: RichTextBlock[][];
    };
};

export type MultipleChoiceQuestion = {
    id: string;
    type: "Question";
    questionType: number; // 1: multiple choice, 2: essay
    label: string; // 1,2,3,4,5
    questionContent?: RichTextBlock[][]; // cả phần yêu cầu và nội dung câu hỏi. VD: Câu 64. Choose the best answer to complete the sentence. \n Jenny isn’t here. She is______	Lucy’s party.
    options: Option[];
    correctAnswer?: string;
    explain?: {
        url: string; // link đến file ảnh
        content: RichTextBlock[][];
    };
};

export type Option = {
    label: string; // "A", "B", "C", "D"
    content: RichTextBlock[];
};

export type RichTextBlock = {
    text: string;
    fontSize?: string;
    color?: string;
    backgroundColor?: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    isUserEnterPlace?: boolean; // true nếu là ô input, false nếu không phải
};
