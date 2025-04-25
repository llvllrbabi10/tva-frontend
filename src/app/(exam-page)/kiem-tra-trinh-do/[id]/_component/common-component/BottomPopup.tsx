"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const BottomPopup = ({
    children,
    onClose,
}: {
    children: React.ReactNode;
    onClose: () => void;
}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Trigger animation in
        setVisible(true);

        // ✳️ Ngăn scroll body khi popup mở
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const handleClose = () => {
        // Trigger animation out
        setVisible(false);

        // Wait for animation to finish (300ms), then close
        setTimeout(() => {
            onClose();
        }, 300);
    };

    if (typeof window === "undefined") return null;

    return createPortal(
        <div
            className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center"
            onClick={handleClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                    bg-white overflow-auto relative pt-[30px] pb-[16px] px-[16px] rounded-t-[15px]
                    transition-transform duration-300 ease-in-out
                    ${visible ? "translate-y-0" : "translate-y-full"}
                `}
            >
                <button
                    className="absolute top-[3px] right-[10px] text-gray-500 hover:text-black"
                    onClick={handleClose}
                >
                    ✖
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default BottomPopup;
