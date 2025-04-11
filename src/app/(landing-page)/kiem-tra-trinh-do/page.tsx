import Image from "next/image";

import PlacementTest from "./placement-test.module.css";

import { PlacementTestImg1 } from "@images/assets";

const classes = [
    {
        emoji: "🧸",
        name: "Lớp 1",
        description: "Bắt đầu học chữ cái và từ",
        borderColor: "border-yellow-300",
        textColor: "text-pink-500",
        buttonColor: "bg-pink-400",
    },
    {
        emoji: "🐥",
        name: "Lớp 2",
        description: "Từ vựng và câu đơn",
        borderColor: "border-green-300",
        textColor: "text-green-500",
        buttonColor: "bg-green-400",
    },
    {
        emoji: "🎈",
        name: "Lớp 3",
        description: "Đọc hiểu và điền từ",
        borderColor: "border-blue-300",
        textColor: "text-blue-500",
        buttonColor: "bg-blue-400",
    },
    {
        emoji: "🛸",
        name: "Lớp 4",
        description: "Ngữ pháp nhẹ nhàng",
        borderColor: "border-purple-300",
        textColor: "text-purple-500",
        buttonColor: "bg-purple-400",
    },
    {
        emoji: "📘",
        name: "Lớp 5",
        description: "Câu ghép và đoạn văn ngắn",
        borderColor: "border-red-300",
        textColor: "text-red-500",
        buttonColor: "bg-red-400",
    },
    {
        emoji: "🎯",
        name: "Lớp 6",
        description: "Tăng cường ngữ pháp và phản xạ",
        borderColor: "border-teal-300",
        textColor: "text-teal-500",
        buttonColor: "bg-teal-400",
    },
    {
        emoji: "🚀",
        name: "Lớp 7",
        description: "Viết đoạn văn và đọc hiểu sâu",
        borderColor: "border-orange-300",
        textColor: "text-orange-500",
        buttonColor: "bg-orange-400",
    },
    {
        emoji: "🦄",
        name: "Lớp 8",
        description: "Nghe hiểu và thực hành tình huống",
        borderColor: "border-indigo-300",
        textColor: "text-indigo-500",
        buttonColor: "bg-indigo-400",
    },
    {
        emoji: "🎓",
        name: "Lớp 9",
        description: "Viết luận và thảo luận",
        borderColor: "border-cyan-300",
        textColor: "text-cyan-500",
        buttonColor: "bg-cyan-400",
    },
    {
        emoji: "📚",
        name: "Lớp 10",
        description: "Phân tích văn bản và phản biện",
        borderColor: "border-pink-300",
        textColor: "text-pink-500",
        buttonColor: "bg-pink-400",
    },
    {
        emoji: "👑",
        name: "Lớp 11",
        description: "Giao tiếp học thuật và thuyết trình",
        borderColor: "border-yellow-300",
        textColor: "text-yellow-500",
        buttonColor: "bg-yellow-400",
    },
    {
        emoji: "🏆",
        name: "Lớp 12",
        description: "Tổng ôn luyện thi & kỹ năng chuyên sâu",
        borderColor: "border-lime-300",
        textColor: "text-lime-500",
        buttonColor: "bg-lime-400",
    },
];

function page() {
    return (
        <div className={`${PlacementTest.studyBg} bg-amber-200`}>
            <div className="text-center p-10 relative ">
                <Image
                    src={PlacementTestImg1}
                    alt="PlacementTestImg1"
                    className="w-[300px] mx-auto"
                />
                <h1 className="text-4xl font-bold text-pink-600 mt-4 mb-2">
                    🎮 Chào mừng đến với Vương quốc Tiếng Anh!
                </h1>
                <p className="text-lg text-blue-600">
                    Hãy chọn lớp để bắt đầu cuộc hành trình kỳ thú của bạn 👇
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {classes.map((classItem, index) => (
                    <ClassCard
                        key={index}
                        emoji={classItem.emoji}
                        name={classItem.name}
                        description={classItem.description}
                        borderColor={classItem.borderColor}
                        textColor={classItem.textColor}
                        buttonColor={classItem.buttonColor}
                    />
                ))}
            </div>
        </div>
    );
}

export default page;

type ClassCardProps = {
    emoji: string;
    name: string;
    description: string;
    borderColor: string;
    textColor: string;
    buttonColor: string;
};

const ClassCard = ({
    emoji,
    name,
    description,
    borderColor,
    textColor,
    buttonColor,
}: ClassCardProps) => {
    return (
        <div
            className={`bg-white rounded-3xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 border-4 ${borderColor} cursor-pointer`}
        >
            <div className="text-5xl mb-2">{emoji}</div>
            <h3 className={`text-xl font-bold ${textColor} mb-1`}>{name}</h3>
            <p className="text-sm mb-4">{description}</p>
            <button
                className={`${buttonColor} text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition-colors ${PlacementTest?.bounceBtn}`}
            >
                Vào lớp
            </button>
        </div>
    );
};
