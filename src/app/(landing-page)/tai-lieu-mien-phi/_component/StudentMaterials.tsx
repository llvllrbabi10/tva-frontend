"use client";

import { useState } from "react";
import MaterialStyle from "../student-materials.module.css";

const materialsMenu = [
    "Lớp 1",
    "Lớp 2",
    "Lớp 3",
    "Lớp 4",
    "Lớp 5",
    "Thi vào 6",
    "Lớp 6",
    "Lớp 7",
    "Lớp 8",
    "Lớp 9",
    "Lớp 10",
    "Thi vào 10",
    "Lớp 11",
    "Lớp 12",
];

// const schoolList = [
//     {
//         schoolId: "1",
//         name: "Trường THCS Cầu Giấy",
//     },
//     {
//         schoolId: "2",
//         name: " Trường THCS Thanh Xuân",
//     },
//     {
//         schoolId: "3",
//         name: "Trường THCS Nam Từ Liêm",
//     },
//     {
//         schoolId: "4",
//         name: "Trường THCS Lê Lợi (Hà Đông)",
//     },
//     {
//         schoolId: "5",
//         name: "Trường THCS Chu Văn An (Long Biên)",
//     },
//     {
//         schoolId: "6",
//         name: "Trường Liên cấp Ngôi Sao Hà Nội (Cơ sở 1)",
//     },
//     {
//         schoolId: "7",
//         name: "Trường Liên cấp Ngôi Sao Hà Nội – Hoàng Mai (Cơ sở 2)",
//     },
//     {
//         schoolId: "8",
//         name: "Trường Tiểu học, THCS & THPT Ngôi Sao Hoàng Mai",
//     },
//     {
//         schoolId: "9",
//         name: "Trường THCS Ban Mai",
//     },
//     {
//         schoolId: "10",
//         name: "Trường THCS Song Ngữ Wellspring",
//     },
// ];

// const materialsData = [
//     {
//         id: "1",
//         label: "Lớp 1",
//         content: [
//             {
//                 title: "Đề thi giữa kì 1",
//                 examData: [
//                     {
//                         description:
//                             "Đề tham khảo thi giữa kì 1 môn Tiếng Anh lớp 1",
//                         GGDriveId: "#",
//                     },
//                 ],
//             },
//             {
//                 title: "Đề thi cuối kì 1",
//                 examData: [
//                     {
//                         description:
//                             "Đề tham khảo thi cuối kì 1 môn Tiếng Anh lớp 1",
//                         GGDriveId: "#",
//                     },
//                 ],
//             },
//             {
//                 title: "Đề thi giữa kì 1",
//                 examData: [
//                     {
//                         description:
//                             "Đề tham khảo thi giữa kì 2 môn Tiếng Anh lớp 1",
//                         GGDriveId: "#",
//                     },
//                 ],
//             },
//             {
//                 title: "Đề thi cuối kì 2",
//                 examData: [
//                     {
//                         description:
//                             "Đề tham khảo thi cuối kì 2 môn Tiếng Anh lớp 1",
//                         GGDriveId: "#",
//                     },
//                 ],
//             },
//             {
//                 title: "Tài nguyên khác",
//                 examData: [
//                     {
//                         description: "Sách Global Success",
//                         GGDriveId: "#",
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         id: "2",
//         label: "Lớp 2",
//         content: [
//             {
//                 title: "Đề thi giữa kì 2",
//                 examData: [
//                     {
//                         description:
//                             "Đề tham khảo thi giữa kì 2 môn Tiếng Anh lớp 2",
//                         GGDriveId: "#",
//                     },
//                 ],
//             },
//             {
//                 title: "Đề thi cuối kì 2",
//                 examData: [
//                     {
//                         description:
//                             "Đề tham khảo thi cuối kì 2 môn Tiếng Anh lớp 2",
//                         GGDriveId: "#",
//                     },
//                 ],
//             },
//             {
//                 title: "Đề thi giữa kì 2",
//                 examData: [
//                     {
//                         description:
//                             "Đề tham khảo thi giữa kì 2 môn Tiếng Anh lớp 2",
//                         GGDriveId: "#",
//                     },
//                 ],
//             },
//             {
//                 title: "Đề thi cuối kì 2",
//                 examData: [
//                     {
//                         description:
//                             "Đề tham khảo thi cuối kì 2 môn Tiếng Anh lớp 2",
//                         GGDriveId: "#",
//                     },
//                 ],
//             },
//             {
//                 title: "Tài nguyên khác",
//                 examData: [
//                     {
//                         description: "Sách Global Success",
//                         GGDriveId: "#",
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         id: "t6",
//         label: "Thi vào 6",
//         content: [
//             {
//                 schoolId: "1",
//                 title: "Thi vào 6 năm học 2025",
//                 examData: [
//                     {
//                         description:
//                             "Đề thi vào 6 Trường THCS Cầu Giấy năm học 2025",
//                         GGDriveId: "#",
//                     },
//                 ],
//             },
//             {
//                 schoolId: "1",
//                 title: "Thi vào 6 năm học 2025",
//                 examData: [
//                     {
//                         description:
//                             "Đề thi vào 6 Trường THCS Cầu Giấy năm học 2024",
//                         GGDriveId: "#",
//                     },
//                 ],
//             },
//             {
//                 schoolId: "1",
//                 title: "Thi vào 6 năm học 2025",
//                 examData: [
//                     {
//                         description:
//                             "Đề thi vào 6 Trường THCS Cầu Giấy năm học 2023",
//                         GGDriveId: "#",
//                     },
//                 ],
//             },
//             {
//                 schoolId: "1",
//                 title: "Thi vào 6 năm học 2025",
//                 examData: [
//                     {
//                         description:
//                             "Đề thi vào 6 Trường THCS Cầu Giấy năm học 2022",
//                         GGDriveId: "#",
//                     },
//                 ],
//             },
//             {
//                 schoolId: "1",
//                 title: "Thi vào 6 năm học 2025",
//                 examData: [
//                     {
//                         description:
//                             "Đề thi vào 6 Trường THCS Cầu Giấy năm học 2021",
//                         GGDriveId: "#",
//                     },
//                 ],
//             },
//             {
//                 schoolId: "1",
//                 title: "Thi vào 6 năm học 2025",
//                 examData: [
//                     {
//                         description:
//                             "Đề thi vào 6 Trường THCS Cầu Giấy năm học 2020",
//                         GGDriveId: "#",
//                     },
//                 ],
//             },
//             {
//                 schoolId: "1",
//                 title: "Thi vào 6 năm học 2025",
//                 examData: [
//                     {
//                         description:
//                             "Đề thi vào 6 Trường THCS Cầu Giấy năm học 2019",
//                         GGDriveId: "#",
//                     },
//                 ],
//             },
//         ],
//     },
// ];

function StudentMaterials() {
    const [active, setActive] = useState(materialsMenu[0]);

    return (
        <div className={`${MaterialStyle.materialBg} flex justify-center`}>
            <div className="flex flex-1 flex-col md:py-[30px] py-[20px] gap-[20px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] px-[16px] md:px-[0px]">
                <p className="mb-8 text-center xl:tex-[40px] text-[30px] font-bold text-[#d14242] uppercase">
                    📚 Danh Mục Tài Liệu Học Tập 📚
                </p>
                <div className="flex flex-col gap-8 md:flex-row">
                    {/* Sidebar */}
                    <div className="w-full space-y-4 md:w-1/3">
                        <ul className="space-y-3">
                            {materialsMenu.map((item) => (
                                <li key={item}>
                                    <button
                                        className={`w-full rounded-full py-3 text-center font-semibold shadow-md hover:scale-105 transition-transform cursor-pointer ${
                                            active === item
                                                ? "bg-[#D14242] text-[#ffffff]"
                                                : "bg-[#ffffff] text-[#000000]"
                                        }`}
                                        onClick={() => setActive(item)}
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full space-y-8 md:w-2/3">
                        <div>
                            <h2 className="mb-4 text-2xl font-bold text-pink-500">
                                ✏️ Thi giữa kì 1
                            </h2>
                            <div className="flex flex-col rounded-2xl bg-yellow-200 p-6 gap-3 shadow hover:shadow-lg transition-all">
                                <p className="font-medium text-gray-700">
                                    📖 Đề tham khảo thi giữa kì 1 môn Tiếng Anh
                                    lớp 1
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-blue-600 hover:underline font-semibold"
                                    >
                                        Đọc online
                                    </a>
                                    <a
                                        href="#"
                                        className="text-green-600 hover:underline font-semibold"
                                    >
                                        Tải xuống
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="mb-4 text-2xl font-bold text-yellow-500">
                                ✏️ Thi cuối kì 1
                            </h2>
                            <div className="flex flex-col rounded-2xl bg-yellow-200 p-6 gap-3 shadow hover:shadow-lg transition-all">
                                <p className="font-medium text-gray-700">
                                    📖 Đề tham khảo thi cuối kì 1 môn Tiếng Anh
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-blue-600 hover:underline font-semibold"
                                    >
                                        Đọc online
                                    </a>
                                    <a
                                        href="#"
                                        className="text-green-600 hover:underline font-semibold"
                                    >
                                        Tải xuống
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="mb-4 text-2xl font-bold text-green-500">
                                ✏️ Thi giữa kì 2
                            </h2>
                            <div className="flex flex-col rounded-2xl bg-yellow-200 p-6 gap-3 shadow hover:shadow-lg transition-all">
                                <p className="font-medium text-gray-700">
                                    📖 Đề tham khảo thi giữa kì 2 môn Tiếng Anh
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-blue-600 hover:underline font-semibold"
                                    >
                                        Đọc online
                                    </a>
                                    <a
                                        href="#"
                                        className="text-green-600 hover:underline font-semibold"
                                    >
                                        Tải xuống
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="mb-4 text-2xl font-bold text-blue-500">
                                ✏️ Thi cuối kì 2
                            </h2>
                            <div className="flex flex-col rounded-2xl bg-yellow-200 p-6 gap-3 shadow hover:shadow-lg transition-all">
                                <p className="font-medium text-gray-700">
                                    📖 Đề tham khảo thi cuối kì 2 môn Tiếng Anh
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-blue-600 hover:underline font-semibold"
                                    >
                                        Đọc online
                                    </a>
                                    <a
                                        href="#"
                                        className="text-green-600 hover:underline font-semibold"
                                    >
                                        Tải xuống
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="mb-4 text-2xl font-bold text-purple-500">
                                🌈 Tài nguyên khác
                            </h2>
                            <ul className="list-disc pl-5 space-y-3 text-blue-700">
                                <li>
                                    <a href="#" className="hover:underline">
                                        📘 Sách Global Success
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        🔗 Link Google Drive
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        📗 Sách Bông Hoa Nhỏ
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        🔗 Link Google Drive
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentMaterials;
