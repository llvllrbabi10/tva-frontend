import Image, { StaticImageData } from "next/image";

import OnlineCourseStyle from "./online-course.module.css";
import {
    Light,
    Ok,
    OfflineClassSection1Img2,
    Teacher,
} from "@images/assets/index";
import Link from "next/link";

function page() {
    const benefits = [
        {
            icon: Light,
            boldText:
                "Chinh phục Tiếng Anh dễ dàng cùng Th.S Thái Vân Anh, tác giả các sách Tiếng Anh!",
            text: "",
        },
        {
            icon: Ok,
            boldText: "Học linh hoạt",
            text: " – Mọi lúc, mọi nơi, xem lại không giới hạn, nắm vững kiến thức nhanh chóng.",
        },
        {
            icon: Ok,
            boldText: "Lộ trình bài bản",
            text: " – Từ cơ bản đến nâng cao, dễ hiểu, dễ nhớ, ứng dụng hiệu quả.",
        },
        {
            icon: Ok,
            boldText: "Chuyên đề trọng tâm",
            text: " – Tập trung từ vựng, ngữ pháp, kỹ năng làm bài, giúp cải thiện nhanh chóng.",
        },
        {
            icon: Ok,
            boldText: "Học cùng chuyên gia",
            text: " – Th.S Thái Vân Anh, giảng viên giàu kinh nghiệm, giảng dạy sinh động, truyền cảm hứng mạnh mẽ.",
        },
        {
            icon: Ok,
            boldText: "Luôn có giáo viên đồng hành",
            text: " – Hỗ trợ giải đáp tận tình dù học online!",
        },
    ];

    const onlineCourses: OnlineClassCardProps[] = [
        {
            id: 1,
            image: OfflineClassSection1Img2,
            alt: "OfflineClassSection1Img2",
            title: "TỔNG ÔN TỪ VỰNG - NGỮ PHÁP <br/> TIẾNG ANH TIỂU HỌC",
            description: [
                {
                    icon: Ok,
                    text: "Tổng hợp toàn bộ từ vựng & ngữ pháp quan trọng cho kỳ thi vào lớp 6.",
                },
                {
                    icon: Ok,
                    text: "Hệ thống chuyên đề trọng tâm: Danh từ, động từ, tính từ, thì cơ bản, câu hỏi, câu điều kiện…",
                },
                {
                    icon: Ok,
                    text: "Bám sát đề thi thực tế của các trường chất lượng cao.",
                },
            ],
            teacher: "Cô Thái Vân Anh",
            price: "500.000đ",
            originalPrice: "1.200.000đ",
        },
    ];

    return (
        <div>
            <div className="section-1 flex justify-center bg-[#ffebe7]">
                <div className="flex flex-1 flex-col md:pt-[30px] pt-[20px] gap-[20px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] px-[16px] md:px-[0px]">
                    <p className="xl:text-[40px] text-[30px] text-[#D14242] font-bold uppercase text-center">
                        Khóa học online
                    </p>

                    <div className="flex flex-col md:gap-[10px] gap-[5px]">
                        {benefits.map((item, index) => (
                            <BenefitItem
                                key={index}
                                icon={item.icon}
                                boldText={item.boldText}
                                text={item.text}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="section-2 flex justify-center bg-[#ffebe7]">
                <div className="flex flex-1 md:py-[30px] py-[20px] gap-[20px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] md:px-[0px] px-[16px]">
                    <div className="flex flex-1 flex-col items-center gap-[10px]">
                        <p className="w-full xl:text-[20px] text-[18px] text-white font-bold px-[20px] py-[10px] bg-[#65c900] rounded-full text-center uppercase">
                            Khóa tiểu học
                        </p>
                        <div className="flex w-full md:flex-row flex-col gap-[10px]">
                            {onlineCourses.map((course, index) => (
                                <OnlineClassCard key={index} {...course} />
                            ))}

                            <div className="flex flex-col w-full border-[3px] border-[#65c900] rounded-[20px] overflow-hidden cursor-pointer">
                                <Image
                                    src={OfflineClassSection1Img2}
                                    alt="OfflineClassSection1Img2"
                                />
                                <div className="flex flex-col flex-1 bg-white p-[10px] gap-[10px]">
                                    <p className="text-[18px] font-bold text-center text-[#3e9533]">
                                        TỔNG ÔN TỪ VỰNG - NGỮ PHÁP <br />
                                        TIẾNG ANH TRUNG HỌC CƠ SỞ
                                    </p>
                                    <div className="flex flex-col justify-center items-center flex-1 gap-[5px] min-h-[200px]">
                                        coming soon ...
                                    </div>

                                    <a
                                        href="https://zalo.me/0961565495"
                                        className={`${OnlineCourseStyle.animatedButton} bg-[#D14242] text-center text-[18px] font-[600] text-white py-[10px] mx-[10px] rounded-full`}
                                    >
                                        Liên hệ mua ngay
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;

type BenefitItemProps = {
    icon: StaticImageData;
    boldText: string;
    text: string;
};

const BenefitItem = ({ icon, boldText, text }: BenefitItemProps) => (
    <div className="flex gap-[15px]">
        <Image src={icon} alt="icon" className="w-[25px] h-[25px]" />
        <p className="md:text-[18px] text-[16px] text-justify">
            <span className="font-bold">{boldText}</span> {text}
        </p>
    </div>
);

type OnlineClassCardProps = {
    id: number;
    image: StaticImageData;
    alt: string;
    title: string;
    description: { icon: StaticImageData; text: string }[];
    teacher: string;
    price: string;
    originalPrice: string;
};

const OnlineClassCard = ({
    id,
    image,
    alt,
    title,
    description,
    teacher,
    price,
    originalPrice,
}: OnlineClassCardProps) => (
    <div className="flex flex-col w-full border-[3px] border-[#65c900] rounded-[20px] overflow-hidden cursor-pointer">
        <Link href={`/khoa-hoc-online/${id}`}>
            <Image src={image} alt={alt} />
        </Link>

        <div className="flex flex-col bg-white p-[10px] gap-[10px]">
            <Link
                href={`/khoa-hoc-online/${id}`}
                className="flex flex-col gap-[10px]"
            >
                <p className="text-[18px] font-bold text-center text-[#3e9533]">
                    {title.split("<br/>").map((part, index) => (
                        <span key={index}>
                            {part}
                            <br />
                        </span>
                    ))}
                </p>
                <div className="flex flex-col gap-[5px]">
                    {description.map((desc, index) => (
                        <div className="flex gap-[10px]" key={index}>
                            <Image
                                src={desc.icon}
                                alt=""
                                className="w-[25px] h-[25px]"
                            />
                            <p className="text-[16px] text-justify">
                                {desc.text}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex gap-[10px]">
                    <Image src={Teacher} alt="" className="w-[25px] h-[25px]" />
                    <p className="font-[600]">Giáo viên: {teacher}</p>
                </div>
                <div className="flex gap-[10px] items-center justify-center">
                    <p className="text-[25px] text-[#D14242] font-bold">
                        {price}
                    </p>
                    <p className="line-through">{originalPrice}</p>
                </div>
            </Link>

            <a
                href="https://zalo.me/0961565495"
                className={`${OnlineCourseStyle.animatedButton} bg-[#D14242] text-center text-[18px] font-[600] text-white py-[10px] mx-[10px] rounded-full`}
            >
                Liên hệ mua ngay
            </a>
        </div>
    </div>
);
