import { notFound } from "next/navigation";
import Image from "next/image";

import OnlineCourseStyle from "../online-course.module.css";
import {
    Book,
    Teacher,
    OnlineClassDetailSection3Img1,
    OnlineClassDetailSection3Img2,
    OnlineClassDetailSection3Img3,
    OnlineClassDetailSection3Img4,
    OnlineClassDetailSection3Img5,
} from "@images/assets/index";
import OnlineCourseSection2 from "../_component/OnlineCourseSection2";

const IDS = ["1"];

type PageProps = {
    params: Promise<{ id: string }>;
};

async function page({ params }: PageProps) {
    const _params = await params;
    const { id } = _params;

    if (!IDS.includes(id)) {
        notFound();
    }

    return (
        <div>
            <div className="section-1 flex justify-center bg-[#ffebe7]">
                <div className="flex flex-col flex-1 md:pt-[30px] pt-[20px] gap-[30px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] px-[16px] md:px-[0px]">
                    <p className="xl:text-[30px] text-[20px] text-[#D14242] font-bold uppercase text-center">
                        TỔNG ÔN TỪ VỰNG - NGỮ PHÁP TIẾNG ANH TIỂU HỌC
                    </p>
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[20px] font-[600]">
                            Luyện thi vào lớp 6 các trường chất lượng cao!
                        </p>
                        <div className="flex gap-[10px]">
                            <Image
                                src={Book}
                                alt="Book"
                                className="w-[25px] h-[25px]"
                            />
                            <p className="md:text-[18px] text-[16px] text-justify">
                                Khóa học được thiết kế giúp học sinh nắm vững
                                kiến thức cốt lõi, ôn luyện bài bản và tự tin
                                chinh phục kỳ thi vào lớp 6 các trường chất
                                lượng cao.
                            </p>
                        </div>
                        <div className="flex gap-[10px]">
                            <Image
                                src={Teacher}
                                alt="Teacher"
                                className="w-[25px] h-[25px]"
                            />
                            <p className="md:text-[18px] text-[16px] text-justify">
                                Chương trình học do
                                <span className="font-[600]">
                                    &nbsp;Th.S Thái Vân Anh&nbsp;
                                </span>
                                – tác giả của nhiều đầu sách Tiếng Anh bán chạy
                                nhất – trực tiếp biên soạn và giảng dạy. Với
                                nhiều năm kinh nghiệm luyện thi vào các trường
                                top đầu, cô mang đến lộ trình học bài bản, bám
                                sát đề thi, giúp học sinh hệ thống kiến thức,
                                rèn kỹ năng làm bài và đạt kết quả vượt trội.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <OnlineCourseSection2
                content1="Học sinh lớp 3, 4, 5 có định hướng thi vào lớp 6 các trường chất lượng cao."
                content2="Phụ huynh muốn giúp con có lộ trình ôn luyện hiệu quả ngay từ sớm."
                content3="Học sinh muốn củng cố kiến thức, rèn luyện tư duy và làm quen với dạng bài."
            />

            <div className="section-3 flex justify-center bg-[#ffebe7]">
                <div className="flex flex-1 flex-col md:py-[30px] py-[20px] md:gap-[20px] gap-[10px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] px-[16px] md:px-[0px]">
                    <p className="text-[20px] font-[600]">
                        Vì sao bạn nên chọn khóa học này?
                    </p>
                    <div className="flex md:flex-row flex-col md:gap-[20px] gap-[10px]">
                        <div className="flex flex-col xl:min-w-[300px] xl:max-w-[300px] md:min-w-[245px] md:max-w-[245px] justify-between gap-[10px]">
                            <div className="flex flex-1 gap-[10px]">
                                <Image
                                    src={OnlineClassDetailSection3Img2}
                                    alt="OnlineClassDetailSection3Img2"
                                    className="md:hidden block w-[50px] h-[50px]"
                                />
                                <div className="flex flex-1 flex-col gap-[5px]">
                                    <div className="text-[18px] font-[600] text-[#ff7575] md:text-right">
                                        Kiến thức quan trọng
                                    </div>
                                    <div className="md:text-right">
                                        Tổng hợp toàn bộ từ vựng & ngữ pháp quan
                                        trọng cho kỳ thi vào lớp 6.
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 gap-[10px]">
                                <Image
                                    src={OnlineClassDetailSection3Img3}
                                    alt="OnlineClassDetailSection3Img3"
                                    className="md:hidden block w-[50px] h-[50px]"
                                />
                                <div className="flex flex-1 flex-col gap-[5px]">
                                    <div className="text-[18px] font-[600] text-[#ffbd59] md:text-right">
                                        Hệ thống bài tập phong phú
                                    </div>
                                    <div className="md:text-right">
                                        Ghi nhớ lâu, áp dụng linh hoạt, chỉ ra
                                        các lỗi sai thường gặp, giúp học sinh
                                        tránh mất điểm đáng tiếc.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex hidden">
                            <Image
                                src={OnlineClassDetailSection3Img1}
                                alt="Online class detail"
                                className="xl:w-[440px] object-contain"
                            />
                        </div>
                        <div className="flex flex-col xl:min-w-[300px] xl:max-w-[300px] md:min-w-[245px] md:max-w-[245px] justify-between gap-[10px]">
                            <div className="flex flex-1 gap-[10px]">
                                <Image
                                    src={OnlineClassDetailSection3Img4}
                                    alt="OnlineClassDetailSection3Img4"
                                    className="md:hidden block w-[50px] h-[50px]"
                                />
                                <div className="flex flex-1 flex-col gap-[5px]">
                                    <div className="text-[18px] font-[600] text-[#54beff]">
                                        Bám sát đề thi
                                    </div>
                                    <div>
                                        THCS Nam Từ Liêm, THCS Thanh Xuân, THCS
                                        Cầu Giấy, THCS Nguyễn Tất Thành, THCS
                                        Lương Thế Vinh, …
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 gap-[10px]">
                                <Image
                                    src={OnlineClassDetailSection3Img5}
                                    alt="OnlineClassDetailSection3Img5"
                                    className="md:hidden block w-[50px] h-[50px]"
                                />
                                <div className="flex flex-1 flex-col gap-[5px]">
                                    <div className="text-[18px] font-[600] text-[#39dbb3]">
                                        Chiến lược làm bài
                                    </div>
                                    <div>
                                        Mẹo làm bài nhanh & chính xác, tránh bẫy
                                        đề thi, tối ưu thời gian làm bài.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <a
                            href="https://zalo.me/0961565495"
                            className={`${OnlineCourseStyle.animatedButton} bg-[#D14242] md:w-fit w-full text-center text-[18px] font-[600] text-white py-[10px] md:px-[100px] mx-[10px] md:mt-[20px] mt-[10px] rounded-full`}
                        >
                            Liên hệ mua ngay
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;

export function generateStaticParams() {
    return IDS.map((id) => ({ id }));
}
