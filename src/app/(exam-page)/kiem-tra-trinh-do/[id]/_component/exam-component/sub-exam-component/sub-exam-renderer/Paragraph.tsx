import { Paragraph } from "@/app/(exam-page)/kiem-tra-trinh-do/[id]/_model/model";
import EditorRender from "@/app/(exam-page)/kiem-tra-trinh-do/[id]/_component/common-component/EditorRender";

import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function ParagraphRenderer({ data }: { data: Paragraph }) {
    const { color, backgroundColor, textAlign } = data.contentStyle;

    const isTitle = data.translate ? false : true; // Kiểm tra xem đây có phải là tiêu đề không

    const { submitted } = useSelector(
        (state: RootState) => ({
            submitted: state.exam.submitted,
        }),
        shallowEqual
    );

    return (
        <>
            <div
                className={`
                text-[16px] 
                rounded-[10px] 
                px-[16px] 
                py-[10px] 
                ${isTitle ? "mt-[20px]" : "mt-[10px]"}`}
                style={{
                    color: color ? color : "black",
                    backgroundColor: backgroundColor
                        ? backgroundColor
                        : "white",
                    textAlign: textAlign ? textAlign : "left",
                }}
            >
                <EditorRender jsonContent={data.content} />
            </div>
            {submitted && data.translate && (
                <div
                    className="
                        text-sm
                        bg-[#f7ffbe]
                        rounded-[10px] 
                        px-[16px] 
                        py-[10px] 
                        mt-[10px]"
                >
                    <p className="font-bold">Đoạn dịch:</p>
                    <EditorRender jsonContent={data.translate} />
                </div>
            )}
        </>
    );
}
