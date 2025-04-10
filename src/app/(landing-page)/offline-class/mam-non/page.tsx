import Image from "next/image";

import {
    Star,
    Ok,
    Target,
    KindergartenEnglishSection1Img1,
    KindergartenEnglishSection1Img2,
    KindergartenEnglishSection1Img3,
    KindergartenEnglishSection1Img4,
    KindergartenEnglishSection1Img5,
    KindergartenEnglishSection1Img6,
} from "@images/assets/index";

function page() {
    const features = [
        {
            title: "TPR (Total Physical Response)",
            description:
                "Học thông qua vận động cơ thể, giúp trẻ ghi nhớ từ vựng và cấu trúc ngữ pháp tốt hơn.",
        },
        {
            title: "Phương pháp giao tiếp và trực quan (Communicative Approach and Visual Learning)",
            description:
                "Tạo cơ hội cho trẻ thực hành giao tiếp qua trò chơi, bài hát, sử dụng hình ảnh, video, flashcard để minh họa từ vựng và nội dung bài học.",
        },
    ];

    return (
        <div>
            <div className="section-1 flex justify-center bg-[#ffebe7]">
                <div className="flex flex-1 flex-col md:py-[30px] py-[20px] gap-[20px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] px-[16px] md:px-[0px]">
                    <p className="xl:text-[40px] text-[30px] text-[#D14242] font-bold uppercase text-center">
                        Tiếng anh mầm non
                    </p>

                    <div className="flex flex-col md:gap-[10px] gap-[5px]">
                        {features.map((feature, index) => (
                            <FeatureItem
                                key={index}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="section-2 flex justify-center bg-[#ffebe7]">
                <div className="flex flex-1 flex-col pt-[10px] pb-[20px] gap-[20px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] px-[16px] md:px-[0px]">
                    <p className="md:text-[25px] text-[20px] font-bold text-white text-center uppercase bg-[#D14242] p-[10px] rounded-full">
                        Lớp 4 tuổi
                    </p>
                    <div className="flex md:flex-row flex-col xl:gap-[10px] md:gap-[20px] gap-[30px] bg-white p-[20px] rounded-[30px] border-[5px] border-[#D14242]">
                        <div className="flex flex-col xl:min-w-[400px] xl:max-w-[400px] md:min-w-[340px] md:max-w-[340px] gap-[10px]">
                            <p className="md:text-[25px] text-[20px] text-[#D14242] font-[700]">
                                Giáo trình
                            </p>

                            <p className="md:text-[18px] text-[16px] text-justify">
                                Bộ giáo trình giúp trẻ tiếp cận Tiếng Anh một
                                cách tự nhiên, vui nhộn thông qua hình ảnh, bài
                                hát và hoạt động tương tác.
                            </p>

                            <div className="flex flex-col gap-[5px]">
                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Ok}
                                        alt="Ok"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px] text-[#D14242] font-[600]">
                                        Fingerprints 1 (Dành cho trẻ mới bắt
                                        đầu)
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Ok}
                                        alt="Ok"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px] text-[#D14242] font-[600]">
                                        Fingerprints 2 (Mở rộng & nâng cao)
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-[20px] justify-center">
                                <Image
                                    src={KindergartenEnglishSection1Img3}
                                    alt="Finger Prints 1"
                                    className="xl:w-[180px] md:w-[150px] w-[min(calc((100vw-92px)/2),204px)] object-cover rounded-[20px]"
                                />
                                <Image
                                    src={KindergartenEnglishSection1Img2}
                                    alt="Finger Prints 2"
                                    className="xl:w-[180px] md:w-[150px] w-[min(calc((100vw-92px)/2),204px)] object-cover rounded-[20px]"
                                />
                            </div>
                        </div>

                        <Image
                            src={KindergartenEnglishSection1Img1}
                            alt="KindergartenEnglishSection1Img1"
                            className="xl:block hidden min-w-[200px] object-contain"
                        />

                        <div className="flex flex-col xl:min-w-[400px] xl:max-w-[400px] md:min-w-[340px] md:max-w-[340px] gap-[10px]">
                            <p className="md:text-[25px] text-[20px] text-[#D14242] font-[700]">
                                Mục tiêu
                            </p>

                            <p className="md:text-[18px] text-[16px] text-justify">
                                Chương trình giúp trẻ tiếp cận Tiếng Anh một
                                cách tự nhiên, hứng thú qua phương pháp học đa
                                giác quan.
                            </p>

                            <div className="flex flex-col gap-[5px]">
                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Target}
                                        alt="Target"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px] text-justify">
                                        <span className="font-[600]">
                                            Làm quen với Tiếng Anh:{" "}
                                        </span>
                                        Học từ vựng theo chủ đề quen thuộc qua
                                        hình ảnh, hoạt động thực tế.
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Target}
                                        alt="Target"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px] text-justify">
                                        <span className="font-[600]">
                                            Phát triển kỹ năng nghe - nói:{" "}
                                        </span>
                                        Luyện phản xạ ngôn ngữ qua hội thoại,
                                        mẫu câu đơn giản.
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Target}
                                        alt="Target"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px] text-justify">
                                        <span className="font-[600]">
                                            Mở rộng vốn từ:{" "}
                                        </span>
                                        Học từ mới theo chủ đề, dễ nhớ, dễ ứng
                                        dụng.
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Target}
                                        alt="Target"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px] text-justify">
                                        <span className="font-[600]">
                                            Học qua bài hát & trò chơi:{" "}
                                        </span>
                                        Bài hát vui nhộn, trò chơi giúp trẻ ghi
                                        nhớ và giao tiếp tốt hơn.
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Target}
                                        alt="Target"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px]">
                                        <span className="font-[600]">
                                            Tư duy & tương tác:{" "}
                                        </span>
                                        Rèn luyện sự linh hoạt, tự tin qua hoạt
                                        động nhóm.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-3 flex justify-center bg-[#ffebe7]">
                <div className="flex flex-1 flex-col md:py-[30px] py-[20px] gap-[20px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] px-[16px] md:px-[0px]">
                    <p className="md:text-[25px] text-[20px] font-bold text-white text-center uppercase bg-[#D14242] p-[10px] rounded-full">
                        Lớp 5 tuổi
                    </p>
                    <div className="flex md:flex-row flex-col xl:gap-[10px] md:gap-[20px] gap-[30px] bg-white p-[20px] rounded-[30px] border-[5px] border-[#D14242]">
                        <div className="flex flex-col xl:min-w-[400px] xl:max-w-[400px] md:min-w-[340px] md:max-w-[340px] gap-[10px]">
                            <p className="md:text-[25px] text-[20px] text-[#D14242] font-[700]">
                                Giáo trình
                            </p>

                            <p className="md:text-[18px] text-[16px] text-justify">
                                Bộ giáo trình giúp trẻ học Tiếng Anh một cách tự
                                nhiên, vui nhộn thông qua bài hát, trò chơi,
                                truyện kể và hoạt động tương tác.
                            </p>

                            <div className="flex flex-col gap-[5px]">
                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Ok}
                                        alt="Ok"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px] text-[#D14242] font-[600]">
                                        Everybody Up Starters (Pre Starters
                                        chuẩn Cambridge)
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Ok}
                                        alt="Ok"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px] text-[#D14242] font-[600]">
                                        Let’s Read (Rèn luyện kỹ năng đọc)
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-[20px] justify-center">
                                <Image
                                    src={KindergartenEnglishSection1Img5}
                                    alt="Everybody Up Starters"
                                    className="xl:w-[180px] md:w-[150px] w-[min(calc((100vw-92px)/2),204px)] object-cover rounded-[20px] border"
                                />
                                <Image
                                    src={KindergartenEnglishSection1Img6}
                                    alt="Let’s Read"
                                    className="xl:w-[180px] md:w-[150px] w-[min(calc((100vw-92px)/2),204px)] object-contain rounded-[20px]"
                                />
                            </div>
                        </div>

                        <Image
                            src={KindergartenEnglishSection1Img4}
                            alt="KindergartenEnglishSection1Img4"
                            className="xl:block hidden min-w-[200px] object-contain"
                        />

                        <div className="flex flex-col xl:min-w-[400px] xl:max-w-[400px] md:min-w-[340px] md:max-w-[340px] gap-[10px]">
                            <p className="md:text-[25px] text-[20px] text-[#D14242] font-[700]">
                                Mục tiêu
                            </p>

                            <p className="md:text-[18px] text-[16px] text-justify">
                                Chương trình giúp trẻ tiếp cận Tiếng Anh một
                                cách hứng thú, rèn luyện toàn diện 4 kỹ năng:
                                <span className="font-[600]">
                                    nghe, nói, đọc, viết.
                                </span>
                            </p>

                            <div className="flex flex-col gap-[5px]">
                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Target}
                                        alt="Target"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px] text-justify">
                                        <span className="font-[600]">
                                            Làm quen với Tiếng Anh:
                                        </span>
                                        Học từ vựng theo chủ đề quen thuộc qua
                                        hình ảnh, truyện kể.
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Target}
                                        alt="Target"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px] text-justify">
                                        <span className="font-[600]">
                                            Phát triển kỹ năng nghe - nói:
                                        </span>
                                        Luyện phản xạ ngôn ngữ qua bài hát, hội
                                        thoại đơn giản.
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Target}
                                        alt="Target"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px] text-justify">
                                        <span className="font-[600]">
                                            Rèn luyện kỹ năng đọc:{" "}
                                        </span>
                                        Tiếp cận với truyện kể giúp trẻ đọc hiểu
                                        dễ dàng hơn.
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Target}
                                        alt="Target"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px] text-justify">
                                        <span className="font-[600]">
                                            Học qua bài hát & trò chơi:{" "}
                                        </span>
                                        Tăng cường ghi nhớ từ vựng, phát âm
                                        chuẩn xác.
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Target}
                                        alt="Target"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px]">
                                        <span className="font-[600]">
                                            Tư duy & tương tác:{" "}
                                        </span>
                                        Rèn luyện sự tự tin qua hoạt động nhóm
                                        và bài tập sáng tạo.
                                    </p>
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

type FeatureItemProps = {
    title: string;
    description: string;
};

const FeatureItem = ({ title, description }: FeatureItemProps) => (
    <div className="flex gap-[15px]">
        <Image src={Star} alt="Star" className="w-[25px] h-[25px]" />
        <p className="md:text-[18px] text-[16px] text-justify">
            <b>{title}</b> – {description}
        </p>
    </div>
);
