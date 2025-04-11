import Image from "next/image";
import Link from "next/link";

import styles from "./home.module.css";
import {
    Ok,
    HomeSection1Img1,
    HomeSection1Img2,
    HomeSection1Img3,
    HomeSection1Img4,
    HomeSection2Img1,
    HomeSection2Img2,
    HomeSection2Img3,
    HomeSection2Img4,
    HomeSection3Img1,
    HomeSection3Img2,
    HomeSection3Img3,
    HomeSection3Img4,
    HomeSection3Img5,
    HomeSection3Img6,
    Certificate,
    HomeSection4Img1,
    HomeSection6Img1,
    HomeSection6Img2,
    HomeSection6Img3,
} from "@images/assets/index";

function Page() {
    const HomeSection1Imgs = [
        HomeSection1Img1,
        HomeSection1Img2,
        HomeSection1Img3,
        HomeSection1Img4,
    ];

    const HomeSection1Content = [
        "Luyện thi vào lớp 6 (lớp chọn, trường chất lượng cao)",
        "Luyện thi chuyển cấp vào lớp 10, thi THPTQG",
        "Chuyên đào tạo IELTS, VSTEP chuẩn quốc tế",
        "Đội ngũ giáo viên giỏi, tận tâm",
    ];

    const HomeSection3Teachers = [
        {
            image: HomeSection3Img1,
            name: "Cô Thái Vân Anh",
            credentials: [
                "Thạc sĩ Ngôn Ngữ Anh",
                "Tác giả nhiều đầu sách Tiếng Anh",
                "Chứng chỉ nghiệp vụ sư phạm",
                "Chứng chỉ TESOL",
            ],
        },
        {
            image: HomeSection3Img2,
            name: "Cô Trần Lâm Hải",
            credentials: [
                "Cử nhân Ngôn ngữ Anh",
                "Chứng chỉ nghiệp vụ sư phạm",
                "Chứng chỉ TESOL",
            ],
        },
        {
            image: HomeSection3Img3,
            name: "Cô Lê Hải Yến",
            credentials: [
                "Thạc sĩ Ngôn ngữ học ứng dụng",
                "Chứng chỉ nghiệp vụ sư phạm",
                "Chứng chỉ TESOL",
            ],
        },
        {
            image: HomeSection3Img4,
            name: "Cô Đặng Thuỳ Dương",
            credentials: [
                "Thạc sĩ Ngôn ngữ Anh",
                "Chứng chỉ nghiệp vụ sư phạm",
                "Chứng chỉ TESOL",
            ],
        },
        {
            image: HomeSection3Img5,
            name: "Cô Nguyễn Mai Linh",
            credentials: [
                "Cử nhân Sư phạm Tiếng Anh",
                "Chứng chỉ nghiệp vụ sư phạm",
                "Chứng chỉ TESOL",
            ],
        },
        {
            image: HomeSection3Img6,
            name: "Cô Trần Thuỳ Dương",
            credentials: [
                "Thạc sĩ Giảng dạy Tiếng Anh",
                "Chứng chỉ nghiệp vụ sư phạm",
                "Chứng chỉ TESOL",
            ],
        },
        {
            image: HomeSection3Img1,
            name: "Cô Thái Vân Anh",
            credentials: [
                "Thạc sĩ Ngôn Ngữ Anh",
                "Tác giả nhiều đầu sách Tiếng Anh",
                "Chứng chỉ nghiệp vụ sư phạm",
                "Chứng chỉ TESOL",
            ],
        },
        {
            image: HomeSection3Img2,
            name: "Cô Trần Lâm Hải",
            credentials: [
                "Cử nhân Ngôn ngữ Anh",
                "Chứng chỉ nghiệp vụ sư phạm",
                "Chứng chỉ TESOL",
            ],
        },
        {
            image: HomeSection3Img3,
            name: "Cô Lê Hải Yến",
            credentials: [
                "Thạc sĩ Ngôn ngữ học ứng dụng",
                "Chứng chỉ nghiệp vụ sư phạm",
                "Chứng chỉ TESOL",
            ],
        },
        {
            image: HomeSection3Img4,
            name: "Cô Đặng Thuỳ Dương",
            credentials: [
                "Thạc sĩ Ngôn ngữ Anh",
                "Chứng chỉ nghiệp vụ sư phạm",
                "Chứng chỉ TESOL",
            ],
        },
        {
            image: HomeSection3Img5,
            name: "Cô Nguyễn Mai Linh",
            credentials: [
                "Cử nhân Sư phạm Tiếng Anh",
                "Chứng chỉ nghiệp vụ sư phạm",
                "Chứng chỉ TESOL",
            ],
        },
        {
            image: HomeSection3Img6,
            name: "Cô Trần Thuỳ Dương",
            credentials: [
                "Thạc sĩ Giảng dạy Tiếng Anh",
                "Chứng chỉ nghiệp vụ sư phạm",
                "Chứng chỉ TESOL",
            ],
        },
    ];

    const HomeSection6Imgs = [
        HomeSection6Img1,
        HomeSection6Img2,
        HomeSection6Img3,
        HomeSection6Img1,
        HomeSection6Img2,
        HomeSection6Img3,
    ];

    return (
        <div>
            <div className="section-1 flex justify-center bg-[#ffebe7]">
                <div className="flex flex-1 md:py-[30px] py-[20px] gap-[20px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] px-[16px] md:px-[0px]">
                    <div className="flex flex-col flex-1">
                        <div className="flex flex-col">
                            <p className="xl:text-[40px] text-[30px] text-[#D14242] font-bold uppercase text-center md:text-left">
                                TVA Education
                            </p>
                            <p className="xl:text-[30px] text-[20px] font-bold uppercase text-center md:text-left">
                                Tiếng Anh cô Thái Vân Anh
                            </p>
                        </div>
                        <div className="flex flex-col gap-[10px] mt-[20px]">
                            {HomeSection1Content.map((content, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex gap-[15px]"
                                    >
                                        <Image
                                            src={Ok}
                                            alt="ok.png"
                                            className="w-[25px] h-[25px]"
                                        />
                                        <p className="xl:text-[20px] md:text-[16px] text-justify">
                                            {content}
                                        </p>
                                    </div>
                                );
                            })}

                            <div className="flex gap-[15px]">
                                <Image
                                    src={Ok}
                                    alt="ok.png"
                                    className="w-[25px] h-[25px]"
                                />
                                <p className="xl:text-[20px] md:text-[16px] text-justify">
                                    Giáo trình chuẩn được
                                    <b> tác giả Thái Vân Anh </b>
                                    biên soạn và xuất bản
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex hidden flex-1 flex-wrap xl:gap-[30px] md:gap-[15px] justify-center h-fit">
                        {HomeSection1Imgs.map((img, index) => {
                            return (
                                <Image
                                    key={index}
                                    src={img}
                                    alt={`home-section-1-img-${index + 1}`}
                                    className="xl:w-[250px] xl:h-[200px] md:w-[175px] md:h-[140px] object-cover rounded-[20px]"
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="section-2 flex flex-col justify-center items-center bg-[#ffffff] md:py-[30px] py-[20px] md:gap-[30px] gap-[20px]">
                <div className="md:flex hidden xl:text-[30px] text-[20px] font-bold text-[#D14242] uppercase text-center">
                    Chương trình học tại TVA Education
                </div>
                <div className="md:hidden flex xl:text-[30px] text-[20px] font-bold text-[#D14242] uppercase text-center">
                    Chương trình học tại <br />
                    TVA Education
                </div>
                <div className="flex flex-1 flex-wrap xl:w-[1080px] md:w-[750px] w-full xl:gap-[35px] md:gap-[30px] gap-[30px] justify-center">
                    <div className="flex flex-col gap-[20px] md:w-[230px] w-[calc(100vw-32px)] max-w-[500px]">
                        <div className="flex items-center justify-center">
                            <Image
                                src={HomeSection2Img1}
                                alt="HomeSection2Img1"
                                className="w-[100px]"
                            />
                        </div>
                        <Link
                            href={"/offline-class/mam-non"}
                            className="flex xl:text-[20px] text-[18px] text-white font-bold justify-center items-center bg-[#FF5159] h-[50px] rounded-full px-[20px] hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            MẦM NON
                        </Link>
                        <div className="flex justify-center items-center border border-[#FF5159] h-[40px] rounded-full px-[10px] font-[600]">
                            LỚP 4 TUỔI
                        </div>
                        <div className="flex justify-center items-center border border-[#FF5159] h-[40px] rounded-full px-[10px] font-[600]">
                            LỚP 5 TUỔI
                        </div>
                    </div>
                    <div className="block md:hidden h-[4px] w-[calc(100vw-100px)] shadow-sm"></div>

                    <div className="flex flex-col gap-[20px] md:w-[230px] w-[calc(100vw-32px)] max-w-[500px]">
                        <div className="flex items-center justify-center">
                            <Image
                                src={HomeSection2Img2}
                                alt="HomeSection2Img2"
                                className="w-[100px]"
                            />
                        </div>
                        <Link
                            href={"/offline-class/tieu-hoc"}
                            className="flex xl:text-[20px] text-[18px] text-white font-bold justify-center items-center bg-[#65c900] h-[50px] rounded-full px-[20px] hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            TIỂU HỌC
                        </Link>
                        <div className="flex justify-center items-center border border-[#65c900] h-[40px] rounded-full px-[10px] font-[600]">
                            LỚP TIỂU HỌC CƠ BẢN
                        </div>
                        <div className="flex justify-center items-center border border-[#65c900] h-[40px] rounded-full px-[10px] font-[600]">
                            LỚP ÔN THI VÀO 6 CLC
                        </div>
                        <div className="flex justify-center items-center border border-[#65c900] h-[40px] rounded-full px-[10px] font-[600]">
                            KHOÁ ONLINE TIỂU HỌC
                        </div>
                    </div>
                    <div className="block md:hidden h-[4px] w-[calc(100vw-100px)] shadow-sm"></div>

                    <div className="flex flex-col gap-[20px] md:w-[230px] w-[calc(100vw-32px)] max-w-[500px]">
                        <div className="flex items-center justify-center">
                            <Image
                                src={HomeSection2Img3}
                                alt="HomeSection2Img3"
                                className="w-[100px]"
                            />
                        </div>
                        <Link
                            href={"/offline-class/thcs"}
                            className="flex xl:text-[20px] text-[18px] text-white font-bold justify-center items-center bg-[#00c9c9] h-[50px] rounded-full px-[20px] hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            TRUNG HỌC CƠ SỞ
                        </Link>
                        <div className="flex justify-center items-center border border-[#00c9c9] h-[40px] rounded-full px-[10px] font-[600]">
                            LỚP THCS CƠ BẢN
                        </div>
                        <div className="flex justify-center items-center border border-[#00c9c9] h-[40px] rounded-full px-[10px] font-[600]">
                            LỚP ÔN THI VÀO 10
                        </div>
                        <div className="flex justify-center items-center border border-[#00c9c9] h-[40px] rounded-full px-[10px] font-[600]">
                            LỚP PRE-IELTS
                        </div>
                        <div className="flex justify-center items-center border border-[#00c9c9] h-[40px] rounded-full px-[10px] font-[600]">
                            KHOÁ ONLINE THCS
                        </div>
                    </div>
                    <div className="block md:hidden h-[4px] w-[calc(100vw-100px)] shadow-sm"></div>

                    <div className="flex flex-col gap-[20px] md:w-[284px] w-[calc(100vw-32px)] max-w-[500px]">
                        <div className="flex items-center justify-center">
                            <Image
                                src={HomeSection2Img4}
                                alt="HomeSection2Img4"
                                className="w-[125px]"
                            />
                        </div>
                        <Link
                            href={"/offline-class/thpt"}
                            className="flex xl:text-[20px] text-[18px] text-white font-bold justify-center items-center bg-[#6500c9] h-[50px] rounded-full px-[20px] hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            TRUNG HỌC PHỔ THÔNG
                        </Link>
                        <div className="flex justify-center items-center border border-[#6500c9] h-[40px] rounded-full px-[10px] font-[600]">
                            LỚP ÔN THI THPT QG
                        </div>
                        <div className="flex justify-center items-center border border-[#6500c9] h-[40px] rounded-full px-[10px] font-[600]">
                            LỚP IELTS
                        </div>
                        <div className="flex justify-center items-center border border-[#6500c9] h-[40px] rounded-full px-[10px] font-[600]">
                            KHÓA ONLINE THPT
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-3 flex justify-center bg-[#ffebe7] relative">
                <div className="flex flex-col xl:max-w-[1080px] md:max-w-[750px] max-w-[100vw] items-center md:py-[30px] py-[20px] gap-[30px] overflow-hidden relative">
                    <div className="xl:text-[30px] text-[20px] font-bold text-[#D14242] uppercase">
                        Đội Ngũ Giáo Viên
                    </div>
                    <div className={`flex w-[2160px] ${styles.animateSlide}`}>
                        {HomeSection3Teachers.map((teacher, index) => (
                            <div
                                key={index}
                                className="flex flex-col min-w-[340px] mx-[10px] bg-white rounded-[20px]"
                            >
                                <Image
                                    src={teacher.image}
                                    alt={teacher.name}
                                    className="object-contain rounded-t-[20px]"
                                />
                                <div className="flex flex-col p-[10px] gap-[5px]">
                                    <div className="xl:text-[20px] text-[18px] font-bold">
                                        {teacher.name}
                                    </div>
                                    {teacher.credentials.map(
                                        (cred, credIndex) => (
                                            <div
                                                key={credIndex}
                                                className="flex gap-[10px] items-center"
                                            >
                                                <Image
                                                    src={Certificate}
                                                    alt="certificate"
                                                    className="w-[20px] h-[20px]" // Thêm h-[20px] để đồng bộ
                                                />
                                                <div>{cred}</div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="section-4 flex flex-col items-center justify-center">
                <div className="flex flex-1 flex-col xl:flex-row xl:w-[1080px] md:w-[750px] max-w-[500px] md:max-w-fit justify-between gap-[20px] md:py-[30px] py-[20px] md:px-[0px] px-[16px] items-center">
                    <div className="flex flex-col xl:gap-[50px] md:gap-[30px] gap-[20px]">
                        <p className="xl:text-[30px] text-[20px] font-bold text-[#D14242] xl:text-left text-center">
                            KHÁC BIỆT TẠO NÊN GIÁ TRỊ
                        </p>

                        <div className="flex flex-col xl:gap-[20px] gap-[10px]">
                            <div className="flex gap-[20px] items-center">
                                <div className="min-w-[40px] h-[10px] bg-[#F28076] rounded-full"></div>
                                <div className="xl:text-[30px] text-[25px] font-bold">
                                    40%
                                </div>
                                <div className="xl:text-[18px] text-[16px]">
                                    Học sinh được học tập theo lộ trình chuẩn
                                    của <b>tác giả THÁI VÂN ANH</b> , lộ trình
                                    học tập rõ ràng, xuyên suốt, đều đặn và hiệu
                                    quả.
                                </div>
                            </div>
                            <div className="flex gap-[20px] items-center">
                                <div className="min-w-[40px] h-[10px] bg-[#FFB6AF] rounded-full"></div>
                                <div className="xl:text-[30px] text-[25px] font-bold">
                                    15%
                                </div>
                                <div className="xl:text-[18px] text-[16px]">
                                    Hệ thống website giám sát và báo cáo vô cùng
                                    khắt khe, nghiêm khắc.
                                </div>
                            </div>
                            <div className="flex gap-[20px] items-center">
                                <div className="min-w-[40px] h-[10px] bg-[#FAE0C7] rounded-full"></div>
                                <div className="xl:text-[30px] text-[25px] font-bold">
                                    15%
                                </div>
                                <div className="xl:text-[18px] text-[16px]">
                                    Hỗ trợ, kèm cặp, đôn đốc hàng ngày đối với
                                    học sinh yếu.
                                </div>
                            </div>
                            <div className="flex gap-[20px] items-center">
                                <div className="min-w-[40px] h-[10px] bg-[#FBC193] rounded-full"></div>
                                <div className="xl:text-[30px] text-[25px] font-bold">
                                    15%
                                </div>
                                <div className="xl:text-[18px] text-[16px]">
                                    Học sinh được kèm cặp sát sao bởi giáo viên
                                    phụ trách.
                                </div>
                            </div>
                            <div className="flex gap-[20px] items-center">
                                <div className="min-w-[40px] h-[10px] bg-[#4EB09B] rounded-full"></div>
                                <div className="xl:text-[30px] text-[25px] font-bold">
                                    15%
                                </div>
                                <div className="xl:text-[18px] text-[16px]">
                                    Hệ thống xây dựng sự tự chủ cho người học.
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image
                        src={HomeSection4Img1}
                        alt="HomeSection4Img1"
                        className="w-[500px]"
                    />
                </div>
            </div>

            <div className="section-5 flex flex-col items-center justify-center bg-[#ffebe7]">
                <div className="flex flex-1 xl:w-[1080px] md:w-[750px] md:max-w-fit max-w-[500px] justify-center gap-[4px] md:py-[30px] py-[20px] md:px-[0px] px-[16px]">
                    <p className="md:text-[25px] text-[20px] text-center font-[600] text-[#D14242]">
                        <span className="md:text-[30px] text-[25px] font-bold text-[#000000]">
                            11
                        </span>
                        năm tận tâm đồng hành,
                        <span className="md:text-[30px] text-[25px] font-bold text-[#000000]">
                            2.000+
                        </span>
                        học sinh vững vàng chinh phục Tiếng Anh và tỏa sáng
                        trong các kỳ thi vào lớp 6, lớp 10, THPT Quốc gia và
                        chứng chỉ IELTS!
                    </p>
                </div>
            </div>

            <div className="section-6 flex flex-col items-center justify-center bg-[#ffebe7]">
                <div className="flex flex-1 xl:w-[1080px] md:w-[750px] md:max-h-[500px] max-h-[400px] md:px-[0px] px-[16px] overflow-hidden relative">
                    <div
                        className={`${styles.animateSlideVertical} flex flex-col xl:h-[3270px] md:h-[2280px] h-[calc((100vw-22px)*3)] w-full items-end  opacity-100`}
                    >
                        {HomeSection6Imgs.map((src, index) => (
                            <Image
                                key={index}
                                src={src}
                                alt={`home-section-6-img-${index + 1}`}
                                className="xl:w-[1080px] md:w-[750px] w-[calc(100vw-32px)] my-[5px]"
                            />
                        ))}
                    </div>
                    <div
                        className={`${styles.customGradient} absolute h-[50%] w-full `}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default Page;
