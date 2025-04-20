import Image from "next/image";

import PlacementTest from "./placement-test.module.css";

import { PlacementTestImg1 } from "@images/assets";
import Link from "next/link";

const classes = [
    {
        id: 1,
        emoji: "🧸",
        name: "Lớp 1",
        description: "Pre-A1 Starters",
        borderColor: "border-pink-300",
        textColor: "text-pink-500",
        buttonColor: "bg-pink-400",
    },
    {
        id: 2,
        emoji: "🐥",
        name: "Lớp 2",
        description: "Pre-A1 Starters",
        borderColor: "border-green-300",
        textColor: "text-green-500",
        buttonColor: "bg-green-400",
    },
    {
        id: 3,
        emoji: "🎈",
        name: "Lớp 3",
        description: "A1 Movers",
        borderColor: "border-blue-300",
        textColor: "text-blue-500",
        buttonColor: "bg-blue-400",
    },
    {
        id: 4,
        emoji: "🛸",
        name: "Lớp 4",
        description: "A1 Movers",
        borderColor: "border-purple-300",
        textColor: "text-purple-500",
        buttonColor: "bg-purple-400",
    },
    {
        id: 5,
        emoji: "📘",
        name: "Lớp 5",
        description: "A2 Flyers",
        borderColor: "border-red-300",
        textColor: "text-red-500",
        buttonColor: "bg-red-400",
    },
    {
        id: 6,
        emoji: "🎯",
        name: "Lớp 6",
        description: "A2 Key (KET)",
        borderColor: "border-teal-300",
        textColor: "text-teal-500",
        buttonColor: "bg-teal-400",
    },
    {
        id: 7,
        emoji: "🚀",
        name: "Lớp 7",
        description: "B1 Preliminary (PET) – giai đoạn đầu",
        borderColor: "border-orange-300",
        textColor: "text-orange-500",
        buttonColor: "bg-orange-400",
    },
    {
        id: 8,
        emoji: "🦄",
        name: "Lớp 8",
        description: "B1+ PET / B2 First – giai đoạn đầu",
        borderColor: "border-indigo-300",
        textColor: "text-indigo-500",
        buttonColor: "bg-indigo-400",
    },
    {
        id: 9,
        emoji: "🎓",
        name: "Lớp 9",
        description: "B2 First (FCE)",
        borderColor: "border-cyan-300",
        textColor: "text-cyan-500",
        buttonColor: "bg-cyan-400",
    },
    {
        id: 10,
        emoji: "📚",
        name: "Lớp 10",
        description: "B2+ / C1 Advanced (giai đoạn đầu)",
        borderColor: "border-pink-300",
        textColor: "text-pink-500",
        buttonColor: "bg-pink-400",
    },
    {
        id: 11,
        emoji: "👑",
        name: "Lớp 11",
        description: "C1 Advanced (CAE)",
        borderColor: "border-yellow-300",
        textColor: "text-yellow-500",
        buttonColor: "bg-yellow-400",
    },
    {
        id: 12,
        emoji: "🏆",
        name: "Lớp 12",
        description: "C1 Advanced",
        borderColor: "border-lime-300",
        textColor: "text-lime-500",
        buttonColor: "bg-lime-400",
    },
];

function page() {
    return (
        <div className={`${PlacementTest.studyBg} bg-amber-200`}>
            <div className="text-center md:p-10 p-6 relative ">
                <Image
                    src={PlacementTestImg1}
                    alt="PlacementTestImg1"
                    className="w-[300px] mx-auto"
                />
                <h1 className="md:text-[30px] text-[20px] font-bold text-pink-600 mt-4 mb-2">
                    🎮 Chào mừng bạn đến với bước đầu tiên trên hành trình chinh
                    phục Tiếng Anh.
                </h1>
                <p className="text-lg text-blue-600">
                    Hãy chọn lớp để làm bài kiểm tra đánh giá năng lực miễn phí
                    nhé 👇
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 md:py-8 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {classes.map((classItem, index) => (
                    <ClassCard key={index} {...classItem} />
                ))}
            </div>
        </div>
    );
}

export default page;

type ClassCardProps = {
    id: number;
    emoji: string;
    name: string;
    description: string;
    borderColor: string;
    textColor: string;
    buttonColor: string;
};

const ClassCard = ({
    id,
    emoji,
    name,
    description,
    borderColor,
    textColor,
    buttonColor,
}: ClassCardProps) => {
    return (
        <Link
            href={`/kiem-tra-trinh-do/${id}`}
            className={`flex flex-col justify-between bg-white rounded-3xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 border-4 ${borderColor} cursor-pointer`}
        >
            <div>
                <div className="text-5xl mb-2">{emoji}</div>
                <h3 className={`text-xl font-bold ${textColor} mb-1`}>
                    {name}
                </h3>
                <p className="text-sm mb-4">{description}</p>
            </div>
            <button
                className={`${buttonColor} text-white px-4 py-2 rounded-full cursor-pointer ${PlacementTest?.bounceBtn}`}
            >
                Làm bài
            </button>
        </Link>
    );
};
