import { useEffect, useState } from "react";

export default function HeroCartAnimation() {
    const [items, setItems] = useState(
        Array.from({ length: 6 }, (_, i) => ({
            id: i,
            x: Math.random() * 200,
            y: Math.random() * -300,
        }))
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setItems((prev) =>
                prev.map((item) => ({
                    ...item,
                    y: item.y > 200 ? -100 : item.y + 6,
                }))
            );
        }, 40);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-[320px] h-[360px] mx-auto">

            {/* Falling items */}
            {items.map((item) => (
                <div
                    key={item.id}
                    className="absolute w-8 h-8 rounded-md bg-brand-primary/80"
                    style={{
                        transform: `translate(${item.x}px, ${item.y}px)`,
                    }}
                />
            ))}

            {/* Cart */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <svg
                    width="180"
                    height="110"
                    viewBox="0 0 180 110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Basket */}
                    <path
                        d="M20 20H150L135 65H40L20 20Z"
                        stroke="#8b5cf6"
                        strokeWidth="3"
                        strokeLinejoin="round"
                    />

                    {/* Basket grid */}
                    <path
                        d="M40 25V60M60 25V60M80 25V60M100 25V60M120 25V60"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        opacity="0.6"
                    />
                    <path
                        d="M30 35H140M35 50H135"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        opacity="0.6"
                    />

                    {/* Handle */}
                    <path
                        d="M150 20L165 5"
                        stroke="#8b5cf6"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />

                    {/* Base */}
                    <path
                        d="M55 65L45 90H130"
                        stroke="#8b5cf6"
                        strokeWidth="3"
                        strokeLinejoin="round"
                    />

                    {/* Wheels */}
                    <circle cx="60" cy="95" r="7" stroke="#8b5cf6" strokeWidth="3" />
                    <circle cx="120" cy="95" r="7" stroke="#8b5cf6" strokeWidth="3" />
                </svg>

            </div>
        </div>
    );
}
