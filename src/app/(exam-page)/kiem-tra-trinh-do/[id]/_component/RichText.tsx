import { RichTextBlock } from "../_model/model";

export default function RichText({ content }: { content: RichTextBlock[] }) {
    return (
        <span className="flex flex-wrap">
            {content.map((block, index) => {
                if (block.isUserEnterPlace) {
                    return (
                        <input
                            key={index}
                            className="border-b border-black w-24 mx-1 focus:outline-none bg-transparent"
                            type="text"
                        />
                    );
                }

                return (
                    <span
                        key={index}
                        style={{
                            fontWeight: block.bold ? 600 : undefined,
                            fontStyle: block.italic ? "italic" : undefined,
                            textDecoration: block.underline
                                ? "underline"
                                : undefined,
                            color: block.color,
                            backgroundColor: block.backgroundColor,
                            fontSize: block.fontSize,
                        }}
                    >
                        {block.text}
                    </span>
                );
            })}
        </span>
    );
}
