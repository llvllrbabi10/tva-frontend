"use client";

import { EditorContent, JSONContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";

export default function EditorRender({
    jsonContent,
}: {
    jsonContent: JSONContent;
}) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextStyle,
            Underline,
            Color,
            Highlight.configure({ multicolor: true }),
            Image.configure({
                inline: true, // cho phép ảnh inline trong text
                allowBase64: true, // quan trọng để cho phép ảnh dạng base64
            }),
        ],
        editable: false,
        content: jsonContent,
        immediatelyRender: false, // 👇 Đây là cấu hình Tiptap cảnh báo thêm
    });

    return <EditorContent editor={editor} />;
}
