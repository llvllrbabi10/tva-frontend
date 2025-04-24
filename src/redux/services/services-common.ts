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
