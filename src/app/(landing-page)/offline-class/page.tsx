import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import {
    Star,
    OfflineClassSection1Img1,
    OfflineClassSection1Img2,
    OfflineClassSection1Img3,
    OfflineClassSection1Img4,
} from "@/assets/index";

function Page() {
    const benefits = [
        {
            boldText: "Tập trung cao độ",
            text: " – Học sinh không bị xao nhãng, tiếp thu kiến thức nhanh hơn.",
        },
        {
            boldText: "Tương tác trực tiếp",
            text: " – Học sinh được giáo viên hướng dẫn sát sao, giải đáp ngay lập tức.",
        },
        {
            boldText: "Phương pháp thực tiễn",
            text: " – Học đi đôi với hành, Học sinh áp dụng ngay vào thực tế.",
        },
        {
            boldText: "Phát triển kỹ năng",
            text: " – Học sinh được rèn luyện tư duy phản biện, giao tiếp và làm việc nhóm.",
        },
        {
            boldText: "Lộ trình rõ ràng",
            text: " – Kiểm tra định kỳ, đảm bảo tiến bộ nhanh chóng.",
        },
    ];

    const offlineClasses = [
        {
            href: "/offline-class/mam-non",
            image: OfflineClassSection1Img1,
            alt: "OfflineClassSection1Img1",
            title: "Tiếng anh mầm non",
            bgColor: "bg-[#FF5159]",
            imageBg: "",
        },
        {
            href: "/offline-class/tieu-hoc",
            image: OfflineClassSection1Img2,
            alt: "OfflineClassSection1Img2",
            title: "Tiếng anh tiểu học",
            bgColor: "bg-[#65c900]",
            imageBg: "bg-[#b2d98b]",
        },
        {
            href: "/offline-class/thcs",
            image: OfflineClassSection1Img3,
            alt: "OfflineClassSection1Img3",
            title: "Tiếng anh trung học cơ sở",
            bgColor: "bg-[#00c9c9]",
            imageBg: "bg-[#cef5e5]",
        },
        {
            href: "/offline-class/thpt",
            image: OfflineClassSection1Img4,
            alt: "OfflineClassSection1Img4",
            title: "Tiếng anh trung học phổ thông",
            bgColor: "bg-[#6500c9]",
            imageBg: "bg-[#cebff5]",
        },
    ];

    return (
        <div>
            <div className="section-1 flex justify-center bg-[#ffebe7]">
                <div className="flex flex-col md:py-[30px] py-[20px] gap-[20px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] md:px-[0px] px-[16px] justify-center">
                    <p className="xl:text-[40px] text-[30px] text-[#D14242] font-bold uppercase text-center">
                        Lớp học offline
                    </p>

                    <div className="flex flex-col gap-[15px]">
                        <p className="md:text-[20px] text-[18px] font-bold text-justify">
                            Trong thời đại công nghệ số, học online ngày càng
                            phổ biến, nhưng lớp học offline vẫn là lựa chọn tối
                            ưu với trải nghiệm học tập thực tế, hiệu quả và có
                            tính tương tác cao. Tại sao phụ huynh và học sinh
                            nên chọn lớp học offline tại TVA Education?
                        </p>
                        <div className="flex flex-col md:gap-[10px] gap-[5px]">
                            {benefits.map((benefit, index) => (
                                <BenefitItem
                                    key={index}
                                    boldText={benefit.boldText}
                                    text={benefit.text}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap md:gap-[30px] gap-[20px]">
                        {offlineClasses.map((classItem) => (
                            <OfflineClassCard
                                key={classItem.href}
                                href={classItem.href}
                                image={classItem.image}
                                alt={classItem.alt}
                                title={classItem.title}
                                bgColor={classItem.bgColor}
                                imageBg={classItem.imageBg}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;

type OfflineClassCardProps = {
    href: string;
    image: StaticImageData;
    alt: string;
    title: string;
    bgColor: string;
    imageBg: string;
};

const OfflineClassCard = ({
    href,
    image,
    alt,
    title,
    bgColor,
    imageBg,
}: OfflineClassCardProps) => (
    <Link
        className="flex flex-col xl:w-[525px] md:w-[360px] justify-center items-center rounded-[30px] overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-500 ease-in-out"
        href={href}
    >
        <Image
            src={image}
            alt={alt}
            className={`xl:w-[525px] xl:h-[300px] md:w-[360px] md:h-[200px] object-cover rounded-t-[30px] ${imageBg}`}
        />
        <p
            className={`w-full xl:text-[20px] text-[18px] font-bold ${bgColor} text-white uppercase text-center py-[10px] rounded-b-[30px] md:px-0 px-[15px]`}
        >
            {title}
        </p>
    </Link>
);

type BenefitItemProps = {
    boldText: string;
    text: string;
};

const BenefitItem = ({ boldText, text }: BenefitItemProps) => (
    <div className="flex gap-[15px]">
        <Image src={Star} alt="Star" className="w-[25px] h-[25px]" />
        <p className="md:text-[18px] text-[16px] text-justify">
            <b>{boldText}</b>
            {text}
        </p>
    </div>
);
