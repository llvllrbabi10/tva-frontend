// Format câu trả lời tự luận
export const normalizeText = (text: string): string => {
    return text
        .toLowerCase()
        .replace(/[.,!?;:]/g, "") // bỏ dấu câu ở cuối
        .replace(/đ/g, "d") // thay thế riêng cho đ
        .replace(/Đ/g, "d") // thay thế riêng cho đ
        .normalize("NFD") // bỏ dấu tiếng Việt
        .replace(/[\u0300-\u036f]/g, "") // remove dấu
        .trim()
        .replace(/\s+/g, " "); // chuẩn hoá khoảng trắng
};

// Lấy style từ các marks trong Tiptap
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStyleFromMarks = (marks: any[] = []) => {
    const style: React.CSSProperties = {};
    let fontWeight: string | undefined;
    let fontStyle: string | undefined;
    const textDecoration: string[] = [];

    for (const mark of marks) {
        switch (mark.type) {
            case "bold":
                fontWeight = "bold";
                break;
            case "italic":
                fontStyle = "italic";
                break;
            case "underline":
                textDecoration.push("underline");
                break;
            case "strike":
                textDecoration.push("line-through");
                break;
            case "textStyle":
                if (mark.attrs?.color) {
                    style.color = mark.attrs.color;
                }
                if (mark.attrs?.backgroundColor) {
                    style.backgroundColor = mark.attrs.backgroundColor;
                }
                break;
        }
    }

    return {
        ...style,
        fontWeight,
        fontStyle,
        textDecoration:
            textDecoration.length > 0 ? textDecoration.join(" ") : undefined,
    };
};
