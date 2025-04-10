import Image from "next/image";

import {
    Star,
    Ok,
    Target,
    SecondarySchoolEnglishSection1Img1,
    SecondarySchoolEnglishSection1Img2,
    SecondarySchoolEnglishSection1Img3,
    SecondarySchoolEnglishSection1Img4,
    SecondarySchoolEnglishSection1Img5,
    SecondarySchoolEnglishSection1Img6,
    SecondarySchoolEnglishSection1Img7,
    SecondarySchoolEnglishSection1Img8,
    SecondarySchoolEnglishSection1Img9,
} from "@images/assets/index";

function page() {
    return (
        <div>
            <div className="section-1 flex justify-center bg-[#ffebe7]">
                <div className="flex flex-1 flex-col md:py-[30px] py-[20px] gap-[20px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] px-[16px] md:px-[0px]">
                    <p className="xl:text-[40px] text-[30px] text-[#D14242] font-bold uppercase text-center">
                        Tiếng anh trung học cơ sở
                    </p>

                    <div className="flex flex-col md:gap-[10px] gap-[5px]">
                        <div className="flex gap-[15px]">
                            <Image
                                src={Star}
                                alt="star"
                                className="w-[25px] h-[25px]"
                            />
                            <p className="md:text-[18px] text-[16px] font-[600] text-justify">
                                Lớp Tiếng Anh dành cho học sinh trung học cơ sở
                                được thiết kế giúp các em củng cố và nâng cao
                                kiến thức ngữ pháp, từ vựng, phát triển toàn
                                diện kỹ năng nghe, nói, đọc, viết. Đồng thời,
                                chương trình học xây dựng nền tảng vững chắc,
                                giúp học sinh tự tin đạt điểm cao trong các kỳ
                                thi trên lớp và các kỳ thi quan trọng như tuyển
                                sinh vào lớp 10.
                            </p>
                        </div>
                        <div className="flex gap-[15px]">
                            <Image
                                src={Star}
                                alt="star"
                                className="w-[25px] h-[25px]"
                            />
                            <p className="md:text-[18px] text-[16px] font-[600] text-justify">
                                Với phương pháp giảng dạy sinh động, trực quan,
                                lớp học không chỉ tạo hứng thú học tập mà còn
                                giúp học sinh tiếp thu kiến thức hiệu quả, nâng
                                cao thành tích và đạt kết quả tốt trong học tập.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-2 flex justify-center bg-[#ffebe7]">
                <div className="flex flex-1 flex-col pt-[10px] pb-[20px] gap-[20px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] px-[16px] md:px-[0px]">
                    <p className="md:text-[25px] text-[20px] font-bold text-white text-center uppercase bg-[#00c9c9] p-[10px] rounded-full">
                        Lớp THCS tiêu chuẩn
                    </p>
                    <div className="flex md:flex-row flex-col xl:gap-[10px] md:gap-[20px] gap-[30px] bg-white p-[20px] rounded-[30px] border-[5px] border-[#00c9c9]">
                        <div className="flex flex-col xl:min-w-[400px] xl:max-w-[400px] md:min-w-[340px] md:max-w-[340px] gap-[10px]">
                            <p className="md:text-[25px] text-[20px] text-[#D14242] font-[700]">
                                Giáo trình
                            </p>

                            <p className="md:text-[18px] text-[16px] text-justify">
                                Giáo trình được biên soạn bởi cô Thái Vân Anh,
                                bám sát nội dung chương trình Tiếng Anh bậc
                                trung học cơ sở, đảm bảo:
                            </p>

                            <div className="flex flex-col gap-[5px]">
                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Ok}
                                        alt="Ok"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px]">
                                        Kết hợp giữa kiến thức trong SGK và nội
                                        dung nâng cao, phù hợp với năng lực học
                                        sinh.
                                    </p>
                                </div>
                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Ok}
                                        alt="Ok"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px]">
                                        Bài tập thực hành đa dạng, giúp học sinh
                                        nắm vững ngữ pháp và mở rộng vốn từ
                                        vựng.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-[20px] justify-center">
                                <Image
                                    src={SecondarySchoolEnglishSection1Img2}
                                    alt="Bai tap tieng anh 6"
                                    className="xl:w-[150px] md:w-[150px] w-[min(calc((100vw-92px)/2),204px)] object-cover"
                                />
                                <Image
                                    src={SecondarySchoolEnglishSection1Img3}
                                    alt="Bai tap tieng anh 8"
                                    className="xl:w-[150px] md:w-[150px] w-[min(calc((100vw-92px)/2),204px)] object-cover"
                                />
                            </div>
                        </div>

                        <Image
                            src={SecondarySchoolEnglishSection1Img1}
                            alt="SecondarySchoolEnglishSection1Img1"
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
                                        vững chắc với tỷ lệ 50% kiến thức cơ bản
                                        – 50% nâng cao, giúp học sinh tự tin sử
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
                                        tự nhiên, giúp học sinh sử dụng tiếng
                                        Anh hiệu quả trong học tập và cuộc sống.
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Target}
                                        alt="Target"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px] text-justify">
                                        Củng cố kiến thức để đạt điểm 9+ trong
                                        các bài kiểm tra và kỳ thi trên lớp.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-3 flex justify-center bg-[#ffebe7]">
                <div className="flex flex-1 flex-col md:py-[30px] py-[20px] gap-[20px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] px-[16px] md:px-[0px]">
                    <p className="md:text-[25px] text-[20px] font-bold text-white text-center uppercase bg-[#00c9c9] p-[10px] rounded-full">
                        LỚP ÔN THI VÀO 10
                    </p>
                    <div className="flex md:flex-row flex-col xl:gap-[10px] md:gap-[20px] gap-[30px] bg-white p-[20px] rounded-[30px] border-[5px] border-[#00c9c9]">
                        <div className="flex flex-col xl:min-w-[400px] xl:max-w-[400px] md:min-w-[340px] md:max-w-[340px] gap-[10px]">
                            <p className="md:text-[25px] text-[20px] text-[#D14242] font-[700]">
                                Giáo trình
                            </p>

                            <p className="md:text-[18px] text-[16px] text-justify">
                                Được biên soạn bám sát cấu trúc đề thi vào lớp
                                10 của các trường THPT công lập và chuyên, cập
                                nhật theo xu hướng ra đề mới nhất.
                            </p>

                            <div className="flex flex-col gap-[5px]">
                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Ok}
                                        alt="Ok"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px]">
                                        Tổng hợp đầy đủ kiến thức trọng tâm từ
                                        lớp 6 đến lớp 9.
                                    </p>
                                </div>
                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Ok}
                                        alt="Ok"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px]">
                                        Rèn luyện các dạng bài tập và đề thi
                                        thực tế giúp học sinh làm quen với đề
                                        thi chuẩn.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-[20px] justify-center">
                                <Image
                                    src={SecondarySchoolEnglishSection1Img5}
                                    alt="50 de thuc chien luyen thi vao 10"
                                    className="xl:w-[150px] md:w-[150px] w-[min(calc((100vw-92px)/2),204px)] object-cover"
                                />
                                <Image
                                    src={SecondarySchoolEnglishSection1Img6}
                                    alt="Kien thuc trong tam luyen thi vao 10"
                                    className="xl:w-[150px] md:w-[150px] w-[min(calc((100vw-92px)/2),204px)] object-cover"
                                />
                            </div>
                        </div>

                        <Image
                            src={SecondarySchoolEnglishSection1Img4}
                            alt="SecondarySchoolEnglishSection1Img4"
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
                                        <span className="font-[600]">
                                            Kiến thức vững vàng:
                                        </span>
                                        Thành thạo từ vựng, ngữ pháp, dạng bài
                                        trọng tâm theo chuẩn đề thi vào 10.
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
                                            Phát triển toàn diện 4 kỹ năng:
                                        </span>
                                        Nghe – Nói – Đọc – Viết, rèn phản xạ
                                        giao tiếp tự nhiên, giúp học sinh sử
                                        dụng tiếng Anh hiệu quả trong học tập và
                                        cuộc sống.
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Target}
                                        alt="Target"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px] text-justify">
                                        Củng cố kiến thức để đạt điểm 9+ trong
                                        các bài kiểm tra và kỳ thi trên lớp.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-4 flex justify-center bg-[#ffebe7]">
                <div className="flex flex-1 flex-col md:pt-[20px] pt-[10px] md:pb-[30px] pb-[20px] gap-[20px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] px-[16px] md:px-[0px]">
                    <p className="md:text-[25px] text-[20px] font-bold text-white text-center uppercase bg-[#00c9c9] p-[10px] rounded-full">
                        LỚP PRE-IELTS
                    </p>
                    <div className="flex md:flex-row flex-col xl:gap-[10px] md:gap-[20px] gap-[30px] bg-white p-[20px] rounded-[30px] border-[5px] border-[#00c9c9]">
                        <div className="flex flex-col xl:min-w-[400px] xl:max-w-[400px] md:min-w-[340px] md:max-w-[340px] gap-[10px]">
                            <p className="md:text-[25px] text-[20px] text-[#D14242] font-[700]">
                                Giáo trình
                            </p>

                            <div className="flex flex-col gap-[5px]">
                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Ok}
                                        alt="Ok"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px]">
                                        <span className="font-[600]">
                                            IDP IELTS Prepare Online
                                        </span>
                                    </p>
                                </div>
                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Ok}
                                        alt="Ok"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px]">
                                        <span className="font-[600]">
                                            Complete IELTS:
                                        </span>
                                        Sách luyện thi toàn diện, bổ trợ cả 4 kỹ
                                        năng.
                                    </p>
                                </div>
                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Ok}
                                        alt="Ok"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px]">
                                        <span className="font-[600]">
                                            Get Ready for IELTS:
                                        </span>
                                        Phù hợp cho người mới bắt đầu, chia
                                        thành 12 chủ đề giúp tiếp thu dễ dàng.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-[20px] justify-center">
                                <Image
                                    src={SecondarySchoolEnglishSection1Img8}
                                    alt="Complete IELTS"
                                    className="xl:w-[150px] md:w-[150px] w-[min(calc((100vw-92px)/2),204px)] object-cover"
                                />
                                <Image
                                    src={SecondarySchoolEnglishSection1Img9}
                                    alt="Get Ready for IELTS"
                                    className="xl:w-[150px] md:w-[150px] w-[min(calc((100vw-92px)/2),204px)] object-cover"
                                />
                            </div>
                        </div>

                        <Image
                            src={SecondarySchoolEnglishSection1Img7}
                            alt="SecondarySchoolEnglishSection1Img7"
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
                                        Làm quen cấu trúc & dạng bài thi IELTS.
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Target}
                                        alt="Target"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px] text-justify">
                                        Luyện phát âm 44 âm IPA.
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Target}
                                        alt="Target"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px] text-justify">
                                        Mở rộng vốn từ & nâng cao đọc hiểu.
                                    </p>
                                </div>

                                <div className="flex gap-[5px]">
                                    <Image
                                        src={Target}
                                        alt="Target"
                                        className="w-[25px] h-[25px] mr-[5px]"
                                    />
                                    <p className="md:text-[18px] text-[16px] text-justify">
                                        Phát triển toàn diện bốn kỹ năng nghe -
                                        nói - đọc - viết, tạo tiền đề vững vàng
                                        trước khi bước vào giai đoạn luyện thi
                                        IELTS chuyên sâu.
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
