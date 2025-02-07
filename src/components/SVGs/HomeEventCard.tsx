import * as React from "react";
import { SVGProps } from "react";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
    subsets: ["latin"],
});

interface HomeEventCardProps extends SVGProps<SVGSVGElement> {
    text?: string;
    img?: string;
}

const HomeEventCard = (props: HomeEventCardProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
       
        viewBox="0 0 497 600"
        fill="none"
        {...props}
    >
        <g filter="url(#a)" shapeRendering="crispEdges">
            <path
                fill="url(#b)"
                fillOpacity={0.1}
                d="M126.055 533.586c-11.046.033-20.027-8.895-20.06-19.94l-.978-328.041a20 20 0 0 1 7.136-15.374l110.769-93.045a20 20 0 0 1 12.863-4.686h43.047a20.002 20.002 0 0 1 14.001 5.718l93.151 91.319a20 20 0 0 1 5.999 14.222l.981 329.031c.033 11.046-8.895 20.027-19.941 20.059l-246.968.737Z"
            />
            <path
                fill="url(#c)"
                fillOpacity={0.15}
                d="M126.055 533.586c-11.046.033-20.027-8.895-20.06-19.94l-.978-328.041a20 20 0 0 1 7.136-15.374l110.769-93.045a20 20 0 0 1 12.863-4.686h43.047a20.002 20.002 0 0 1 14.001 5.718l93.151 91.319a20 20 0 0 1 5.999 14.222l.981 329.031c.033 11.046-8.895 20.027-19.941 20.059l-246.968.737Z"
            />
            <path
                stroke="url(#d)"
                strokeOpacity={0.5}
                d="M126.053 533.086c-10.769.032-19.526-8.672-19.558-19.442l-.978-328.041a19.5 19.5 0 0 1 6.958-14.989l110.768-93.045A19.5 19.5 0 0 1 235.785 73h43.047a19.5 19.5 0 0 1 13.651 5.575l93.151 91.319a19.503 19.503 0 0 1 5.849 13.866l.981 329.031c.032 10.77-8.673 19.526-19.442 19.558l-246.969.737Z"
            />
        </g>
        <image
            xlinkHref={props.img || ""}
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clip)"
        />
        <path fill="url(#e)" d="M0 0h497v600H0z" />
        <text
            x="50%"
            y="75%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily={cinzel.style.fontFamily}
            fontSize="48"
            fill="#BBB8D6"
        >
            {props.text || "Day 1"}
        </text>
        <defs>
            <clipPath id="clip">
                <path
                    d="M126.055 533.586c-11.046.033-20.027-8.895-20.06-19.94l-.978-328.041a20 20 0 0 1 7.136-15.374l110.769-93.045a20 20 0 0 1 12.863-4.686h43.047a20.002 20.002 0 0 1 14.001 5.718l93.151 91.319a20 20 0 0 1 5.999 14.222l.981 329.031c.033 11.046-8.895 20.027-19.941 20.059l-246.968.737Z"
                />
            </clipPath>
            <linearGradient
                id="b"
                x1={158.351}
                x2={265.616}
                y1={436.249}
                y2={509.758}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#fff" />
                <stop offset={1} stopColor="#fff" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient
                id="c"
                x1={350.789}
                x2={202.387}
                y1={175.678}
                y2={512.439}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#1D2649" />
                <stop offset={1} stopColor="#1E1E1E" stopOpacity={0} />
            </linearGradient>
            <linearGradient
                id="d"
                x1={251.12}
                x2={535.074}
                y1={196.526}
                y2={742.943}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#fff" />
                <stop offset={1} stopColor="#1E1E1E" stopOpacity={0} />
            </linearGradient>
            <pattern
                id="e"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <use xlinkHref="#f" transform="matrix(.0025 0 0 .00207 0 -.121)" />
            </pattern>
            <filter
                id="a"
                width={337.947}
                height={511.086}
                x={80.017}
                y={47.5}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={12.5} />
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_3001_7"
                />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={10} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend
                    in2="effect1_backgroundBlur_3001_7"
                    result="effect2_dropShadow_3001_7"
                />
                <feBlend
                    in="SourceGraphic"
                    in2="effect2_dropShadow_3001_7"
                    result="shape"
                />
            </filter>
            <image
                xlinkHref="/assets/home/evnet-gold-frame.png"
                id="f"
                width={400}
                height={600}
            />
        </defs>
    </svg>
);

export default HomeEventCard;
