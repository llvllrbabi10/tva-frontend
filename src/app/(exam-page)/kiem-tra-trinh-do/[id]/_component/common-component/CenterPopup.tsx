"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const CenterPopup = ({
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
    }, []);

    const handleClose = () => {
        // Trigger animation out
        setVisible(false);

        // Wait for animation to finish (300ms), then close
        setTimeout(() => {
            onClose();
        }, 200);
    };

    if (typeof window === "undefined") return null;

    return createPortal(
        <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
            onClick={handleClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                    bg-white overflow-auto relative pt-[30px] pb-[16px] px-[16px] rounded-[15px]
                    transition-all duration-300 ease-in-out
                    ${visible ? "opacity-100" : "opacity-0"}
                `}
            >
                <button
                    className="absolute top-[3px] right-[10px] text-gray-500 hover:text-black cursor-pointer"
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

export default CenterPopup;
