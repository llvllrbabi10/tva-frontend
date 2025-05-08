"use client";

import { useState } from "react";
import { RegisterPopupImg } from "@images/assets";
import Image from "next/image";
import Link from "next/link";

function RegisterPopup() {
    const [show, setShow] = useState(true);

    if (!show) return null;

    return (
        <div className="fixed md:bottom-10 bottom-5 right-5 z-50">
            <button
                onClick={() => setShow(false)}
                className="absolute top-0 right-0 translate-x-1/2 -translate-y-2/3 text-black rounded-full p-1 transition-colors cursor-pointer z-60"
                aria-label="Đóng popup"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            <Link
                href="https://docs.google.com/forms/d/1AZBG2bfRC1m51m7VlRdp7ssNlBZDji8XmsDvlxi9IiM"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src={RegisterPopupImg}
                    alt="Register"
                    className="scale-animate md:w-[200px] w-[180px] cursor-pointer"
                />
            </Link>
        </div>
    );
}

export default RegisterPopup;
