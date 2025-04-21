import { Paragraph } from "../../../../_model/model";
import RichText from "./RichText";

export default function ParagraphRenderer({ data }: { data: Paragraph }) {
    return (
        <div
            className="md:text-[18px] text-[16px] rounded-[10px] px-[16px] py-[10px] mt-[20px]"
            style={{
                backgroundColor: data.backgroundColor
                    ? data.backgroundColor
                    : undefined,
                color: data.color ? data.color : undefined,
                textAlign: data.align
                    ? (data.align as React.CSSProperties["textAlign"])
                    : undefined,
            }}
        >
            <RichText content={data.content} />
        </div>
    );
}
