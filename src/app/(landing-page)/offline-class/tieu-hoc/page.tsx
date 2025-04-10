import Image from "next/image";

import {
    Star,
    Ok,
    Target,
    PrimarySchoolEnglishSection1Img1,
    PrimarySchoolEnglishSection1Img2,
    PrimarySchoolEnglishSection1Img3,
    PrimarySchoolEnglishSection1Img4,
    PrimarySchoolEnglishSection1Img5,
    PrimarySchoolEnglishSection1Img6,
} from "@images/assets/index";

function page() {
    const features = [
        "Lớp Tiếng Anh dành cho học sinh tiểu học được thiết kế nhằm giúp các em nắm vững từ vựng và ngữ pháp, từ đó phát triển toàn diện kỹ năng nghe, nói, đọc, viết. Đồng thời, chương trình học xây dựng nền tảng kiến thức vững chắc, giúp học sinh tự tin tham gia các kỳ thi tuyển chọn vào lớp 6 (lớp chọn) của các trường công lập và trường chất lượng cao.",
        "Với phương pháp giảng dạy sinh động, trực quan, lớp học không chỉ tạo hứng thú học tập mà còn giúp học sinh tiếp thu kiến thức hiệu quả, nâng cao thành tích và đạt kết quả cao trong học tập.",
    ];

    return (
        <div>
            <div className="section-1 flex justify-center bg-[#ffebe7]">
                <div className="flex flex-1 flex-col md:py-[30px] py-[20px] gap-[20px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] px-[16px] md:px-[0px]">
                    <p className="xl:text-[40px] text-[30px] text-[#D14242] font-bold uppercase text-center">
                        Tiếng anh tiểu học
                    </p>

                    <div className="flex flex-col md:gap-[10px] gap-[5px]">
                        {features.map((content, index) => (
                            <FeatureItem key={index} content={content} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="section-2 flex justify-center bg-[#ffebe7]">
                <div className="flex flex-1 flex-col pt-[10px] pb-[20px] gap-[20px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] px-[16px] md:px-[0px]">
                    <p className="md:text-[25px] text-[20px] font-bold text-white text-center uppercase bg-[#65c900] p-[10px] rounded-full">
                        LỚP TIỂU HỌC TIÊU CHUẨN
                    </p>
                    <div className="flex md:flex-row flex-col xl:gap-[10px] md:gap-[20px] gap-[30px] bg-white p-[20px] rounded-[30px] border-[5px] border-[#65c900]">
                        <div className="flex flex-col xl:min-w-[400px] xl:max-w-[400px] md:min-w-[340px] md:max-w-[340px] gap-[10px]">
                            <p className="md:text-[25px] text-[20px] text-[#D14242] font-[700]">
                                Giáo trình
                            </p>

                            <p className="md:text-[18px] text-[16px] text-justify">
                                Được biên soạn bởi tác giả Thái Vân Anh, bám sát
                                chương trình tiểu học, giúp học sinh dễ hiểu, dễ
                                tiếp thu và áp dụng hiệu quả.
                            </p>

                            <div className="flex flex-col gap-[5px]">
                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Ok}
                                        alt="Ok"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px]">
                                        Kết hợp giữa kiến thức SGK và nội dung
                                        nâng cao phù hợp với năng lực học sinh.
                                    </p>
                                </div>
                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Ok}
                                        alt="Ok"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px]">
                                        Bài tập thực hành đa dạng, bám sát các
                                        dạng đề thi khảo sát đầu vào lớp 6 (lớp
                                        chọn).
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-[20px] justify-center">
                                <Image
                                    src={PrimarySchoolEnglishSection1Img2}
                                    alt="Bai tap tieng anh 4"
                                    className="xl:w-[150px] md:w-[150px] w-[min(calc((100vw-92px)/2),204px)] object-cover rounded-[10px]"
                                />
                                <Image
                                    src={PrimarySchoolEnglishSection1Img3}
                                    alt="Bai tap tieng anh 5"
                                    className="xl:w-[150px] md:w-[150px] w-[min(calc((100vw-92px)/2),204px)] object-cover rounded-[10px]"
                                />
                            </div>
                        </div>

                        <Image
                            src={PrimarySchoolEnglishSection1Img1}
                            alt="PrimarySchoolEnglishSection1Img1"
                            className="xl:block hidden min-w-[200px] object-contain"
                        />

                        <div className="flex flex-col xl:min-w-[400px] xl:max-w-[400px] md:min-w-[340px] md:max-w-[340px] gap-[10px]">
                            <p className="md:text-[25px] text-[20px] text-[#D14242] font-[700]">
                                Mục tiêu
                            </p>

                            <div className="flex flex-col gap-[5px]">
                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Target}
                                        alt="Target"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px] text-justify">
                                        Xây dựng nền tảng từ vựng & ngữ pháp
                                        vững chắc với tỷ lệ 70% kiến thức cơ bản
                                        – 30% nâng cao, giúp học sinh tự tin sử
                                        dụng tiếng Anh.
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Target}
                                        alt="Target"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px] text-justify">
                                        Phát triển toàn diện 4 kỹ năng: Nghe –
                                        Nói – Đọc – Viết, rèn phản xạ giao tiếp
                                        tự nhiên, giúp học sinh tự tin khi sử
                                        dụng tiếng Anh trong cuộc sống và học
                                        tập.
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Target}
                                        alt="Target"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px] text-justify">
                                        Chuẩn bị kiến thức vững vàng cho kỳ thi
                                        khảo sát đầu vào lớp 6 (lớp chọn) tại
                                        các trường công lập & trường chất lượng
                                        cao, thông qua hệ thống bài tập và đề
                                        thi thử đa dạng.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-3 flex justify-center bg-[#ffebe7]">
                <div className="flex flex-1 flex-col md:py-[30px] py-[20px] gap-[20px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] px-[16px] md:px-[0px]">
                    <p className="md:text-[25px] text-[20px] font-bold text-white text-center uppercase bg-[#65c900] p-[10px] rounded-full">
                        LỚP TIỂU HỌC CHẤT LƯỢNG CAO
                    </p>
                    <div className="flex md:flex-row flex-col xl:gap-[10px] md:gap-[20px] gap-[30px] bg-white p-[20px] rounded-[30px] border-[5px] border-[#65c900]">
                        <div className="flex flex-col xl:min-w-[400px] xl:max-w-[400px] md:min-w-[340px] md:max-w-[340px] gap-[10px]">
                            <p className="md:text-[25px] text-[20px] text-[#D14242] font-[700]">
                                Giáo trình
                            </p>

                            <p className="md:text-[18px] text-[16px] text-justify">
                                Được biên soạn bởi Thái Vân Anh, cập nhật cấu
                                trúc đề thi mới nhất từ các trường THCS
                                chuyên/chất lượng cao:
                            </p>

                            <div className="flex flex-col gap-[5px]">
                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Ok}
                                        alt="Ok"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px]">
                                        THCS chuyên Ngoại ngữ
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Ok}
                                        alt="Ok"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px]">
                                        THCS Cầu Giấy
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Ok}
                                        alt="Ok"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px]">
                                        THCS Thanh Xuân
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Ok}
                                        alt="Ok"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px]">
                                        THCS Nam Từ Liêm
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Ok}
                                        alt="Ok"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px]">
                                        THCS Nguyễn Tất Thành
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-[20px] justify-center">
                                <Image
                                    src={PrimarySchoolEnglishSection1Img5}
                                    alt="So tay ngu phap tieng anh"
                                    className="xl:w-[150px] md:w-[150px] w-[min(calc((100vw-92px)/2),204px)] object-cover rounded-[10px]"
                                />
                                <Image
                                    src={PrimarySchoolEnglishSection1Img6}
                                    alt="Bo de thi tieng anh vao lop 6"
                                    className="xl:w-[150px] md:w-[150px] w-[min(calc((100vw-92px)/2),204px)] object-cover rounded-[10px]"
                                />
                            </div>
                        </div>

                        <Image
                            src={PrimarySchoolEnglishSection1Img4}
                            alt="PrimarySchoolEnglishSection1Img4"
                            className="xl:block hidden min-w-[200px] object-contain"
                        />

                        <div className="flex flex-col xl:min-w-[400px] xl:max-w-[400px] md:min-w-[340px] md:max-w-[340px] gap-[10px]">
                            <p className="md:text-[25px] text-[20px] text-[#D14242] font-[700]">
                                Mục tiêu đột phá
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
                                            Kiến thức vững vàng:
                                        </span>
                                        Thành thạo từ vựng, ngữ pháp, dạng bài
                                        trọng tâm theo chuẩn đề thi.
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
                                            Kỹ năng làm bài xuất sắc:
                                        </span>
                                        Nắm chắc phương pháp phân tích đề, xử lý
                                        nhanh gọn, chính xác.
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
                                            Tư duy nhạy bén – Chiến lược tối ưu:{" "}
                                        </span>
                                        Rèn tư duy logic, quản lý thời gian hiệu
                                        quả, tránh bẫy đề thi.
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
                                            Tâm lý vững vàng – Sẵn sàng bứt phá:
                                        </span>
                                        Rèn luyện sự tự tin, làm chủ kỳ thi, đạt
                                        kết quả cao nhất có thể.
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
    content: string;
};

const FeatureItem = ({ content }: FeatureItemProps) => (
    <div className="flex gap-[15px]">
        <Image src={Star} alt="Star" className="w-[25px] h-[25px]" />
        <p className="md:text-[18px] text-[16px] font-[600] text-justify">
            {content}
        </p>
    </div>
);
