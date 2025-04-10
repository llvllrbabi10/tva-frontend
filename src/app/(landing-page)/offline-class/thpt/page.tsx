import Image from "next/image";

import {
    Star,
    Ok,
    Target,
    HighSchoolEnglishSection1Img1,
    HighSchoolEnglishSection1Img2,
    HighSchoolEnglishSection1Img3,
    HighSchoolEnglishSection1Img5,
    HighSchoolEnglishSection1Img6,
    HighSchoolEnglishSection1Img7,
    HighSchoolEnglishSection1Img8,
    HighSchoolEnglishSection1Img9,
} from "@images/assets";

function page() {
    return (
        <div>
            <div className="section-1 flex justify-center bg-[#ffebe7]">
                <div className="flex flex-1 flex-col md:py-[30px] py-[20px] gap-[20px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] px-[16px] md:px-[0px]">
                    <p className="xl:text-[40px] text-[30px] text-[#D14242] font-bold uppercase text-center">
                        TIẾNG ANH TRUNG HỌC PHỔ THÔNG
                    </p>

                    <div className="flex flex-col md:gap-[10px] gap-[5px]">
                        <div className="flex gap-[15px]">
                            <Image
                                src={Star}
                                alt="star"
                                className="w-[25px] h-[25px]"
                            />
                            <p className="md:text-[18px] text-[16px] text-justify">
                                <span className="font-[600]">
                                    Lớp Ôn Thi THPT QG:
                                </span>
                                Dành cho học sinh lớp 10 - 12, giúp hệ thống lại
                                kiến thức, củng cố ngữ pháp, từ vựng và kỹ năng
                                đọc hiểu. Lớp 12 tập trung ôn luyện chuyên sâu,
                                bám sát đề thi THPT Quốc gia & HSA, rèn luyện tư
                                duy làm bài và chiến lược tối ưu điểm số.
                            </p>
                        </div>
                        <div className="flex gap-[15px]">
                            <Image
                                src={Star}
                                alt="star"
                                className="w-[25px] h-[25px]"
                            />
                            <p className="md:text-[18px] text-[16px] text-justify">
                                <span className="font-[600]">Lớp IELTS:</span>
                                Lộ trình bài bản từ cơ bản đến nâng cao, giúp
                                học sinh làm quen cấu trúc đề thi, phát triển
                                toàn diện 4 kỹ năng. Các giai đoạn từ Pre-IELTS
                                đến 7+ được thiết kế phù hợp để từng bước nâng
                                band điểm, rèn luyện chuyên sâu và chinh phục
                                mục tiêu mong muốn.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-2 flex justify-center bg-[#ffebe7]">
                <div className="flex flex-1 flex-col pt-[10px] pb-[20px] gap-[20px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] px-[16px] md:px-[0px]">
                    <p className="md:text-[25px] text-[20px] font-bold text-white text-center uppercase bg-[#6500c9] p-[10px] rounded-full">
                        Lớp THCS tiêu chuẩn
                    </p>
                    <div className="flex md:flex-row flex-col xl:gap-[10px] md:gap-[20px] gap-[30px] bg-white p-[20px] rounded-[30px] border-[5px] border-[#6500c9]">
                        <div className="flex flex-col xl:min-w-[400px] xl:max-w-[400px] md:min-w-[340px] md:max-w-[340px] gap-[10px]">
                            <p className="md:text-[25px] text-[20px] text-[#D14242] font-[700]">
                                Đối tượng
                            </p>

                            <p className="md:text-[18px] text-[16px] text-justify">
                                Dành cho học sinh lớp 10 - 12 có mục tiêu đạt
                                điểm cao trong
                                <span className="font-[600]">
                                    kỳ thi THPT Quốc gia & kỳ thi Đánh giá năng
                                    lực HSA.
                                </span>
                            </p>
                        </div>

                        <Image
                            src={HighSchoolEnglishSection1Img1}
                            alt="HighSchoolEnglishSection1Img1"
                            className="xl:block hidden min-w-[200px] object-contain"
                        />

                        <div className="flex flex-col xl:min-w-[400px] xl:max-w-[400px] md:min-w-[340px] md:max-w-[340px] gap-[10px]">
                            <p className="md:text-[25px] text-[20px] text-[#D14242] font-[700]">
                                Lộ trình học tập của các khối lớp
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
                                            Lớp 10 & 11:
                                        </span>
                                        Hệ thống lại kiến thức nền tảng, củng cố
                                        ngữ pháp, từ vựng và kỹ năng đọc hiểu.
                                        Giúp học sinh nắm chắc kiến thức căn
                                        bản, làm quen với các dạng bài quan
                                        trọng trong đề thi.
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
                                            Lớp 12:
                                        </span>
                                        Tăng tốc ôn luyện chuyên sâu, bám sát
                                        cấu trúc đề thi THPT QG & HSA. Rèn luyện
                                        tư duy làm bài, luyện tập các chiến lược
                                        làm bài hiệu quả để tối ưu hóa thời gian
                                        và nâng cao điểm số.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-3 flex justify-center bg-[#ffebe7]">
                <div className="flex flex-1 flex-col md:pt-[30px] pt-[20px] md:pb-[30px] pb-[20px] gap-[20px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] px-[16px] md:px-[0px]">
                    <p className="md:text-[25px] text-[20px] font-bold text-white text-center uppercase bg-[#6500c9] p-[10px] rounded-full">
                        LỚP IELTS
                    </p>
                    <div className="flex xl:gap-[10px] md:gap-[20px] gap-[30px] bg-white p-[20px] rounded-[30px] border-[5px] border-[#6500c9]">
                        <div className="md:flex hidden flex-1 justify-center items-center min-h-[850px] relative">
                            <div className="absolute w-full h-full">
                                <div className="md:absolute flex flex-col xl:top-[0px] xl:right-[80px] md:top-[0px] md:right-[60px] gap-[5px] md:px-[10px] md:py-[3px] rounded-[10px] xl:bg-[#d8c5ee] xl:shadow-xl">
                                    <p className="text-[20px] font-bold text-center xl:bg-transparent bg-[#ffc130] rounded-[20px]">
                                        Chinh phục mục tiêu
                                        <br />
                                        (6.5 - 7.0+ IELTS)
                                    </p>

                                    <div className="flex flex-col">
                                        <div className="flex gap-[10px]">
                                            <Image
                                                src={Ok}
                                                alt="Ok"
                                                className="w-[25px] h-[25px] mr-[5px]"
                                            />
                                            <p className="xl:w-[200px] md:w-[250px] text-justify">
                                                Luyện chuyên sâu và giải đề nâng
                                                cao để đạt độ chính xác tối đa.
                                            </p>
                                        </div>
                                        <div className="flex gap-[10px]">
                                            <Image
                                                src={Ok}
                                                alt="Ok"
                                                className="w-[25px] h-[25px] mr-[5px]"
                                            />
                                            <p className="xl:w-[200px] md:w-[250px] text-justify">
                                                Hoàn thiện kỹ năng Writing &
                                                Speaking, sẵn sàng chinh phục
                                                band điểm mơ ước.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:absolute flex flex-col xl:top-[605px] xl:left-[585px] md:top-[285px] md:left-[60px] gap-[5px] md:px-[10px] md:py-[3px] rounded-[10px] xl:bg-[#d8c5ee] xl:shadow-xl">
                                    <p className="text-[20px] font-bold text-center px-[10px] py-[5px] xl:bg-transparent bg-[#ffb69e] rounded-[20px]">
                                        Bứt phá (5.0 - 5.5 IELTS)
                                    </p>

                                    <div className="flex flex-col">
                                        <div className="flex gap-[10px]">
                                            <Image
                                                src={Ok}
                                                alt="Ok"
                                                className="w-[25px] h-[25px] mr-[5px]"
                                            />
                                            <p className="xl:w-[200px] md:w-[235px] text-justify">
                                                Luyện chuyên sâu, giải đề để
                                                thành thạo Listening & Reading.
                                            </p>
                                        </div>
                                        <div className="flex gap-[10px]">
                                            <Image
                                                src={Ok}
                                                alt="Ok"
                                                className="w-[25px] h-[25px] mr-[5px]"
                                            />
                                            <p className="xl:w-[200px] md:w-[235px] text-justify">
                                                Nâng cao kỹ năng Writing &
                                                Speaking và luyện đề nâng cao.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:absolute flex flex-col xl:top-[100px] xl:right-[352px] md:top-[510px] md:right-[36px] gap-[5px] md:px-[10px] md:py-[3px] rounded-[10px] xl:bg-[#d8c5ee] xl:shadow-xl">
                                    <p className="text-[20px] font-bold text-center px-[10px] py-[5px] xl:bg-transparent bg-[#ffb69e] rounded-[20px]">
                                        Tăng tốc (4.0 - 4.5 IELTS)
                                    </p>

                                    <div className="flex flex-col">
                                        <div className="flex gap-[10px]">
                                            <Image
                                                src={Ok}
                                                alt="Ok"
                                                className="w-[25px] h-[25px] mr-[5px]"
                                            />
                                            <p className="xl:w-[210px] md:w-[275px] text-justify">
                                                Làm quen với các dạng bài trong
                                                Listening, Reading, Writing.
                                            </p>
                                        </div>
                                        <div className="flex gap-[10px]">
                                            <Image
                                                src={Ok}
                                                alt="Ok"
                                                className="w-[25px] h-[25px] mr-[5px]"
                                            />
                                            <p className="xl:w-[210px] md:w-[275px] text-justify">
                                                Cải thiện phát âm, biết cách
                                                triển khai bài Speaking, luyện
                                                đề song song.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:absolute flex flex-col xl:top-[688px] xl:left-[315px] md:top-[735px] md:left-[60px] md:px-[10px] md:py-[3px] gap-[5px] rounded-[10px] xl:bg-[#d8c5ee] xl:shadow-xl">
                                    <p className="text-[20px] font-bold text-center px-[10px] py-[5px] xl:bg-transparent bg-[#f799d3] rounded-[20px]">
                                        Lấy đà (3.0 - 3.5 IELTS)
                                    </p>

                                    <div className="flex flex-col">
                                        <div className="flex gap-[10px]">
                                            <Image
                                                src={Ok}
                                                alt="Ok"
                                                className="w-[25px] h-[25px] mr-[5px]"
                                            />
                                            <p className="xl:w-[180px] md:w-[235px] text-justify">
                                                Xây dựng nền tảng vững chắc với
                                                ngữ pháp và từ vựng cơ bản.
                                            </p>
                                        </div>
                                        <div className="flex gap-[10px]">
                                            <Image
                                                src={Ok}
                                                alt="Ok"
                                                className="w-[25px] h-[25px] mr-[5px]"
                                            />
                                            <p className="xl:w-[180px] md:w-[235px] text-justify">
                                                Bắt đầu rèn luyện cả 4 kỹ năng.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:absolute flex flex-col xl:top-[190px] xl:left-[133px] top-[950px] left-[345px] md:px-[10px] md:py-[3px] gap-[5px] rounded-[10px] xl:bg-[#d8c5ee] xl:shadow-xl">
                                    <p className="text-[20px] font-bold text-center px-[10px] py-[5px] xl:bg-transparent bg-[#ba9df2] rounded-[20px]">
                                        PRE-IELTS
                                    </p>

                                    <div className="flex flex-col">
                                        <div className="flex gap-[10px]">
                                            <Image
                                                src={Ok}
                                                alt="Ok"
                                                className="w-[25px] h-[25px] mr-[5px]"
                                            />
                                            <p className="xl:w-[200px] md:w-[275px] text-justify">
                                                Làm quen cấu trúc & dạng bài thi
                                                IELTS.
                                            </p>
                                        </div>
                                        <div className="flex gap-[10px]">
                                            <Image
                                                src={Ok}
                                                alt="Ok"
                                                className="w-[25px] h-[25px] mr-[5px]"
                                            />
                                            <p className="xl:w-[200px] md:w-[275px] text-justify">
                                                Tiền đề vững vàng trước khi bước
                                                vào giai đoạn luyện thi IELTS
                                                chuyên sâu.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full h-full justify-center items-center">
                                <Image
                                    src={HighSchoolEnglishSection1Img2}
                                    alt="HighSchoolEnglishSection1Img2"
                                    className="xl:flex hidden object-contain w-full mt-[25px]"
                                />
                                <Image
                                    src={HighSchoolEnglishSection1Img3}
                                    alt="HighSchoolEnglishSection1Img3"
                                    className="xl:hidden md:flex hidden object-contain"
                                />
                            </div>
                        </div>

                        <div className="flex md:hidden flex-col gap-[20px]">
                            <div className="flex gap-[10px] relative">
                                <div className="relative flex flex-col min-w-[80px] items-center">
                                    <Image
                                        src={HighSchoolEnglishSection1Img5}
                                        alt="HighSchoolEnglishSection1Img5"
                                        className="w-[80px] h-[80px] absolute z-10"
                                    />
                                </div>

                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[20px] text-[#00948f] font-bold">
                                        Chinh phục mục tiêu
                                        <br />
                                        (6.5 - 7.0+ IELTS)
                                    </p>
                                    <div className="flex gap-[10px]">
                                        <Image
                                            src={Ok}
                                            alt="Ok"
                                            className="w-[25px] h-[25px] mr-[5px]"
                                        />
                                        <p className="xl:w-[200px] md:w-[250px] text-justify">
                                            Luyện chuyên sâu và giải đề nâng cao
                                            để đạt độ chính xác tối đa.
                                        </p>
                                    </div>
                                    <div className="flex gap-[10px]">
                                        <Image
                                            src={Ok}
                                            alt="Ok"
                                            className="w-[25px] h-[25px] mr-[5px]"
                                        />
                                        <p className="xl:w-[200px] md:w-[250px] text-justify">
                                            Hoàn thiện kỹ năng Writing &
                                            Speaking, sẵn sàng chinh phục band
                                            điểm mơ ước.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-[10px] relative">
                                <div className="relative flex flex-col min-w-[80px] items-center">
                                    <Image
                                        src={HighSchoolEnglishSection1Img6}
                                        alt="HighSchoolEnglishSection1Img6"
                                        className="w-[80px] h-[80px] absolute z-10"
                                    />
                                </div>

                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[20px] text-[#c76984] font-bold">
                                        Bứt phá
                                        <br />
                                        (5.0 - 5.5 IELTS)
                                    </p>
                                    <div className="flex gap-[10px]">
                                        <Image
                                            src={Ok}
                                            alt="Ok"
                                            className="w-[25px] h-[25px] mr-[5px]"
                                        />
                                        <p className="xl:w-[200px] md:w-[255px] text-justify">
                                            Luyện chuyên sâu, giải đề để thành
                                            thạo Listening & Reading.
                                        </p>
                                    </div>
                                    <div className="flex gap-[10px]">
                                        <Image
                                            src={Ok}
                                            alt="Ok"
                                            className="w-[25px] h-[25px] mr-[5px]"
                                        />
                                        <p className="xl:w-[200px] md:w-[255px] text-justify">
                                            Nâng cao kỹ năng Writing & Speaking
                                            và luyện đề nâng cao.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-[10px] relative">
                                <div className="relative flex flex-col min-w-[80px] items-center">
                                    <Image
                                        src={HighSchoolEnglishSection1Img7}
                                        alt="HighSchoolEnglishSection1Img7"
                                        className="w-[80px] h-[80px] absolute z-10"
                                    />
                                </div>

                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[20px] text-[#9fb8bf] font-bold">
                                        Tăng tốc
                                        <br />
                                        (4.0 - 4.5 IELTS)
                                    </p>
                                    <div className="flex gap-[10px]">
                                        <Image
                                            src={Ok}
                                            alt="Ok"
                                            className="w-[25px] h-[25px] mr-[5px]"
                                        />
                                        <p className="xl:w-[200px] md:w-[255px] text-justify">
                                            Làm quen với các dạng bài trong
                                            Listening, Reading, Writing.
                                        </p>
                                    </div>
                                    <div className="flex gap-[10px]">
                                        <Image
                                            src={Ok}
                                            alt="Ok"
                                            className="w-[25px] h-[25px] mr-[5px]"
                                        />
                                        <p className="xl:w-[200px] md:w-[255px] text-justify">
                                            Cải thiện phát âm, biết cách triển
                                            khai bài Speaking, luyện đề song
                                            song.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-[10px] relative">
                                <div className="relative flex flex-col min-w-[80px] items-center">
                                    <Image
                                        src={HighSchoolEnglishSection1Img8}
                                        alt="HighSchoolEnglishSection1Img8"
                                        className="w-[80px] h-[80px] absolute z-10"
                                    />
                                </div>

                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[20px] text-[#ff8f4a] font-bold">
                                        Lấy đà
                                        <br />
                                        (3.0 - 3.5 IELTS)
                                    </p>
                                    <div className="flex gap-[10px]">
                                        <Image
                                            src={Ok}
                                            alt="Ok"
                                            className="w-[25px] h-[25px] mr-[5px]"
                                        />
                                        <p className="xl:w-[200px] md:w-[255px] text-justify">
                                            Xây dựng nền tảng vững chắc với ngữ
                                            pháp và từ vựng cơ bản.
                                        </p>
                                    </div>
                                    <div className="flex gap-[10px]">
                                        <Image
                                            src={Ok}
                                            alt="Ok"
                                            className="w-[25px] h-[25px] mr-[5px]"
                                        />
                                        <p className="xl:w-[200px] md:w-[255px] text-justify">
                                            Bắt đầu rèn luyện cả 4 kỹ năng.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-[10px] relative">
                                <div className="relative flex flex-col min-w-[80px] items-center">
                                    <Image
                                        src={HighSchoolEnglishSection1Img9}
                                        alt="HighSchoolEnglishSection1Img9"
                                        className="w-[80px] h-[80px] absolute z-10"
                                    />
                                </div>

                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[20px] text-[#ffcc54] font-bold">
                                        PRE-IELTS
                                    </p>
                                    <div className="flex gap-[10px]">
                                        <Image
                                            src={Ok}
                                            alt="Ok"
                                            className="w-[25px] h-[25px] mr-[5px]"
                                        />
                                        <p className="xl:w-[200px] md:w-[255px] text-justify">
                                            Làm quen cấu trúc & dạng bài thi
                                            IELTS.
                                        </p>
                                    </div>
                                    <div className="flex gap-[10px]">
                                        <Image
                                            src={Ok}
                                            alt="Ok"
                                            className="w-[25px] h-[25px] mr-[5px]"
                                        />
                                        <p className="xl:w-[200px] md:w-[255px] text-justify">
                                            Tiền đề vững vàng trước khi bước vào
                                            giai đoạn luyện thi IELTS chuyên
                                            sâu.
                                        </p>
                                    </div>
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
