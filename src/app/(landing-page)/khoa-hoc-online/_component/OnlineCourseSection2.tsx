"use client";

import Image from "next/image";

import {
    OnlineClassDetailSection2Img1,
    OnlineClassDetailSection2Img2,
    OnlineClassDetailSection2Img3,
} from "@images/assets/index";
import { useEffect, useRef } from "react";

type OnlineCourseSection2Props = {
    content1: string;
    content2: string;
    content3: string;
};

function OnlineCourseSection2({
    content1,
    content2,
    content3,
}: OnlineCourseSection2Props) {
    const contentRefs = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
    ];

    useEffect(() => {
        const heights = contentRefs.map(
            (ref) => ref.current?.offsetHeight || 0
        );
        const maxHeight = Math.max(...heights);

        contentRefs.forEach((ref) => {
            if (ref.current) {
                ref.current.style.height = `${maxHeight}px`;
            }
        });
    }, []);

    return (
        <div>
            <div className="section-2 flex justify-center bg-[#ffebe7]">
                <div className="flex flex-col md:pt-[30px] pt-[20px] xl:max-w-[1080px] md:max-w-[750px] max-w-[500px] px-[16px] md:px-[0px] gap-[20px]">
                    <p className="text-[20px] font-[600]">
                        Khóa học này dành cho ai?
                    </p>
                    <div className="flex md:flex-row flex-col gap-[20px]">
                        <div className="flex flex-col xl:w-[530px] md:[365px] gap-[20px]">
                            <div className="flex flex-col">
                                <div
                                    className={`flex relative items-center`}
                                    ref={contentRefs[0]}
                                >
                                    <Image
                                        src={OnlineClassDetailSection2Img1}
                                        alt="OnlineClassDetailSection2Img1"
                                        className="absolute w-full h-full"
                                    />
                                    <div className="flex relative z-10 xl:ml-[80px] md:ml-[50px] ml-[min(calc(100vw*0.12),60px)] xl:mr-[30px] mr-[20px] gap-[10px] xl:py-[35px] py-[30px] items-center">
                                        <p className="xl:text-[16px] text-[14px] text-white text-justify">
                                            {content1}
                                        </p>
                                        <div className="flex justify-center items-center bg-white xl:h-[50px] h-[40px] xl:min-w-[50px] min-w-[40px] xl:text-[30px] text-[25px] rounded-full">
                                            1
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`flex relative items-center xl:mt-[-20px] mt-[-18px]`}
                                    ref={contentRefs[1]}
                                >
                                    <Image
                                        src={OnlineClassDetailSection2Img2}
                                        alt="OnlineClassDetailSection2Img2"
                                        className="absolute w-full h-full"
                                    />
                                    <div className="flex relative z-10 xl:ml-[30px] ml-[20px] xl:mr-[80px] md:mr-[50px] mr-[min(calc(100vw*0.12),60px)] gap-[10px] xl:py-[35px] py-[30px] items-center">
                                        <div className="flex justify-center items-center bg-white xl:h-[50px] h-[40px] xl:min-w-[50px] min-w-[40px] xl:text-[30px] text-[25px] rounded-full">
                                            2
                                        </div>
                                        <p className="xl:text-[16px] text-[14px] text-white text-justify">
                                            {content2}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className={`flex relative items-center xl:mt-[-13px] mt-[-12px]`}
                                    ref={contentRefs[3]}
                                >
                                    <Image
                                        src={OnlineClassDetailSection2Img3}
                                        alt="OnlineClassDetailSection2Img3"
                                        className="absolute w-full h-full"
                                    />
                                    <div className="flex relative z-10 xl:ml-[80px] md:ml-[50px] ml-[min(calc(100vw*0.12),60px)] xl:mr-[30px] mr-[20px] gap-[10px] xl:py-[35px] py-[30px] items-center">
                                        <p className="xl:text-[16px] text-[14px] text-white">
                                            {content3}
                                        </p>
                                        <div className="flex justify-center items-center bg-white xl:h-[50px] h-[40px] xl:min-w-[50px] min-w-[40px] xl:text-[30px] text-[25px] rounded-full">
                                            3
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex xl:w-[530px] md:w-[365px] w-[min(calc(100vw-32px),468px)] justify-between items-center">
                            <div className="flex xl:w-[530px] md:w-[364px] xl:h-[300px] md:h-[230px] w-[min(calc(100vw-32px),468px)] h-[min(calc((100vw-32px)*0.6),280px)] rounded-[20px] overflow-hidden">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/0fqxA86k03k"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OnlineCourseSection2;
