"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CircularProgress({
    value,
    max,
    size = 120,
    stroke = 15,
    duration = 1000,
}: {
    value: number;
    max: number;
    size?: number;
    stroke?: number;
    duration?: number;
}) {
    const radius = size / 2 - stroke / 2;
    const circumference = 2 * Math.PI * radius;

    const [progress, setProgress] = useState(0);
    const requestRef = useRef<number>(0);

    useEffect(() => {
        let start: number | null = null;

        const animate = (timestamp: number) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            const percentage = Math.min(elapsed / duration, 1);
            const animatedValue = value * percentage;

            setProgress(animatedValue);

            if (percentage < 1) {
                requestRef.current = requestAnimationFrame(animate);
            }
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [value, duration]);

    const strokeDashoffset = circumference - (progress / max) * circumference;

    return (
        <svg width={size} height={size}>
            {/* Background circle */}
            <circle
                stroke="#f2b0a0"
                fill="transparent"
                strokeWidth={stroke}
                r={radius}
                cx={size / 2}
                cy={size / 2}
            />

            {/* Progress circle */}
            <circle
                stroke="#e25a44"
                fill="transparent"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                r={radius}
                cx={size / 2}
                cy={size / 2}
                style={{
                    transform: "rotate(-90deg)",
                    transformOrigin: "50% 50%",
                }}
            />

            {/* Text ở giữa */}
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize={size * 0.25}
                fill="#e25a44"
                fontWeight="bold"
            >
                {progress.toFixed(1)}
            </text>
        </svg>
    );
}
