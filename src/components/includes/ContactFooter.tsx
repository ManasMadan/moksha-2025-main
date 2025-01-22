"use client";
import { Cinzel } from "next/font/google";
import { HTMLAttributes } from "react";
import Link from "next/link";
import Image from "next/image";

const cinzel = Cinzel({
    subsets: ["latin"],
});

const FooterLinks: { name: string; href: string; src : string }[] =
    [
        {
            name: "Gmail",
            href: "mailto:test.com",
            src : "/assets/logos/gmail.svg"
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/mokshansut",
            src : "/assets/logos/instagram.svg"
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/mokshansut",
            src : "/assets/logos/facebook.svg"
        },
        {
            name: "Twitter",
            href: "https://x.com/mokshansut",
            src : "/assets/logos/twitter.svg"
        },
    ];

export default function ContactFooter(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <footer
            {...props}
            className={`absolute z-10 bottom-2 right-2 sm:right-4 md:right-10 ${props.className} flex flex-col items-end text-white p-10`}
        >
            <h3
                className={`${cinzel.className} text-xl sm:text-2xl md:text-3xl hover:text-[#FFDE7D] transition-colors duration-300 ease-in-out my-2 md:my-4`}
            >
                Contact Us
            </h3>
            <ul className="flex items-end justify-center gap-2 sm:gap-4 md:gap-6">
                {FooterLinks.map((item) => (
                    <li key={item.name}>
                        <Link href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit our ${item.name} page`}>
                            <Image src={item.src} alt={item.name} width={30} height={30} className="w-auto h-auto max-h-6 md:max-h-10"/>
                        </Link>
                    </li>
                ))}
            </ul>
            <hr className="w-10/12 border-1 mt-6 md:mt-8 mb-2" />
            <div className="w-10/12 flex flex-col items-end gap-1">
                <p className={`${cinzel.className} text-sm text-right`}>
                    Netaji Subhas Institute of Technology
                </p>
                <p className={`${cinzel.className} text-sm text-right`}>
                    Azad Hind Fauj Marg, Dwarka Sector-3, Dwarka, Delhi, 110078
                </p>
            </div>
        </footer>
    );
}
